"use strict";
// ============================================
// Step 1: 基本のTask型を定義
// 学ぶ概念: 型注釈、オブジェクト型
// ============================================
// タスク1つを表すオブジェクトを作成
// 各プロパティに「: 型」をつけて型注釈をしている
const task1 = {
    id: 1,
    title: "TypeScriptを学ぶ",
    completed: false,
};
// 確認用に出力
console.log("=== Step 1: 基本のTask ===");
console.log(task1);
console.log(`タスク: ${task1.title}, 完了: ${task1.completed}`);
const task2 = {
    id: 2,
    title: "Node.jsを学ぶ",
    completed: true
};
console.log(task2);
// 配列型: Task[] は「Taskの配列」という意味
const tasks = [
    { id: 1, title: "TypeScriptを学ぶ", completed: false },
    { id: 2, title: "Node.jsを学ぶ", completed: true },
    { id: 3, title: "Reactを学ぶ", completed: false },
];
console.log("\n=== Step 2: タスク配列 ===");
console.log(`タスク数: ${tasks.length}`);
tasks.forEach((task) => {
    const status = task.completed ? "✓" : "○";
    console.log(`${status} [${task.id}] ${task.title}`);
});
tasks.push({ id: 4, title: "Fastifyを学ぶ", completed: false });
console.log(`追加後のタスク数: ${tasks.length}`);
const tasksV2 = [
    { id: 1, title: "TypeScriptを学ぶ", status: "in_progress" },
    { id: 2, title: "Node.jsを学ぶ", status: "done" },
    { id: 3, title: "Reactを学ぶ", status: "pending" },
];
console.log("\n=== Step 3: ユニオン型ステータス ===");
tasksV2.forEach((task) => {
    const icon = task.status === "done" ? "✓" : task.status === "in_progress" ? "→" : "○";
    console.log(`${icon} [${task.id}] ${task.title} (${task.status})`);
});
// const badTask: TaskV2 = {
//   id: 5,
//   title: "テスト",
//   status: "completed"  // ← これはエラーになる（確認済み）
// };
// ============================================
// Step 4: タスク操作関数を作成
// 学ぶ概念: 関数の型注釈（引数・戻り値）
// ============================================
// 関数の型注釈: (引数: 型): 戻り値の型
// この関数は TaskV2[] を受け取り、TaskV2[] を返す
function filterByStatus(taskList, status) {
    return taskList.filter((task) => task.status === status);
}
// タスクを追加する関数
// 戻り値がない場合は void を使う
function addTask(taskList, title) {
    const newId = taskList.length + 1;
    taskList.push({ id: newId, title: title, status: "pending" });
}
// タスクのステータスを変更する関数
function updateStatus(taskList, id, newStatus) {
    const task = taskList.find((t) => t.id === id);
    if (task) {
        task.status = newStatus;
    }
}
console.log("\n=== Step 4: タスク操作関数 ===");
// 関数を使ってみる
const pendingTasks = filterByStatus(tasksV2, "pending");
console.log("未着手タスク:", pendingTasks.map((t) => t.title));
addTask(tasksV2, "Drizzleを学ぶ");
console.log("追加後:", tasksV2.map((t) => `${t.title}(${t.status})`));
updateStatus(tasksV2, 3, "in_progress");
console.log("更新後:", tasksV2.map((t) => `${t.title}(${t.status})`));
// --------------------------------------------
// 練習問題: 完了したタスクだけを取得する関数呼び出しを書いてください
const doneTasks = filterByStatus(tasksV2, "done");
console.log("完了タスク:", doneTasks.map((t) => t.title));
// ============================================
// Step 5: 汎用フィルター関数（ジェネリクス）
// 学ぶ概念: ジェネリクス <T>
// ============================================
// <T> は「型の変数」のようなもの
// 呼び出し時に T が具体的な型に置き換わる
function filterItems(items, predicate) {
    return items.filter(predicate);
}
console.log("\n=== Step 5: ジェネリクス ===");
// TaskV2[] で使う → T が TaskV2 に置き換わる
const inProgressTasks = filterItems(tasksV2, (task) => task.status === "in_progress");
console.log("進行中:", inProgressTasks.map((t) => t.title));
// number[] で使う → T が number に置き換わる
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterItems(numbers, (n) => n % 2 === 0);
console.log("偶数:", evenNumbers);
// string[] で使う → T が string に置き換わる
const words = ["apple", "banana", "cherry", "date"];
const longWords = filterItems(words, (w) => w.length > 5);
console.log("6文字以上:", longWords);
// --------------------------------------------
// 練習問題: filterItemsを使って、idが2以上のタスクを取得してください
const highIdTasks = filterItems(tasksV2, (task) => task.id >= 2);
console.log("id >= 2:", highIdTasks.map((t) => t.title));
const priorityTasks = [
    { id: 1, title: "バグ修正", status: "in_progress", priority: "high" },
    { id: 2, title: "ドキュメント作成", status: "pending", priority: "low" },
    { id: 3, title: "新機能実装", status: "pending", priority: "medium" },
];
console.log("\n=== Step 6: インターセクション型 ===");
priorityTasks.forEach((task) => {
    const priorityIcon = task.priority === "high" ? "🔴" : task.priority === "medium" ? "🟡" : "🟢";
    console.log(`${priorityIcon} [${task.status}] ${task.title}`);
});
// 高優先度タスクをフィルター（ジェネリクスと組み合わせ）
const urgentTasks = filterItems(priorityTasks, (t) => t.priority === "high");
console.log("緊急:", urgentTasks.map((t) => t.title));
// --------------------------------------------
// 練習問題: 中優先度以上（medium または high）のタスクを取得してください
const importantTasks = filterItems(priorityTasks, (t) => t.priority !== "low");
console.log("重要:", importantTasks.map((t) => t.title));

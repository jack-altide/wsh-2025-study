// ============================================
// ES Modules デモ
// ============================================

// named import（名前を指定してインポート）
import { Task, Priority } from "./types";

// named import + default import
import APP_NAME, { filterByStatus, countTasks } from "./utils";

// 全てをまとめてインポート
// import * as Utils from "./utils";

console.log("=== ES Modules デモ ===");
console.log(`アプリ名: ${APP_NAME}\n`);

// インポートした型を使う
const tasks: Task[] = [
  { id: 1, title: "TypeScript学習", status: "done" },
  { id: 2, title: "React学習", status: "in_progress" },
  { id: 3, title: "Node.js学習", status: "pending" },
];

// インポートした関数を使う
console.log(`全タスク数: ${countTasks(tasks)}`);

const doneTasks = filterByStatus(tasks, "done");
console.log(`完了: ${doneTasks.map((t) => t.title).join(", ")}`);

const pendingTasks = filterByStatus(tasks, "pending");
console.log(`未着手: ${pendingTasks.map((t) => t.title).join(", ")}`);

// ============================================
// import/export まとめ
// ============================================
console.log("\n=== import/export パターン ===");
console.log("export { Name }       → import { Name }");
console.log("export default Value  → import Value");
console.log("export * from './x'   → 再エクスポート");

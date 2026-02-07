// ============================================
// async/await 学習
// ============================================

// Promise: 「いつか値が届く」ことを表す型
// async関数は自動的にPromiseを返す

// 1秒待つ関数（非同期処理のシミュレーション）
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// APIからデータを取得する関数（模擬）
async function fetchTask(id: number): Promise<{ id: number; title: string }> {
  console.log(`タスク${id}を取得中...`);
  await delay(500); // 0.5秒待つ
  return { id, title: `タスク${id}の内容` };
}

// メイン処理
async function main() {
  console.log("=== async/await デモ ===\n");

  // 1. 基本的なawait
  console.log("1. 単一のawait");
  const task1 = await fetchTask(1);
  console.log("取得完了:", task1);

  // 2. 連続したawait（順番に実行）
  console.log("\n2. 連続したawait（順番に実行）");
  const taskA = await fetchTask(2);
  const taskB = await fetchTask(3);
  console.log("結果:", [taskA, taskB]);

  // 3. Promise.all（並列に実行）
  console.log("\n3. Promise.all（並列に実行 → 速い）");
  const [taskX, taskY, taskZ] = await Promise.all([
    fetchTask(4),
    fetchTask(5),
    fetchTask(6),
  ]);
  console.log("結果:", [taskX, taskY, taskZ]);
  
  const [taskx, tasky, taskz] = await Promise.all([
    fetchTask(10),
    fetchTask(11),
    fetchTask(12),
  ]);

  // 4. エラーハンドリング
  console.log("\n4. エラーハンドリング");
  try {
    await failingTask();
  } catch (error) {
    console.log("エラーをキャッチ:", (error as Error).message);
  }

  console.log("\n完了!");
}

// エラーを投げる関数
async function failingTask(): Promise<void> {
  await delay(100);
  throw new Error("タスクが失敗しました");
}

// 実行
main();


// ============================================
// ユーティリティ関数をエクスポート
// ============================================

import { Task } from "./types";  // 別ファイルからインポート

// named export
export function filterByStatus(tasks: Task[], status: Task["status"]): Task[] {
  return tasks.filter((t) => t.status === status);
}

export function countTasks(tasks: Task[]): number {
  return tasks.length;
}

// default export（1ファイル1つだけ）
const APP_NAME = "Task Manager";
export default APP_NAME;

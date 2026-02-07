// ============================================
// 型定義をエクスポート
// ============================================

// named export（名前付きエクスポート）
export interface Task {
  id: number;
  title: string;
  status: "pending" | "in_progress" | "done";
}

export type Priority = "low" | "medium" | "high";

// 複数まとめてエクスポートすることも可能
// export { Task, Priority };

"use strict";
// ============================================
// ユーティリティ関数をエクスポート
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByStatus = filterByStatus;
exports.countTasks = countTasks;
// named export
function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
function countTasks(tasks) {
    return tasks.length;
}
// default export（1ファイル1つだけ）
const APP_NAME = "Task Manager";
exports.default = APP_NAME;

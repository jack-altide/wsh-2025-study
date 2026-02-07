"use strict";
// ============================================
// ES Modules デモ
// ============================================
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// named import + default import
const utils_1 = __importStar(require("./utils"));
// 全てをまとめてインポート
// import * as Utils from "./utils";
console.log("=== ES Modules デモ ===");
console.log(`アプリ名: ${utils_1.default}\n`);
// インポートした型を使う
const tasks = [
    { id: 1, title: "TypeScript学習", status: "done" },
    { id: 2, title: "React学習", status: "in_progress" },
    { id: 3, title: "Node.js学習", status: "pending" },
];
// インポートした関数を使う
console.log(`全タスク数: ${(0, utils_1.countTasks)(tasks)}`);
const doneTasks = (0, utils_1.filterByStatus)(tasks, "done");
console.log(`完了: ${doneTasks.map((t) => t.title).join(", ")}`);
const pendingTasks = (0, utils_1.filterByStatus)(tasks, "pending");
console.log(`未着手: ${pendingTasks.map((t) => t.title).join(", ")}`);
// ============================================
// import/export まとめ
// ============================================
console.log("\n=== import/export パターン ===");
console.log("export { Name }       → import { Name }");
console.log("export default Value  → import Value");
console.log("export * from './x'   → 再エクスポート");

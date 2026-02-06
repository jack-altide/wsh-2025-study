# TypeScript 基礎

## 概要

TypeScriptはJavaScriptに静的型付けを追加した言語。コンパイル時に型エラーを検出できる。

## 学んだ概念

### 1. 型注釈・オブジェクト型

変数やプロパティに型を明示する。

```typescript
const task: { id: number; title: string; completed: boolean } = {
  id: 1,
  title: "TypeScriptを学ぶ",
  completed: false,
};
```

### 2. 型エイリアス・配列型

`type` で型に名前をつけ、`型[]` で配列を表す。

```typescript
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [
  { id: 1, title: "TypeScriptを学ぶ", completed: false },
];
```

### 3. ユニオン型・リテラル型

`|` で複数の型を許可。リテラル型で特定の値のみ許可。

```typescript
type Status = "pending" | "in_progress" | "done";

const status: Status = "pending";  // OK
const status: Status = "completed"; // エラー！
```

### 4. 関数の型

引数と戻り値に型を指定。戻り値がない場合は `void`。

```typescript
function filterByStatus(taskList: Task[], status: Status): Task[] {
  return taskList.filter((task) => task.status === status);
}

function addTask(taskList: Task[], title: string): void {
  taskList.push({ id: taskList.length + 1, title, status: "pending" });
}
```

### 5. ジェネリクス

`<T>` で汎用的な関数を作成。呼び出し時に型が決まる。

```typescript
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

// 使用例
filterItems(tasks, (t) => t.status === "done");  // T = Task
filterItems([1,2,3], (n) => n > 2);              // T = number
```

### 6. インターセクション型

`&` で複数の型を合成。

```typescript
type WithPriority = { priority: "low" | "medium" | "high" };
type PriorityTask = Task & WithPriority;
// → Task のプロパティ + priority を持つ型
```

## まとめ表

| 概念 | 書き方 | 意味 |
|------|--------|------|
| 型注釈 | `変数: 型` | 型を明示 |
| 型エイリアス | `type Name = 型` | 型に名前をつける |
| 配列型 | `型[]` | 型の配列 |
| ユニオン型 | `A \| B` | AまたはB |
| リテラル型 | `"value"` | 特定の値のみ |
| 関数型 | `(引数: 型): 戻り値` | 関数の型 |
| ジェネリクス | `<T>` | 汎用的な型パラメータ |
| インターセクション型 | `A & B` | AかつB |

## 参考リンク

- [ut.code 学習ページ - TypeScript](https://learn.utcode.net/docs/advanced/typescript/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)

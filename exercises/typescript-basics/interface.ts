// ============================================
// interface vs type
// ============================================

// --- type（型エイリアス）---
type UserType = {
  id: number;
  name: string;
};

// --- interface ---
interface UserInterface {
  id: number;
  name: string;
}

// 使い方は同じ
const user1: UserType = { id: 1, name: "太郎" };
const user2: UserInterface = { id: 2, name: "花子" };

console.log("=== 基本的な使い方は同じ ===");
console.log(user1, user2);

// ============================================
// 違い1: interfaceは拡張（extends）できる
// ============================================

interface Animal {
  name: string;
}

// extendsで継承
interface Dog extends Animal {
  breed: string;  // 犬種を追加
}

const dog: Dog = {
  name: "ポチ",
  breed: "柴犬",
};

console.log("\n=== interface の extends ===");
console.log(dog);

// typeでも同じことはできる（&を使う）
type Cat = Animal & {
  color: string;
};

const cat: Cat = {
  name: "タマ",
  color: "白",
};
console.log(cat);

// ============================================
// 違い2: interfaceは同名で宣言すると合体する
// ============================================

interface Config {
  apiUrl: string;
}

// 同じ名前で追加宣言 → 合体する（Declaration Merging）
interface Config {
  timeout: number;
}

// 両方のプロパティが必要
const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

console.log("\n=== Declaration Merging ===");
console.log(config);

// ============================================
// 違い3: typeはユニオン型を定義できる
// ============================================

// これはtypeでしかできない
type TaskStatus = "pending" | "done";
type ID = number | string;

const taskStatus: TaskStatus = "pending";
const id: ID = "abc-123";

console.log("\n=== type のユニオン型 ===");
console.log(taskStatus, id);

// ============================================
// 実践: どちらを使うべき？
// ============================================

console.log("\n=== 使い分けの目安 ===");
console.log("- オブジェクトの形を定義 → interface");
console.log("- ユニオン型・リテラル型 → type");
console.log("- ライブラリの型拡張 → interface");
console.log("- 迷ったら → どちらでもOK（プロジェクトのルールに従う）");

// ============================================
// 練習問題
// ============================================

// 以下のinterfaceを完成させてください
// Vehicleを継承したCarを作る

interface Vehicle {
  brand: string;
  year: number;
}

// ここにCar interfaceを作成
// - Vehicleを継承
interface Car extends Vehicle{
// - doors: number を追加
  doors: number;
}

const myCar: Car = {
  brand: "Toyota",
  year: 2020,
  doors: 4,
};
console.log("\n練習問題:", myCar);

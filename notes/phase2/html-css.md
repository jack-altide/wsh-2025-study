# HTML/CSS 基礎

## 概要

- **HTML**: Webページの構造を定義
- **CSS**: Webページの見た目を定義

## 主要HTMLタグ

| タグ | 用途 |
|------|------|
| `<div>` | 汎用コンテナ |
| `<p>` | 段落 |
| `<h1>`~`<h6>` | 見出し |
| `<a>` | リンク |
| `<img>` | 画像 |
| `<button>` | ボタン |
| `<form>` | フォーム |
| `<input>` | 入力欄 |

## CSSの基本

```css
/* セレクタ { プロパティ: 値; } */
.クラス名 { color: red; }       /* クラスセレクタ */
#id名 { color: blue; }          /* IDセレクタ */
タグ名 { color: green; }        /* タグセレクタ */
.親 .子 { color: orange; }      /* 子孫セレクタ */
```

## Flexbox（1次元レイアウト）

```css
.container {
  display: flex;
  flex-direction: row;           /* row（横）/ column（縦） */
  justify-content: space-between; /* 横方向の配置 */
  align-items: center;           /* 縦方向の配置 */
  gap: 16px;
}
```

## Grid（2次元レイアウト）

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2列均等 */
  gap: 12px;
}
```

| 比較 | Flexbox | Grid |
|------|---------|------|
| 方向 | 1次元（横or縦） | 2次元（横+縦） |
| 用途 | ナビバー、横並び | カード一覧、ページ全体 |

## レスポンシブデザイン

```css
@media (max-width: 480px) {
  .container {
    flex-direction: column;       /* スマホでは縦並び */
  }
  .grid {
    grid-template-columns: 1fr;   /* スマホでは1列 */
  }
}
```

## 参考リンク

- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/ja/docs/Web/CSS)
- [Flexbox Froggy](https://flexboxfroggy.com/#ja)
- [Grid Garden](https://cssgridgarden.com/#ja)

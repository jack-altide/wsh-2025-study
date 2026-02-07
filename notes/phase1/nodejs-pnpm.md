# Node.js と npm/pnpm

## 概要

- **Node.js**: JavaScriptをブラウザ外で実行する環境
- **npm/pnpm**: Node.js用のパッケージマネージャー

## package.json の主要フィールド

```json
{
  "scripts": {},          // 実行コマンド（pnpm run build 等）
  "dependencies": {},     // 本番で必要なライブラリ
  "devDependencies": {},  // 開発時のみ必要（TypeScript等）
  "engines": {}           // 必要なNode.jsバージョン
}
```

| フィールド | 用途 |
|-----------|------|
| `dependencies` | 本番環境で必要 |
| `devDependencies` | 開発時のみ必要 |
| `scripts` | `pnpm run xxx` で実行するコマンド |
| `engines` | 必要なNode.jsバージョン |

## pnpm install の動作

1. package.json の dependencies を読む
2. インターネットからライブラリをダウンロード
3. node_modules/ に保存
4. pnpm-lock.yaml に正確なバージョンを記録

## npm vs pnpm

| 特徴 | npm | pnpm |
|------|-----|------|
| ディスク使用量 | 多い | 少ない（グローバルストアから共有） |
| 速度 | 普通 | 速い |
| モノレポ対応 | workspaces | workspace: プロトコル |

## モノレポ構成（WSH 2025）

```
web-speed-hackathon-2025/
├── pnpm-workspace.yaml     # ワークスペース定義
├── package.json
└── workspaces/
    ├── configs/    # 共通設定（ESLint等）
    ├── schema/     # 共通の型定義
    ├── client/     # フロントエンド（React）
    ├── server/     # バックエンド（Fastify）
    └── test/       # E2Eテスト
```

### workspace:* の意味

```json
"devDependencies": {
  "@wsh-2025/configs": "workspace:*"
}
```

npmからではなく、同じリポジトリ内のパッケージを参照する。

### モノレポのメリット

- コード共有（schemaをclient/serverで共有）
- 一括管理（1回のpnpm installで全部入る）
- 設定・バージョンの一貫性

## よく使うコマンド

```bash
pnpm install              # 全パッケージインストール
pnpm install --prod       # 本番パッケージのみ
pnpm run build            # ビルド実行
pnpm --filter client run build  # 特定パッケージだけ実行
```

## 参考リンク

- [pnpm公式ドキュメント](https://pnpm.io/ja/)
- [Node.js公式](https://nodejs.org/ja)

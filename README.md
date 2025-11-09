# Webセキュリティ学習ラボ

## 概要

本アプリケーションは、Webセキュリティ（特にXSS: Cross-Site Scripting）を実践的に学べる教育用アプリケーションです。実際に脆弱なコードを試し、安全な実装方法を学ぶことができます。

### 目的

- Webセキュリティの基礎知識を実践を通じて習得
- XSS（クロスサイトスクリプティング）の仕組みと対策を理解
- 安全なコーディング方法を学習

### 特徴

- 完全にクライアントサイドで動作（サーバーへの影響なし）
- 実際に攻撃を試せる安全な演習環境
- 脆弱なコードと安全なコードの比較表示
- Next.js 15の最新機能を活用

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui
- **リンター/フォーマッター**: Biome
- **パッケージマネージャー**: Bun
- **コンテナ**: Docker

## セットアップ

### 前提条件

以下のソフトウェアがインストールされていることを確認してください：

- **Node.js**: v20以上
- **Bun**: 最新版（推奨）または npm/yarn/pnpm

### インストール手順

1. リポジトリをクローン

```bash
git clone https://github.com/sho-sho-T/security-learning-lab.git
cd security-learning-lab
```

2. 依存関係をインストール

```bash
bun install
```

npmを使用する場合：
```bash
npm install
```

### 開発サーバーの起動

```bash
bun dev
```

npmを使用する場合：
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### ビルド

本番環境用のビルドを作成：

```bash
bun run build
```

ビルドしたアプリケーションを起動：

```bash
bun start
```

## 使用方法

### 画面構成

アプリケーションは以下のページで構成されています：

- **ホーム (`/`)**: 学習可能なセキュリティトピック一覧
- **XSS学習 (`/xss`)**: XSSの理論と基礎知識
- **Reflected XSS演習 (`/xss/reflected`)**: 反射型XSSの実践演習

### 各ページへのアクセス方法

1. **ホームページ**から学習したいトピックのカードをクリック
2. **理論学習セクション**でXSSの基礎を学習
3. **実践演習セクション**で実際に攻撃を試し、安全な実装を学習

## 開発ガイド

### ディレクトリ構成

```
security-learning-lab/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   └── globals.css   # グローバルスタイル
│   └── lib/              # ユーティリティ関数
├── docs/                 # プロジェクトドキュメント
│   ├── rd.md            # 要件定義書
│   ├── architecture.md  # アーキテクチャ設計書
│   └── screen_design.md # 画面設計書
├── public/              # 静的ファイル
├── .devcontainer/       # Dev Container設定
├── Dockerfile           # Docker設定
├── compose.yaml         # Docker Compose設定
├── biome.json          # Biome設定
├── next.config.ts      # Next.js設定
├── tailwind.config.ts  # Tailwind CSS設定
└── tsconfig.json       # TypeScript設定
```

### コーディング規約

このプロジェクトでは**Biome**を使用してコードの品質を管理しています。

#### リント実行

```bash
bun run lint
```

#### フォーマット実行

```bash
bun run format
```

コミット前に必ずリントとフォーマットを実行してください。

### コンポーネントの追加方法

1. **shadcn/uiコンポーネント**を追加する場合：

```bash
npx shadcn@latest add <component-name>
```

2. **カスタムコンポーネント**を作成する場合：

```typescript
// src/components/<category>/<ComponentName>.tsx
export default function ComponentName() {
  return (
    <div>
      {/* コンポーネントの内容 */}
    </div>
  );
}
```

### 開発のベストプラクティス

- **型定義**: TypeScriptの型を活用し、型安全性を確保
- **コンポーネント分割**: 再利用可能な小さなコンポーネントに分割
- **スタイリング**: Tailwind CSSのユーティリティクラスを使用
- **エスケープ処理**: ユーザー入力を表示する際は必ず適切にエスケープ

## 免責事項

⚠️ **重要: 本アプリケーションは教育目的のみで使用してください**

- 本アプリケーションで学んだ技術を、許可なく実際のWebサイトやシステムに対して使用することは**絶対に禁止**します
- 不正アクセス行為は法律で厳しく罰せられます（不正アクセス禁止法等）
- セキュリティ研究は倫理的かつ合法的な範囲内で行ってください
- 開発者は本アプリケーションの不正使用による一切の責任を負いません
- 本アプリケーションはあくまで学習・研究目的のデモンストレーションです

## ライセンス

このプロジェクトは教育目的で公開されています。

## 参考リソース

- [Next.js Documentation](https://nextjs.org/docs)
- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [MDN Web Security](https://developer.mozilla.org/ja/docs/Web/Security)

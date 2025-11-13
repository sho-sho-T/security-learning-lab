# Copilot 命令書 - Security Learning Lab

このプロジェクトは、**Next.js 16** で構築された教育用 Web セキュリティ学習プラットフォームで、XSS（クロスサイトスクリプティング）の攻撃と防御を実践的に学べます。

## アーキテクチャ & プロジェクト構成

**コア原則**: 完全にクライアント側で動作するアプリケーション。バックエンドは不要です。すべての演習はブラウザサンドボックス内で実行されます。

### 技術スタック
- **フレームワーク**: Next.js 16（App Router）で SSG/SSR を使用した静的ページ生成
- **スタイリング**: Tailwind CSS v4 + shadcn/ui コンポーネント
- **言語**: TypeScript
- **リンター**: Biome v2.2.0（強制、カスタマイズ不可）
- **パッケージマネージャー**: Bun（推奨）、npm/yarn/pnpm も対応

### ディレクトリ構造
```
src/
  app/                    # Next.js App Router ページ
    layout.tsx           # Geist フォントを使用したルートレイアウト
    page.tsx             # ホームページ（現在プレースホルダー - 実装が必要）
    globals.css          # Tailwind ディレクティブ + カスタム CSS
  components/            # React コンポーネント（作成予定）
    ui/                  # shadcn/ui コンポーネント（'npx shadcn@latest add' 経由）
    layout/              # Header、Footer、Navigation
    home/                # TopicCard コンポーネント
    xss/                 # XSS 固有のコンポーネント
  lib/
    utils.ts             # cn() ユーティリティ（clsx + tailwind-merge）
  types/                 # TypeScript 型定義
  data/                  # 静的データファイル（トピック、演習）
```

## 主要な慣例とパターン

### 1. コンポーネント開発
- React の関数型コンポーネントと hooks（`useState`、`useEffect`）を使用
- `components.json` のエイリアスを使用してコンポーネントをインポート：
  - `@/components` → components ディレクトリ
  - `@/ui` → shadcn/ui コンポーネント
  - `@/lib/utils` → `cn()` などのユーティリティ
- スタイリング: Tailwind クラス + 条件付きスタイリングで `cn()` を使用
- 例：
  ```tsx
  import { cn } from "@/lib/utils";
  
  export function Card({ className, ...props }) {
    return <div className={cn("rounded-lg border bg-white", className)} {...props} />;
  }
  ```

### 2. ページルーティング & レンダリング
インタラクティブな演習を除く、すべてのコンテンツページは **SSG（静的サイト生成）** です：

| ルート | 型 | 理由 |
|--------|------|--------|
| `/` | SSG | 静的トピック一覧 |
| `/xss` | SSG | 理論学習コンテンツ |
| `/xss/reflected` | SSG | インタラクティブな演習 |

ルートディレクトリに `page.tsx` ファイルとしてページを作成します。SEO のために `export const metadata` を使用します。

### 3. コード品質
- コミット前に `npm run lint` を実行（Biome が TypeScript、React、Next.js ルールをチェック）
- `npm run format` で Biome を使用してコードを自動フォーマット
- すべてのインポートは Biome の `source.organizeImports` アクションで自動整理
- TypeScript 厳密モードが有効 - 正当な理由がない限り `any` 型を使用しない

### 4. スタイリング & UI
- **インラインスタイルは絶対に使用しない** - Tailwind ユーティリティを使用
- shadcn/ui ボタン、カードなどは既にスタイル設定済み；`className` プロップでカスタマイズ
- Tailwind（`dark:` プレフィックス）でダークモード対応 - 既に設定済み
- カスタムフォント: Geist Sans（デフォルト）と Geist Mono が CSS 変数として利用可能

### 5. セキュリティに関する考慮
- **教育目的のみ**: 演習は意図的に XSS を許可して攻撃を教えます
- **クライアント側の隔離**: すべての危険なコードはブラウザで実行され、サーバーに接触しません
- **`dangerouslySetInnerHTML` を使用しない** - 明確にマークされた演習デモでのみ使用可能（JSDoc 警告付き）
- Content Security Policy（CSP）は学習環境用に意図的に緩和されています
- 通常表示する場合は、常にユーザー入力をエスケープします：JSX で `{userInput}` は自動的にエスケープされます

### 6. データ組織化
- `src/types/`（例：`topic.ts`、`exercise.ts`）に型インターフェースを定義
- 静的データ（トピック、演習、ペイロード）は `src/data/` にプレーンオブジェクトまたは JSON として配置
- 要件から得られた型の例：
  ```typescript
  export interface SecurityTopic {
    id: string;
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    path: string;
    icon: string;
  }
  ```

## 開発ワークフロー

### セットアップ
```bash
bun install          # または: npm install
npm run dev          # 開発サーバー起動（http://localhost:3000）
```

### 品質チェック
```bash
npm run lint         # Biome リンター実行
npm run format       # Biome で自動フォーマット
```

### ビルド & 実行
```bash
npm run build        # 本番環境バンドル作成
npm start            # 本番環境サーバー実行
```

### UI コンポーネント追加
```bash
npx shadcn@latest add button    # 事前スタイル設定されたコンポーネントを src/components/ui/ にダウンロード
```

## 重要なファイル

- `next.config.ts` - Next.js 設定（現在最小限）
- `biome.json` - リンター/フォーマッター ルール（v2.2.0）- 大幅に変更しないこと
- `components.json` - shadcn/ui 設定（パスエイリアス付き）
- `tsconfig.json` - TypeScript 厳密モード有効
- `tailwind.config.ts` - Tailwind CSS v4 設定
- `docs/architecture.md` - 完全な技術設計（コンポーネント構造の参考）
- `docs/rd.md` - 要件定義書（機能、データ構造、スコープ）

## 予期されるページ構造

要件に基づいて、以下のページを実装します：

1. **`/` (ホーム)** - トピックカード一覧（TopicCard コンポーネント）
2. **`/xss`** - XSS の概念を含む理論セクション
3. **`/xss/reflected`** - 反射型 XSS インタラクティブ演習：
   - 脆弱なデモフォーム（XSS 脆弱性を表示）
   - ペイロード例（コピペ攻撃）
   - 安全なコード比較
   - 説明セクション

## 避けるべき一般的な落とし穴

- ❌ `any` 型を使用しない - 適切な TypeScript インターフェースを使用
- ❌ 存在する前にコンポーネントをインポートしない（サブディレクトリに最初にスタブを作成）
- ❌ 外部状態管理（Zustand、Redux）を追加しない - React hooks のみを使用
- ❌ Biome 設定を変更しない - チーム標準を適用
- ❌ SSG ページで `'use client'` ディレクティブなしで `next/navigation` クライアント側 hooks を使用しない
- ❌ コミット前に `npm run lint` と `npm run format` を実行しない

## 新機能追加時

1. `src/types/` に型を定義
2. `src/components/` にコンポーネントディレクトリ構造を作成
3. 必要に応じて `src/data/` に静的データを追加
4. ボトムアップでコンポーネントを構築（小さく再利用可能なものから）
5. `src/app/` のページに統合
6. コミット前に品質チェックを実行

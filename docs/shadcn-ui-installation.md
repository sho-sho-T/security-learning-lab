# Bunを使用したshadcn/uiインストールガイド

このガイドでは、BunをパッケージマネージャーとするNext.js 16 + React 19 + TailwindCSS v4プロジェクトにおけるshadcn/uiコンポーネントのインストールと使用方法について包括的に説明します。

## 目次

1. [前提条件](#前提条件)
2. [初期セットアップ](#初期セットアップ)
3. [インストール方法](#インストール方法)
4. [利用可能なコンポーネント](#利用可能なコンポーネント)
5. [使用例](#使用例)
6. [トラブルシューティング](#トラブルシューティング)
7. [ベストプラクティス](#ベストプラクティス)

## 前提条件

### 必要なソフトウェア

shadcn/uiコンポーネントをインストールする前に、以下のソフトウェアがインストールされていることを確認してください：

#### 1. Node.js
- **バージョン**: v20以上
- **インストール**: [nodejs.org](https://nodejs.org/)からダウンロード
- **確認方法**:
  ```bash
  node --version  # v20.x以上が表示されるはずです
  ```

#### 2. Bun（推奨パッケージマネージャー）
- **バージョン**: 最新の安定版
- **インストール**:
  ```bash
  # macOS、Linux、WSL
  curl -fsSL https://bun.sh/install | bash

  # Windows (PowerShell)
  irm bun.sh/install.ps1 | iex
  ```
- **確認方法**:
  ```bash
  bun --version  # インストールされたバージョンが表示されます
  ```

**注意**: このプロジェクトではBunを推奨していますが、npm、yarn、pnpmも使用できます。

### プロジェクトセットアップ

このプロジェクトには既に以下が設定されています：

- ✅ **Next.js 16** (App Router使用)
- ✅ **React 19.2.0**
- ✅ **TailwindCSS v4** (PostCSS使用)
- ✅ **TypeScript 5**
- ✅ **shadcn/ui設定** (`components.json`)

## 初期セットアップ

### 1. 設定の理解

プロジェクトには、shadcn/uiのセットアップを定義する`components.json`ファイルが含まれています：

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "stone",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

**主要な設定ポイント**:
- **Style**: "new-york" - モダンで洗練されたコンポーネントスタイル
- **RSC**: 有効 - React Server Componentに対応
- **Base Color**: "stone" - ニュートラルなカラーパレット
- **CSS Variables**: 動的なテーマ設定のために有効化
- **Icon Library**: 一貫したアイコンのためのlucide-react

### 2. コア依存関係

以下の依存関係が必要で、既にインストールされています：

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.552.0",
    "tailwind-merge": "^3.3.1"
  }
}
```

### 3. ユーティリティ関数

プロジェクトには、Tailwindクラスをマージするための`cn()`ユーティリティ関数が含まれています：

**場所**: `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## インストール方法

### 方法1: shadcn CLIを使用（推奨）

shadcn CLIは、コンポーネントのインストール、依存関係の管理、ファイルの配置を自動的に処理します。

#### Bunを使用した個別コンポーネントのインストール

```bash
# 特定のコンポーネントをインストール
npx shadcn@latest add button

# 複数のコンポーネントを一度にインストール
npx shadcn@latest add button card input

# コンポーネントとその依存関係をインストール
npx shadcn@latest add form
```

**注意**: Bunをパッケージマネージャーとして使用している場合でも、shadcn CLIには`npx`を使用してください（`bunx`ではなく）。CLIがプロジェクトのパッケージマネージャー設定を尊重します。

#### インストール時の動作

addコマンドを実行すると：

1. **依存関係チェック**: 必要なピア依存関係（例：`@radix-ui/*`パッケージ）をインストール
2. **コンポーネント作成**: `src/components/ui/`にコンポーネントファイルを作成
3. **型安全性**: 完全なTypeScript型を含む
4. **カスタマイズ**: `components.json`の設定を使用

### 方法2: すべてのコンポーネントをインストール

すべての利用可能なコンポーネントを一度にインストールするには：

```bash
npx shadcn@latest add --all
```

**警告**: これにより多数のファイルと依存関係が追加されます。ほとんどのコンポーネントが必要な場合のみ使用してください。

### 方法3: 手動インストール

より細かい制御が必要な上級ユーザー向け：

1. **依存関係をインストール**:
   ```bash
   bun add @radix-ui/react-[コンポーネント名]
   ```

2. **コンポーネントコードをコピー**: 
   - [ui.shadcn.com](https://ui.shadcn.com)にアクセス
   - 目的のコンポーネントに移動
   - ソースコードをコピー
   - `src/components/ui/[コンポーネント名].tsx`にファイルを作成
   - 必要に応じてインポートを調整

## 利用可能なコンポーネント

shadcn/uiは、アクセシブルでカスタマイズ可能なコンポーネントの豊富なコレクションを提供します：

### フォームコンポーネント
- **Button**: 複数のバリアントを持つ汎用的なボタン
- **Input**: バリデーションサポート付きテキスト入力
- **Textarea**: 複数行テキスト入力
- **Select**: ドロップダウン選択
- **Checkbox**: トグル選択
- **Radio Group**: オプションからの単一選択
- **Switch**: トグルスイッチ
- **Slider**: スライダーによる値選択
- **Form**: バリデーション付き完全なフォーム処理

### レイアウトコンポーネント
- **Card**: ヘッダー/フッター付きコンテンツコンテナ
- **Separator**: 視覚的な区切り線
- **Tabs**: タブナビゲーション
- **Accordion**: 折りたたみ可能なコンテンツセクション
- **Sheet**: スライドアウトパネル
- **Dialog**: モーダルダイアログ
- **Drawer**: 下部ドロワー（モバイルフレンドリー）

### ナビゲーションコンポーネント
- **Navigation Menu**: アクセシブルなナビゲーション
- **Breadcrumb**: 階層ナビゲーション
- **Pagination**: ページナビゲーション
- **Menubar**: アプリケーションメニューバー
- **Command**: コマンドパレット/検索

### フィードバックコンポーネント
- **Alert**: 注目を集めるメッセージ
- **Alert Dialog**: 確認ダイアログ
- **Toast**: 一時的な通知
- **Progress**: 進行状況インジケーター
- **Skeleton**: ローディングプレースホルダー
- **Spinner**: ローディングスピナー
- **Badge**: ステータスインジケーター

### データ表示
- **Table**: データテーブル
- **Avatar**: ユーザーアバター
- **Calendar**: 日付選択
- **Carousel**: 画像/コンテンツカルーセル
- **Chart**: データビジュアライゼーション（Recharts使用）
- **Tooltip**: コンテキスト情報
- **Popover**: フローティングコンテンツ
- **Hover Card**: リッチなホバーコンテンツ

### ユーティリティコンポーネント
- **Aspect Ratio**: アスペクト比の維持
- **Collapsible**: 展開可能なコンテンツ
- **Context Menu**: 右クリックメニュー
- **Dropdown Menu**: アクションメニュー
- **Scroll Area**: カスタムスクロールバー
- **Resizable**: リサイズ可能なパネル
- **Toggle**: トグルボタン
- **Toggle Group**: グループ化されたトグル

**注意**: ライブ例を含む完全なリストは[ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)をご覧ください。

## 使用例

### 例1: ボタンの追加と使用

#### ステップ1: Buttonコンポーネントをインストール
```bash
npx shadcn@latest add button
```

#### ステップ2: コンポーネントで使用
```tsx
// src/app/example/page.tsx
import { Button } from "@/components/ui/button";

export default function ExamplePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ボタンの例</h1>
      
      {/* デフォルトボタン */}
      <Button>クリック</Button>
      
      {/* 異なるバリアント */}
      <Button variant="secondary">セカンダリ</Button>
      <Button variant="destructive">削除</Button>
      <Button variant="outline">アウトライン</Button>
      <Button variant="ghost">ゴースト</Button>
      
      {/* 異なるサイズ */}
      <Button size="sm">小</Button>
      <Button size="lg">大</Button>
      
      {/* アイコン付き */}
      <Button>
        <svg className="mr-2 h-4 w-4" />
        アイコン付き
      </Button>
    </div>
  );
}
```

### 例2: 複数のコンポーネントを使用したフォーム作成

#### ステップ1: 必要なコンポーネントをインストール
```bash
npx shadcn@latest add form input button label
```

#### ステップ2: お問い合わせフォームを作成
```tsx
// src/components/contact-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("フォーム送信:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="name">名前</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="名前を入力"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="メールアドレスを入力"
        />
      </div>
      
      <Button type="submit">送信</Button>
    </form>
  );
}
```

### 例3: レイアウトにCardを使用

#### ステップ1: Cardコンポーネントをインストール
```bash
npx shadcn@latest add card
```

#### ステップ2: カードレイアウトを作成
```tsx
// src/components/topic-card.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TopicCardProps {
  title: string;
  description: string;
  href: string;
}

export function TopicCard({ title, description, href }: TopicCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          下のボタンをクリックして学習を開始
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={href}>学習を開始</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### 例4: Toastで通知を追加

#### ステップ1: ToastとSonnerをインストール
```bash
npx shadcn@latest add toast
bun add sonner
```

#### ステップ2: Toastプロバイダーを設定
```tsx
// src/app/layout.tsx
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

#### ステップ3: コンポーネントでToastを使用
```tsx
"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function NotificationExample() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "成功",
          description: "変更が保存されました。",
        });
      }}
    >
      通知を表示
    </Button>
  );
}
```

### 例5: コンポーネントスタイルのカスタマイズ

`cn()`ユーティリティを使用してコンポーネントをカスタマイズできます：

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomButton() {
  return (
    <Button 
      className={cn(
        "rounded-full",
        "bg-gradient-to-r from-blue-500 to-purple-600",
        "hover:from-blue-600 hover:to-purple-700",
        "transition-all duration-300"
      )}
    >
      カスタムスタイルボタン
    </Button>
  );
}
```

## トラブルシューティング

### よくある問題と解決策

#### 1. "Module not found"エラー

**問題**: 
```
Error: Cannot find module '@/components/ui/button'
```

**解決策**:
- `src/components/ui/button.tsx`にコンポーネントファイルが存在することを確認
- `tsconfig.json`にパスエイリアスが設定されているか確認：
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```
- 開発サーバーを再起動：`bun dev`

#### 2. コンポーネントプロパティのTypeScriptエラー

**問題**: 
```
Type 'X' is not assignable to type 'Y'
```

**解決策**:
- 最新の型定義があることを確認：
  ```bash
  bun add -d @types/react @types/react-dom
  ```
- TypeScriptバージョンの互換性を確認：
  ```bash
  bun add -d typescript@latest
  ```

#### 3. スタイルが適用されない

**問題**: コンポーネントはレンダリングされるがスタイルが適用されない

**解決策**:
- `src/app/globals.css`でTailwindCSSが正しく設定されているか確認：
  ```css
  @import "tailwindcss";
  ```
- コンポーネントが`cn()`ユーティリティを正しく使用しているか確認
- `globals.css`でCSS変数が定義されているか確認
- Next.jsキャッシュをクリアして再ビルド：
  ```bash
  rm -rf .next
  bun dev
  ```

#### 4. ピア依存関係の警告

**問題**: 
```
warning: peer dependency @radix-ui/react-* not installed
```

**解決策**:
- 不足しているピア依存関係をインストール：
  ```bash
  bun add @radix-ui/react-[不足パッケージ名]
  ```
- またはコンポーネントを再インストール：
  ```bash
  npx shadcn@latest add [コンポーネント名]
  ```

#### 5. Biomeリンターのインポートエラー

**問題**: 
```
lint/style/useImportType: All these imports are only used as types
```

**解決策**:
- フォーマッターを実行して自動修正：
  ```bash
  bun run format
  ```
- または手動でtype importsに変更：
  ```tsx
  import type * as React from "react";
  ```

#### 6. 変更後にコンポーネントが更新されない

**問題**: コンポーネントへの変更がブラウザに反映されない

**解決策**:
- 開発サーバーを停止（Ctrl+C）
- Next.jsキャッシュをクリア：
  ```bash
  rm -rf .next
  ```
- 開発サーバーを再起動：
  ```bash
  bun dev
  ```

#### 7. Bunとnpmの互換性

**問題**: 一部のコマンドがBunで動作しない

**解決策**:
- shadcn CLIには常に`npx`を使用：
  ```bash
  npx shadcn@latest add button  # ✅ 正しい
  bunx shadcn@latest add button  # ❌ 動作しない可能性
  ```
- パッケージのインストールには`bun add`を使用：
  ```bash
  bun add lucide-react  # ✅ 正しい
  npm install lucide-react  # ❌ パッケージマネージャーの混在
  ```

#### 8. "use client"ディレクティブの問題

**問題**: 
```
Error: useState only works in Client Components
```

**解決策**:
- ファイルの先頭に`"use client"`ディレクティブを追加：
  ```tsx
  "use client";
  
  import { useState } from "react";
  // ... コンポーネントの残り
  ```

## ベストプラクティス

### 1. コンポーネントの構成

```
src/
├── components/
│   ├── ui/              # shadcn/uiコンポーネント（CLIで管理）
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/          # レイアウトコンポーネント
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── features/        # 機能固有のコンポーネント
│       └── contact-form.tsx
```

### 2. コンポーネントのインポート

よりクリーンなインポートのために常に`@/`エイリアスを使用：

```tsx
// ✅ 良い
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ❌ 避ける
import { Button } from "../../../components/ui/button";
```

### 3. コンポーネントのカスタマイズ

shadcn/uiファイルを直接変更するのではなく、ラッパーコンポーネントを作成：

```tsx
// src/components/custom/primary-button.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrimaryButton({ className, ...props }) {
  return (
    <Button
      className={cn("bg-primary hover:bg-primary/90", className)}
      {...props}
    />
  );
}
```

### 4. 型安全性

カスタムコンポーネントには常にプロパティの型を定義：

```tsx
interface CustomCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function CustomCard({ 
  title, 
  description, 
  children,
  className 
}: CustomCardProps) {
  // コンポーネントの実装
}
```

### 5. アクセシビリティ

shadcn/uiコンポーネントはアクセシビリティを考慮して構築されていますが、以下を確認してください：

- フォーム入力に適切なラベルを提供
- セマンティックなHTML要素を使用
- 必要に応じてARIA属性を追加
- キーボードナビゲーションでテスト
- カラーコントラスト比を確認

### 6. パフォーマンス

- 実際に使用するコンポーネントのみをインストール
- 可能な限りReact Server Components（RSC）を使用
- 必要な場合のみ`"use client"`を追加（フック、イベントなど）
- 大きなコンポーネントを遅延ロード：
  ```tsx
  const HeavyComponent = dynamic(() => import("@/components/heavy-component"));
  ```

### 7. テーマ設定

一貫したテーマのためにCSS変数を活用：

```css
/* src/app/globals.css */
@theme inline {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... */
}
```

### 8. バージョン管理

- 設定を追跡するために`components.json`をコミット
- `src/components/ui/`をバージョン管理に含める
- `node_modules/`と`.next/`を`.gitignore`に追加

## 追加リソース

### 公式ドキュメント
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)

### コミュニティリソース
- [shadcn/ui GitHub](https://github.com/shadcn-ui/ui)
- [shadcn/ui Discord](https://discord.gg/shadcn-ui)
- [Tailwind CSS Discord](https://discord.gg/tailwindcss)

### このプロジェクトの関連ガイド
- [アーキテクチャドキュメント](./architecture.md)
- [要件定義](./rd.md)
- [画面設計](./screen_design.md)

## まとめ

このガイドでは、Next.js 16プロジェクトでBunを使用してshadcn/uiコンポーネントをインストールおよび使用する際の重要な側面を網羅しています。このコンポーネントライブラリは、アクセシブルでカスタマイズ可能、かつパフォーマンスの高いUIコンポーネントを構築するための強固な基盤を提供します。

プロジェクト固有の質問や問題については、メインの[README.md](../README.md)を参照するか、リポジトリでissueを開いてください。

Happy coding! 🚀

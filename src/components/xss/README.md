# TheorySection コンポーネント

XSS学習ページの教育コンテンツセクションを表示する再利用可能なコンポーネント。

## 機能

- ✅ **セマンティックHTML**: `<section>`と`<h2>`タグを使用した適切な文書構造
- ✅ **アクセシビリティ**: スクリーンリーダー用のARIA属性
- ✅ **レスポンシブデザイン**: Tailwind CSSによるモバイルファーストレイアウト
- ✅ **リッチコンテンツサポート**: テキスト、コードスニペット、リスト、テーブルに対応
- ✅ **shadcn/ui**: 一貫したスタイリングのためのCardコンポーネントを使用
- ✅ **タイポグラフィ**: 読みやすいコンテンツのためのproseクラス
- ✅ **ダークモード**: ライトテーマとダークテーマをサポート
- ✅ **TypeScript**: 型定義による型安全性

## Props

| Prop | 型 | 必須 | 説明 |
|------|------|----------|-------------|
| `title` | `string` | はい | h2タグに表示されるセクションタイトル |
| `children` | `React.ReactNode` | はい | セクションコンテンツ（テキスト、コード、リスト、テーブル） |
| `id` | `string` | いいえ | ディープリンク用のアンカーリンクID |
| `className` | `string` | いいえ | 追加のCSSクラス |

## 使用例

### 基本的な使い方

```tsx
import { TheorySection } from "@/components/xss";

function MyPage() {
  return (
    <TheorySection title="XSSとは？" id="what-is-xss">
      <p>
        クロスサイトスクリプティング（XSS）は、攻撃者が悪意のあるスクリプトを
        他のユーザーが閲覧するWebページに挿入できるセキュリティ脆弱性です。
      </p>
    </TheorySection>
  );
}
```

### コードスニペット付き

```tsx
<TheorySection title="XSS攻撃の例" id="xss-example">
  <p>XSS攻撃の簡単な例：</p>
  <pre className="bg-zinc-900 text-zinc-50 p-4 rounded-lg overflow-x-auto">
    <code>{'<script>alert("XSS攻撃！")</script>'}</code>
  </pre>
  <p className="mt-4">
    このスクリプトは脆弱なページに挿入されると、被害者のブラウザで実行されます。
  </p>
</TheorySection>
```

### リスト付き

```tsx
<TheorySection title="XSSの種類" id="xss-types">
  <p>XSS攻撃には主に3つの種類があります：</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>反射型XSS</strong>: 悪意のあるスクリプトがWebサーバーから反射される
    </li>
    <li>
      <strong>蓄積型XSS</strong>: 悪意のあるスクリプトが対象サーバーに永続的に保存される
    </li>
    <li>
      <strong>DOM based XSS</strong>: 脆弱性がクライアント側のコードに存在する
    </li>
  </ul>
</TheorySection>
```

### テーブル付き

```tsx
<TheorySection title="XSS対策方法" id="xss-prevention">
  <table className="min-w-full border-collapse border border-zinc-300 dark:border-zinc-700">
    <thead>
      <tr className="bg-zinc-100 dark:bg-zinc-800">
        <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          方法
        </th>
        <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          説明
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          入力検証
        </td>
        <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
          すべてのユーザー入力を検証・サニタイズする
        </td>
      </tr>
    </tbody>
  </table>
</TheorySection>
```

### カスタムスタイリング

```tsx
<TheorySection 
  title="応用トピック" 
  id="advanced"
  className="mb-12 border-2 border-primary"
>
  <p>追加のスペーシングとボーダーを持つカスタムスタイルのセクション。</p>
</TheorySection>
```

## アクセシビリティ

このコンポーネントはアクセシビリティのベストプラクティスに従っています：

1. **セマンティックHTML**: 適切な`<section>`と見出しタグを使用
2. **ARIAラベル**: `aria-labelledby`を使用してセクションと見出しをリンク
3. **キーボードナビゲーション**: すべてのインタラクティブ要素がキーボードアクセス可能
4. **スクリーンリーダー対応**: 適切な文書構造とARIA属性

## スタイリング

このコンポーネントは以下を使用しています：

- **Tailwind CSS** ユーティリティファーストスタイリング
- **shadcn/ui Card** 一貫したデザインのためのコンポーネント
- **Proseクラス** タイポグラフィ用（prose-stone、dark:prose-invert）
- **レスポンシブスペーシング** mb-8（margin-bottom: 2rem）
- **ダークモードサポート** dark:バリアント

## 実装の詳細

- React Server Components（RSC）を考慮した設計
- 型安全性のためのTypeScript
- Biomeリンティングエラーなし
- Reactおよび既存UIコンポーネント以外のランタイム依存関係なし
- Next.js 16 App Routerと完全互換

## ファイル構造

```
src/components/xss/
├── TheorySection.tsx       # メインコンポーネント
├── TheorySectionExample.tsx # 使用例
└── index.ts                # エクスポート
```

## ライセンス

Security Learning Labプロジェクトの一部。

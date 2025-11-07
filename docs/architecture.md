# アプリケーションアーキテクチャ設計書

---

## 1. 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS + shadcn/ui
- **リンター**: Biome
- **コンテナ**: Docker

---

## 2. アーキテクチャパターン

**クライアントサイド完結型アプリケーション**
- データベース不要（静的データのみ）
- 演習環境は完全にブラウザ上で動作
- サーバーサイドはNext.jsのSSG/SSRのみ

### レンダリング戦略

| ページ | レンダリング | 理由 |
|--------|-------------|------|
| `/` | SSG | 静的コンテンツ |
| `/xss` | SSG | 静的コンテンツ |
| `/xss/reflected` | CSR | インタラクティブな演習 |

---

## 3. ディレクトリ構成

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── xss/
│       ├── page.tsx
│       └── reflected/
│           └── page.tsx
│
├── components/              # Reactコンポーネント
│   ├── ui/                  # shadcn/ui
│   ├── layout/              # Header, Footer
│   ├── home/                # TopicCard
│   └── xss/                 # XSS学習用
│
├── lib/                     # ユーティリティ
├── data/                    # 静的データ
└── types/                   # TypeScript型定義
```

---

## 4. データ型定義

### トピックデータ (`src/types/topic.ts`)

```typescript
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SecurityTopic {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  path: string;
  icon: string;
}
```

### 演習データ (`src/types/exercise.ts`)

```typescript
export interface Exercise {
  id: string;
  title: string;
  description: string;
  vulnerableCode: string;
  safeCode: string;
  explanation: string;
  hints: string[];
  payloads: Payload[];
}

export interface Payload {
  id: string;
  code: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}
```

---

## 5. コンポーネント設計

### 主要コンポーネント

```typescript
// レイアウト
Header.tsx          // グローバルナビゲーション
Footer.tsx          // 免責事項

// ホーム
TopicCard.tsx       // トピックカード表示

// XSS学習
TheorySection.tsx   // 理論セクション
VulnerableDemo.tsx  // 脆弱なデモフォーム
CodeComparison.tsx  // コード比較表示
PayloadExample.tsx  // ペイロード例
```

### 状態管理

React hooksのみ使用（外部ライブラリ不要）
- `useState`: ローカル状態
- `useEffect`: 副作用（最小限）

---

## 6. ルーティング

```
/                   → ホーム
/xss                → XSS理論学習
/xss/reflected      → Reflected XSS演習
```

---

## 7. スタイリング

- Tailwind CSSユーティリティクラス使用
- shadcn/uiコンポーネント活用
- カスタムテーマ: `tailwind.config.ts`で定義

---

## 8. セキュリティ

### CSP設定

演習環境では意図的にCSPを緩和（教育目的）
- `next.config.ts`でヘッダー設定

### 演習環境の隔離

- 完全にクライアントサイドで動作
- サーバーへのデータ送信なし
- ブラウザのサンドボックス内で実行

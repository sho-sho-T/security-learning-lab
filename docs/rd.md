# Webセキュリティ学習アプリケーション 要件定義書

## 1. プロジェクト概要

### 1.1 目的
Next.js 15を使用して、Webセキュリティ（特にXSS）を実践的に学べる教育用アプリケーションを開発する。

### 1.2 技術スタック
- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データ管理**: クライアントサイドのみ（DB不要）

---

## 2. 機能要件

### 2.1 ホーム画面
- アプリケーションのタイトルと概要説明を表示
- 学習可能なセキュリティトピック一覧をカード形式で表示
- 各カードから詳細学習画面への遷移リンク

**表示項目:**
- トピック名
- 簡単な説明
- 難易度表示（初級/中級/上級）

### 2.2 XSS学習画面

#### 2.2.1 理論学習セクション
- **XSSとは**
  - 定義と概要
  - 攻撃の仕組み
  - 実際の被害例

- **XSSの種類**
  - Reflected XSS（反射型）
  - Stored XSS（格納型）
  - DOM-based XSS（DOM型）
  - それぞれの特徴と違い

- **対策方法**
  - エスケープ処理
  - Content Security Policy (CSP)
  - HttpOnly Cookie
  - サニタイゼーション

#### 2.2.2 実践演習セクション

**演習1: Reflected XSS（反射型）**
- 脆弱なコード例の表示
- ユーザー入力フォーム（検索ボックスなど）
- 入力値がそのまま画面に表示される脆弱な実装
- XSSペイロード例の提供
- 「攻撃を試す」ボタン
- 攻撃成功時のアラート表示
- 解説と安全な実装例の表示

**演習2: 安全な実装への修正**
- 脆弱なコードと安全なコードの比較表示
- Next.jsにおける適切なエスケープ方法
- `dangerouslySetInnerHTML`の危険性説明
- コード例（修正前/修正後）

**演習3: CSPの設定**
- CSPヘッダーの説明
- Next.jsでのCSP設定方法
- 実際の設定例とその効果

### 2.3 ナビゲーション
- ヘッダーナビゲーション
  - ホームへ戻るボタン
  - 現在の学習トピック表示
- フッター
  - 免責事項（教育目的のみ）
  - GitHubリポジトリリンク（任意）

---

## 3. 非機能要件

### 3.1 セキュリティ
- 実際の攻撃を実行可能だが、**完全にクライアントサイドで動作**
- サーバーサイドへの影響なし
- 演習環境は隔離されたコンテキストで実行

### 3.2 ユーザビリティ
- レスポンシブデザイン（モバイル対応）
- 直感的なUI/UX
- 各セクションに明確な見出しとアイコン

### 3.3 パフォーマンス
- ページ遷移は高速（Next.js App Routerの最適化を活用）
- 画像の最適化（Next.js Image コンポーネント使用）

---

## 4. 画面構成

### 4.1 ルーティング構成
```
/                          # ホーム画面
/xss                       # XSS学習画面
/xss/reflected            # Reflected XSS演習
/xss/stored               # Stored XSS演習（将来実装）
/xss/dom-based            # DOM-based XSS演習（将来実装）
```

### 4.2 コンポーネント構成
```
components/
  ├── Layout/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   └── Navigation.tsx
  ├── Home/
  │   └── TopicCard.tsx
  ├── XSS/
  │   ├── TheorySection.tsx
  │   ├── ExerciseSection.tsx
  │   ├── CodeComparison.tsx
  │   └── VulnerableDemo.tsx
```

---

## 5. データ構造

### 5.1 トピックデータ型
```typescript
interface SecurityTopic {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  path: string;
  icon: string;
}
```

### 5.2 演習データ型
```typescript
interface Exercise {
  id: string;
  title: string;
  description: string;
  vulnerableCode: string;
  safeCode: string;
  hints: string[];
  payloadExamples: string[];
}
```

---

## 6. 最小限の実装スコープ（MVP）

### Phase 1: 基本構造
- ✅ ホーム画面の実装
- ✅ XSSトピックカードの表示
- ✅ 基本的なナビゲーション

### Phase 2: XSS理論学習
- ✅ XSS概要説明ページ
- ✅ XSSの種類の説明
- ✅ 対策方法の説明

### Phase 3: Reflected XSS演習
- ✅ 脆弱なデモフォームの実装
- ✅ XSS攻撃の実演
- ✅ 安全な実装例の提示

### Phase 4: UI/UX改善
- ✅ スタイリングの洗練
- ✅ レスポンシブ対応
- ✅ アニメーション追加

---

## 7. 今後の拡張予定

- CSRF（クロスサイトリクエストフォージェリ）学習
- SQLインジェクション学習
- クリックジャッキング学習
- セキュアなAPIの実装方法
- 認証・認可のベストプラクティス

---

## 8. 免責事項

このアプリケーションは**教育目的のみ**で使用されます。
- 学んだ技術を実際のWebサイトに対して使用しないこと
- 倫理的かつ合法的な範囲でのみ使用すること
- 開発者は不正使用による一切の責任を負いません
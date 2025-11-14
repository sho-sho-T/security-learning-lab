import { TheorySection } from "@/components/xss/TheorySection";

/**
 * TheorySectionコンポーネントの使用例
 */
export function TheorySectionExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TheorySection title="XSSとは？" id="what-is-xss">
        <p>
          クロスサイトスクリプティング（XSS）は、攻撃者が悪意のあるスクリプトを
          他のユーザーが閲覧するWebページに挿入できるセキュリティ脆弱性です。
        </p>
      </TheorySection>

      <TheorySection title="XSS攻撃の例" id="xss-example">
        <p>XSS攻撃の簡単な例：</p>
        <pre className="bg-zinc-900 text-zinc-50 p-4 rounded-lg overflow-x-auto">
          <code>{'<script>alert("XSS攻撃！")</script>'}</code>
        </pre>
        <p className="mt-4">
          このスクリプトは脆弱なページに挿入されると、被害者のブラウザで実行されます。
        </p>
      </TheorySection>

      <TheorySection title="XSSの種類" id="xss-types">
        <p>XSS攻撃には主に3つの種類があります：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>反射型XSS</strong>:
            悪意のあるスクリプトがWebサーバーから反射される
          </li>
          <li>
            <strong>蓄積型XSS</strong>:
            悪意のあるスクリプトが対象サーバーに永続的に保存される
          </li>
          <li>
            <strong>DOM based XSS</strong>:
            脆弱性がクライアント側のコードに存在する
          </li>
        </ul>
      </TheorySection>

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
            <tr>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                出力エンコーディング
              </td>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                ページにレンダリングする前にデータをエンコードする
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                コンテンツセキュリティポリシー
              </td>
              <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2">
                CSPヘッダーを使用してスクリプト実行を防止する
              </td>
            </tr>
          </tbody>
        </table>
      </TheorySection>
    </div>
  );
}

import { TopicCard } from "@/components/home/TopicCard";
import { securityTopics } from "@/data/topics";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Webセキュリティ学習ラボ
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            実践的にセキュリティを学ぶ
          </p>
        </div>

        {/* Welcome Section */}
        <div className="mb-12 rounded-lg bg-white p-8 shadow-sm dark:bg-zinc-900">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ようこそ
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            このプラットフォームでは、Webセキュリティの基礎から実践まで学ぶことができます。
            各トピックでは攻撃の仕組みと対策を実際に体験しながら理解を深めることができます。
          </p>
        </div>

        {/* Topics Grid */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            学習トピック
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

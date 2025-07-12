import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">SkillSwap</span>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Share Skills,<br />
            <span className="text-blue-600">Grow Together</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            SkillSwap connects you with others for mutual learning and skill development. Teach what you know, learn what you don't.
          </p>
          <div className="flex gap-4">
            <Link href="/register" className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
            <Link href="/discover" className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors font-medium">
              Explore Skills
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-4 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute inset-8 bg-blue-600 rounded-full opacity-30"></div>
            <div className="absolute inset-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-5xl">🔄</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How SkillSwap Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Create Your Profile",
              description: "Add your skills, expertise level, and what you want to learn.",
              icon: "👤"
            },
            {
              title: "Find Skill Matches",
              description: "Discover people who want to learn your skills and teach you theirs.",
              icon: "🔍"
            },
            {
              title: "Schedule & Swap",
              description: "Arrange sessions and start learning from each other.",
              icon: "🗓️"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-blue-600">SkillSwap</span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Connect. Learn. Grow.</p>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Terms
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

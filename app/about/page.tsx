"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1a202c]">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-teal">
            PROMO AI
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/service/" className="text-gray-400 hover:text-white transition-colors">
              Service
            </Link>
            <Link href="/articles/" className="text-gray-400 hover:text-white transition-colors">
              Articles
            </Link>
            <Link href="/about/" className="text-white transition-colors border-b-2 border-teal pb-1">
              About
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-teal bg-teal text-white hover:bg-teal hover:opacity-90 font-medium text-base"
            onClick={handleSubscribeClick}
          >
            お問い合わせ
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About</h1>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl text-gradient font-bold mb-4">PROMO AIのAIソリューション</h2>

            <p className="text-xl text-white font-semibold mb-6">『手間を減らして成果を加速』</p>

            <p className="text-lg text-[#1a202c] mb-8">
              PROMO
              AIは、AIを活用した動画コンテンツ制作、アンケートリリース、LP制作に加え、企業向けプロモーション広告の展開など、多彩なサービスを通じて業務上の課題を解決します。制作工数や運用負荷を最小限に抑え、高品質で効果的なプロモーションを実現。
            </p>

            <p className="text-lg text-[#1a202c] mb-8">
              あなたのビジネスを次のステージへ。PROMO AIがAIの力で支援します。
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-teal">
              PROMO AI
            </Link>
            <p className="text-gray-400 text-sm mt-4 mb-6">最先端のAI技術で、効率的なプロモーションを実現します。</p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 flex justify-between items-center">
              <p>© {new Date().getFullYear()} PROMO AI. All rights reserved.</p>
              <Link
                href="https://logicajapan.co.jp/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal transition-colors"
              >
                運用会社
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


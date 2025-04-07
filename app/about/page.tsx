"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AboutPage() {
  const router = useRouter()

  // ページがロードされたときに上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1a202c]">
      {/* ヘッダーを固定位置に配置し、白地の帯として表示 */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-teal">
              PROMO AI
            </Link>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6 text-sm font-bold">
                <Link href="/about/" className="text-teal border-b-2 border-teal pb-1 transition-colors">
                  PROMO AIについて
                </Link>
                <Link href="/service/" className="text-gray-400 hover:text-teal transition-colors">
                  サービス
                </Link>
                <Link href="/contents/" className="text-gray-400 hover:text-teal transition-colors">
                  コンテンツ
                </Link>
              </nav>
              <Button
                variant="outline"
                className="bg-teal text-white border-transparent relative overflow-hidden transition-all duration-300 hover:bg-white hover:text-teal hover:border-teal group"
                onClick={handleSubscribeClick}
              >
                <span className="relative z-10">お問い合わせ</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 pt-28">
        <div className="max-w-4xl mx-auto">
          {/* タイトルセクション */}
          <div className="prose prose-invert max-w-none mb-16">
            <div className="text-5xl font-bold mb-10 tracking-tight text-gradient">
              <div className="mb-4">AIのチカラで手間をなくし</div>
              <div className="mb-4">プロモーションを加速させて</div>
              <div>成果を最大限に。</div>
            </div>

            <p className="text-lg text-[#1a202c] mb-8">
              PROMO
              AIは、動画制作・アンケートリリース・LP制作をワンストップで自動化し、企業のマーケティング担当者が抱える「時間・コスト・人的リソース」の課題を根本から解決します。最新の生成AIと当社が培ってきたマーケティング知見、クリエイティブ力を掛け合わせ、スピーディーかつ十分な品質で貴社のビジネス成長を後押しします。
            </p>
          </div>

          {/* 選ばれる理由セクション */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-8">PROMO AIが選ばれる4つの理由</h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-teal mb-3">1. 戦略設計から制作まで一気通貫</h3>
                <p className="text-gray-600 mb-6">
                  市場分析データと生成AIを連携させ、企画立案からクリエイティブ制作までを効率化。必要に応じてレポーティングもオプションでご提供します。
                </p>
                <div className="relative w-full overflow-hidden flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_service01-Y2Rz0tm99pNge7AXrylX9zJNMD7V6U.png"
                    alt="戦略設計から制作までの一気通貫フロー"
                    className="w-auto h-auto max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-teal mb-3">2. AIで導く最適プランニング</h3>
                <p className="text-gray-600 mb-6">
                  最新AI技術で膨大なデータを高速解析し、ユーザーインサイトを可視化。クライアントニーズにフィットした企画・構成・クリエイティブをワンストップでご提供します。
                </p>
                <div className="relative w-full overflow-hidden flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_service02-e3mn6Nlw6y1dNfyUzstOXtg2AgBq9p.png"
                    alt="AIによる最適プランニングのフロー"
                    className="w-auto h-auto max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-teal mb-3">3. 多彩なアウトプットに対応</h3>
                <p className="text-gray-600">
                  動画、静止画、テキスト、ランディングページまで、目的に合わせたフォーマットで納品。社内体制やプロジェクト規模に合わせたカスタマイズが可能です。
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-teal mb-3">4. 専任チームによる伴走サポート</h3>
                <p className="text-gray-600">
                  専任ディレクターがキックオフから公開後の改善提案まで伴走。AIのスピードと人の視点を掛け合わせ、成果を継続的に高めます。
                </p>
              </div>
            </div>
          </div>

          {/* お問い合わせセクション */}
          <section
            id="newsletter"
            className="bg-white rounded-xl p-10 mb-20 border border-teal/30 shadow-lg text-center"
          >
            <div className="space-y-6 max-w-xl mx-auto">
              <h2 className="text-3xl font-bold">お問い合わせ</h2>
              <p className="text-gray-600">
                サービスに関するご質問やお見積りのご依頼など、
                <br />
                お気軽にお問い合わせください。
              </p>
              <Link
                href="https://forms.gle/7U9Eyu2mJu38p6i57"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal text-white border border-transparent relative overflow-hidden transition-all duration-300 hover:bg-white hover:text-teal hover:border-teal group py-4 px-8 rounded-md font-medium text-lg"
              >
                <span className="relative z-10">お問い合わせはコチラ</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-teal">
              PROMO AI
            </Link>
            <p className="text-gray-400 text-sm mt-4 mb-6">最先端のAI技術で、効率的なプロモーションを実現します。</p>

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


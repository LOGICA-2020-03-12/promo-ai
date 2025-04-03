"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function PromoLPPage() {
  const { toast } = useToast()

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1a202c]">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter text-teal">
            PROMO AI
          </Link>
          <Button
            variant="outline"
            className="border-teal text-teal hover:bg-opacity-10 hover:bg-teal hover:text-white"
            onClick={() => {
              const newsletterSection = document.getElementById("newsletter")
              if (newsletterSection) {
                newsletterSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            お問い合わせ
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/service/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to services
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#1a202c] text-xl">AI技術を採用した高速・高品質なLP制作サービス</span>
            <br />
            <div className="mt-6"></div>
            <span className="text-gradient">
              <span className="text-xl">PROMO AI</span> LP series
            </span>
          </h1>

          {/* 画像のサイズを大きくする - 幅をテキストコンテンツと同じにし、高さも増加 */}
          <div className="relative h-[250px] md:h-[350px] max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2019.18.43-pxCljuoHZcAO3WePtq1z65iGLqNetN.png"
              alt="SEO and digital marketing concept with gears on laptop screen"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-[#1a202c] leading-normal">
              短期間・低コストで
              <br />
              効果的なLPを実現
              <br />
              プロモーションを強力サポート！
            </h2>
          </div>

          <article className="prose max-w-none">
            <h3 className="text-teal">LP制作の課題をAIで解決</h3>

            <p>PROMO LPは最新のAI技術を活用し、従来のLP制作にかかる時間・コスト・柔軟性の課題を解決します。</p>

            <h3 className="text-teal">PROMO LPのメリット</h3>

            <h4 className="text-teal">短期間での制作が可能</h4>
            <p>制作会社とのやり取り、デザイン調整、コーディングの手間をAI活用で大幅削減。短期間でLPを制作します。</p>

            <h4 className="text-teal">低コストで運用できる</h4>
            <p>
              従来1ページあたり20〜50万円かかっていた制作費用をAI技術により低コスト化し、キャンペーンごとの制作が容易になります。
            </p>

            <h4 className="text-teal">柔軟な対応が可能</h4>
            <p>急なキャンペーンや短期施策にも柔軟かつ迅速に対応できます。</p>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-[#1a202c] mb-3">従来のLP制作の課題</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">制作期間の長さ</strong>
                  <span className="text-gray-600 ml-4">企画から公開まで1〜2ヶ月かかり、タイムリーな施策が難しい。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">高額な制作コスト</strong>
                  <span className="text-gray-600 ml-4">1ページあたり20〜50万円の費用がかかる。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">修正の手間と時間</strong>
                  <span className="text-gray-600 ml-4">内容の修正に時間がかかり、迅速な対応が困難。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">専門知識の必要性</strong>
                  <span className="text-gray-600 ml-4">デザインやコーディングの専門知識が必要。</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-teal rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-teal mb-3">PROMO AIのメリット</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-teal">制作期間の短縮</strong>
                  <span className="text-gray-600 ml-4">最短1週間でのLP制作が可能に。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">コスト削減</strong>
                  <span className="text-gray-600 ml-4">従来の30〜50%のコストで高品質なLPを制作。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">迅速な修正対応</strong>
                  <span className="text-gray-600 ml-4">AIによる自動生成で修正も素早く対応。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">専門知識不要</strong>
                  <span className="text-gray-600 ml-4">専門知識がなくても効果的なLPを作成可能。</span>
                </li>
              </ul>
            </div>

            <h3 className="text-teal font-semibold text-center mt-10">
              PROMO AI独自のノウハウと最先端のAI技術を融合した
              <br />
              ソリューションで、効率的で効果的な
              <br />
              LP制作を実現します。
            </h3>
          </article>

          {/* お問い合わせボタンを追加 */}
          <div className="text-center mt-10 mb-12">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-teal hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-md transition-colors text-lg"
            >
              <Mail className="h-6 w-6" />
              PROMO AIに関するお問い合わせはこちら
            </Link>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">関連サービス</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/shortmovie-series/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.41.22-F1kkIQCD9EigvjeL7s3fQzLLgePiK5.png"
                      alt="Promo AI thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-azure transition-colors">Promo AI ショート動画</h3>
                  </div>
                </div>
              </Link>
              <Link href="/press/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.44.43-nk2l9IlhTDYeiZbHx8Q8AiKSLaqpv8.png"
                      alt="AI プレス thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-azure transition-colors">Promo AI PRESS</h3>
                  </div>
                </div>
              </Link>
            </div>
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
            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
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
        </div>
      </footer>
    </div>
  )
}


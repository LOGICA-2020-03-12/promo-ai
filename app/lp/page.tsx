"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function PromoLPPage() {
  const { toast } = useToast()
  const router = useRouter()

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
                <Link href="/about/" className="text-gray-400 hover:text-teal transition-colors">
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

      <main className="container mx-auto px-4 py-12 pt-28">
        <div className="max-w-3xl mx-auto">
          <Link href="/service/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to services
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#1a202c] text-xl">AI技術を採用した高速・低コストなLP制作サービス</span>
            <br />
            <div className="mt-6"></div>
            <span className="text-gradient">
              <span className="text-xl">PROMO AI</span> LP series
            </span>
          </h1>

          {/* 画像のサイズを大きくする - 幅をテキストコンテンツと同じにし、高さも増加 */}
          <div className="relative h-[250px] md:h-[350px] max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_lp2-0aPIGMHqgeLvaCJTq19h1zC6M2ZCZR.png"
              alt="SEO and digital marketing concept with gears on laptop screen"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold text-[#1a202c] leading-normal mb-2">LP制作の課題をAIで解決</h2>
            <p className="text-xl text-gray-600">
              短期間・低コストで効果的なLPを実現
              <br />
              プロモーションを強力サポート！
            </p>
          </div>

          <article className="prose max-w-none">
            <div className="bg-white py-4 px-6 rounded-lg shadow-md mb-6">
              <h3 className="text-teal text-2xl font-bold mb-3">PROMO AIのLPシリーズとは</h3>
              <p>
                短期間で構築し、毎月1回更新（サービス期間内）ができるコストパフォーマンス性の高いプロモーションに適したLP制作サービスとなります。毎月キャンペーン訴求はしているがLPを構築する期間もコストもないとお悩みの企業様におすすめです。
              </p>
            </div>

            <h4 className="text-teal">短期間での制作が可能</h4>
            <p>
              制作を進めるうえでの諸々のミーティングや細かいやりとりなどの手間をAI・アンケートフォーム・テンプレートデザインを活用することで大幅削減。短期間でLPを制作します。
            </p>

            <h4 className="text-teal">低コストで運用できる</h4>
            <p>
              従来は1ページにつき20〜50万円かかっていた制作コストを、AI技術・テンプレートデザイン・最小限のリソース管理体制で大幅に削減。キャンペーンごとに、手軽かつ低コストでページ制作をご依頼いただけます。
            </p>

            {/* 「こんなお悩みありませんか？」セクションを追加 */}
            <h3 className="text-xl font-bold text-[#1a202c] text-center mt-16 mb-4">こんなお悩みありませんか？</h3>

            {/* 2つの画像を横並びに配置 */}
            <div className="grid md:grid-cols-2 gap-6 my-4">
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_lp_scene02-oaWCLDixRwYtGlcZxytwtu1w3ntCLB.png"
                    alt="LP制作の時間とお金に悩む女性"
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">「LP制作依頼するお金も時間もない…」</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_lp_scene01-Zo0QllcShwby6PPMpK5PzuJ8pxM0bM.png"
                    alt="コンバージョン率の低下に悩むビジネスマン"
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">「LPがないため離脱が多い…」</p>
              </div>
            </div>

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
              href="https://forms.gle/7U9Eyu2mJu38p6i57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal text-white border border-transparent relative overflow-hidden transition-all duration-300 hover:bg-white hover:text-teal hover:border-teal group py-4 px-8 rounded-md font-medium text-lg"
            >
              <span className="relative z-10">お問い合わせはこちら</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">関連サービス</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/shortmovie/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_short2-XIGojvHSMSr8bLOnAIV1MEhCDc3Ecw.png"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_press2-klBOvc22qsCjuJzBrOenvJoqFbFfLI.png"
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

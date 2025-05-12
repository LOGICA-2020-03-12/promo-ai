"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function AIContentPage() {
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
            <span className="text-[#1a202c] text-xl">AI技術を活用したアンケートリリース制作</span>
            <br />
            <div className="mt-6"></div>
            <span className="text-gradient">
              <span className="text-xl">PROMO AI</span> PRESS series
            </span>
          </h1>

          {/* 画像のサイズを大きくする - 幅をテキストコンテンツと同じにし、高さも増加 */}
          <div className="relative h-[250px] md:h-[350px] max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_press2-klBOvc22qsCjuJzBrOenvJoqFbFfLI.png"
              alt="Person typing on laptop keyboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold text-[#1a202c] leading-normal mb-2">
              プレスリリースの常識を変える
              <br />
              AIで効果的な情報発信を手間なく実現！
            </h2>
          </div>

          <article className="prose max-w-none">
            <p className="text-lg">
              AI技術を活用し、従来の手間と時間がかかっていたプレスリリース作成を効率化。「誰でも」「簡単に」「継続できる」新しい広報手法として、メディア向けの効果的な情報発信をサポートします。
            </p>

            {/* 「こんなお悩みありませんか？」セクションを追加 */}
            <h3 className="text-xl font-bold text-[#1a202c] text-center mt-16 mb-4">こんなお悩みありませんか？</h3>

            {/* 2つの画像を横並びに配置 - 直接URLを使用 */}
            <div className="grid md:grid-cols-2 gap-6 my-4">
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_press_scene01-6160i0i3vYI8PYJVUTgrzERPGPkvGw.png"
                    alt="メディアカバレッジの減少に悩む女性"
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">「メディアに取り上げられない…」</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_press_scene02-jCMvaYNesw3OUaMNZgOD9AcOkn559P.png"
                    alt="プレスリリース作成の時間がない男性"
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">「プレスリリース作成の時間がない…」</p>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-[#1a202c] mb-3">従来の課題</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">作成の手間と時間</strong>
                  <span className="text-gray-600 ml-4">
                    質の高いプレスリリースの作成には専門知識と多くの時間が必要。
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">メディア掲載の難しさ</strong>
                  <span className="text-gray-600 ml-4">一般的なプレスリリースはメディアに取り上げられにくい。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">効果測定の困難さ</strong>
                  <span className="text-gray-600 ml-4">プレスリリースの効果を正確に測定するのが難しい。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">継続的な発信の負担</strong>
                  <span className="text-gray-600 ml-4">定期的なリリース発行の負担が大きく、継続が難しい。</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-teal rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-teal mb-3">PROMO AIのメリット</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-teal">メディア拡散力アップ</strong>
                  <span className="text-gray-600 ml-4">
                    客観的で信憑性の高いデータに基づくリリースのため、メディアでの転載率が向上します。
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">SEO効果による検索順位向上</strong>
                  <span className="text-gray-600 ml-4">
                    メディア転載による被リンクの増加により、Google検索の順位が向上し、より多くのユーザーに届きます。
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">ブランド価値の向上</strong>
                  <span className="text-gray-600 ml-4">
                    専門的かつ信頼性のあるデータを活用することで、競合との差別化を図り、企業やドクターのブランド価値向上につながります。
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">作成の効率化</strong>
                  <span className="text-gray-600 ml-4">
                    AIによる文章生成で、プレスリリース作成の時間と労力を大幅に削減。
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-teal font-semibold text-center mt-10">
              PROMO AI独自のノウハウと最先端のAI技術を融合した
              <br />
              ソリューションで、効率的かつ効果的な
              <br />
              プレスリリースを実現します。
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
              <Link href="/lp/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_lp2-0aPIGMHqgeLvaCJTq19h1zC6M2ZCZR.png"
                      alt="Promo LP thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-azure transition-colors">Promo AI LP</h3>
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

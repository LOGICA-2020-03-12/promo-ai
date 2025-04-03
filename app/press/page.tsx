"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function AIContentPage() {
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.44.43-nk2l9IlhTDYeiZbHx8Q8AiKSLaqpv8.png"
              alt="Person typing on laptop keyboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-[#1a202c] leading-normal">
              プレスリリースを簡単に。
              <br />
              AIで効果的な情報発信を
              <br />
              手間なく実現！
            </h2>
          </div>

          <article className="prose max-w-none">
            <h3 className="text-teal">プレスリリースをもっと簡単に、もっと効果的に</h3>

            <p>
              プレスリリースとは企業や団体がメディアに向けて公式に発信するニュースのことです。新商品・新サービス、イベント、企業活動などを新聞・テレビ・雑誌・Webメディアなどに配布し、広く世の中に発信します。
            </p>

            <p>
              AI技術を取り入れ、従来手間と時間がかかっていたアンケートリリースを「誰でも」「簡単に」「継続できる」新しい広報手法として提供します。
            </p>

            <h3 className="text-teal">アンケートリリースの3つのメリット</h3>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-[#1a202c] mb-3">従来のプレスリリースの課題</h3>
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
              <Link href="/lp/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2019.18.43-pxCljuoHZcAO3WePtq1z65iGLqNetN.png"
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
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} PROMO AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


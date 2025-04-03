"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function AIAvatarContentPage() {
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
            <span className="text-[#1a202c] text-xl">AI技術を活用したSNS動画制作サービス</span>
            <br />
            <div className="mt-6"></div>
            <span className="text-gradient">
              <span className="text-xl">PROMO AI</span> ショート動画series
            </span>
          </h1>

          {/* 画像のサイズを大きくする - 幅をテキストコンテンツと同じにし、高さも増加 */}
          <div className="relative h-[250px] md:h-[350px] max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.41.22-F1kkIQCD9EigvjeL7s3fQzLLgePiK5.png"
              alt="AI technology concept with digital elements"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-[#1a202c] leading-normal">
              演者の撮影は一度だけ。
              <br />
              AIアバターで毎回の負担を減らし、
              <br />
              プロモーションを強力サポート！
            </h2>
          </div>

          <article className="prose max-w-none">
            <h3 className="text-teal">動画の演者撮影の手間が削減！</h3>

            <p>AI技術により、毎回動画で解説する演者の撮影が削減され、大幅にSNS運用の手間がなくなります。</p>

            <h3 className="text-teal">実物と見分けがつかない自然なAIアバター</h3>
            <ul>
              <li>話すスピードやイントネーションも細かく調整可能。</li>
              <li>わずか1時間程度の初回撮影と音声収録だけで、高品質なAIアバターを生成。</li>
            </ul>

            <h3 className="text-teal">AI生成による動画素材のサポート</h3>
            <p>動画コンテンツで足りない素材などについては、AI生成によるサポートも完備</p>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-[#1a202c] mb-3">従来の課題</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">撮影の継続的な負担</strong>
                  <span className="text-gray-600 ml-4">
                    毎回のコンテンツ撮影にかかる時間や労力が大きく、継続が難しい。
                  </span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">スケジュール調整の手間</strong>
                  <span className="text-gray-600 ml-4">業務の合間に撮影スケジュールを確保するのが困難。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">演者の心理的負担</strong>
                  <span className="text-gray-600 ml-4">長いセリフの暗記や演技による精神的な負担。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">成果が出るまでの長期化</strong>
                  <span className="text-gray-600 ml-4">SNS運用は成果が出るまで2〜3ヶ月かかり、継続が難しい。</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-teal rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-teal mb-3">PROMO AIのメリット</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-teal">撮影は初回の1時間のみ</strong>
                  <span className="text-gray-600 ml-4">初回の短時間撮影だけで、その後は撮影不要。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">セリフ暗記・演技が不要</strong>
                  <span className="text-gray-600 ml-4">長いセリフを覚えたり演じたりする必要なし。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">演者の負担を大幅軽減</strong>
                  <span className="text-gray-600 ml-4">AIがすべて代行するため、演者の負担が大幅に軽減。</span>
                </li>
                <li className="mb-2">
                  <strong className="block text-teal">継続運用が容易</strong>
                  <span className="text-gray-600 ml-4">最小限の労力で、効果が出るまでの継続運用が可能。</span>
                </li>
              </ul>
            </div>

            <h3 className="text-teal font-semibold text-center mt-10">
              PROMO AI独自のノウハウと最先端のAI技術を融合した
              <br />
              ソリューションで、効率的で継続しやすい
              <br />
              SNS運用を実現します。
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


"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function AIAvatarContentPage() {
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_short2-XIGojvHSMSr8bLOnAIV1MEhCDc3Ecw.png"
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

            <h3 className="text-teal">面倒なやり取りも最小限に!</h3>
            <p>アンケート&ヒアリング（初回のみ）&素材提供だけで、企画から納品までまるっとお任せ！</p>

            {/* 「こんなお悩みありませんか？」セクションを追加 */}
            <h3 className="text-xl font-bold text-[#1a202c] text-center mt-16 mb-4">こんなお悩みありませんか？</h3>

            {/* 2つの画像を横並びに配置 */}
            <div className="grid md:grid-cols-2 gap-6 my-4">
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_short_scene01-djOP4TjF2dqij9rHzQOukUroyYFPrH.png"
                    alt="忙しいスケジュールに悩むビジネスパーソン"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">「撮影の時間が取れない…」</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promoai_short_scene02-6pGEdRXVmiWWIDRVC08CicpCfqh554.png"
                    alt="台本の暗記に悩む演者"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center mt-3 text-gray-600">「台本の暗記が大変…」</p>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-6">
              <h3 className="text-xl font-bold text-[#1a202c] mb-3">従来の課題</h3>
              <ul className="space-y-3 pl-0 list-none">
                <li className="mb-2">
                  <strong className="block text-[#1a202c]">撮影の継続的な負担※</strong>
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
                  <strong className="block text-teal">撮影は初回の1時間のみ※</strong>
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

            <div className="text-xs text-gray-500 mt-6 mb-8">
              ※本項で述べている「撮影」は、演者自身による撮影を指しています。なお、その他のショート動画で使用される素材動画については、クライアント様にご用意いただく必要があります。
            </div>

            {/* AIイラストアバターセクション */}
            <div className="bg-gradient-to-r from-teal/10 to-azure/10 rounded-xl p-6 my-10 border border-teal/20">
              <h3 className="text-2xl font-bold text-center mb-6">
                <span className="text-gradient">解説動画は作りたいけど顔出ししたくない！という方に</span>
              </h3>

              <div className="bg-white rounded-lg p-5 mb-6 shadow-sm">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-teal mb-2 flex items-center justify-center">
                    <span className="text-2xl mr-2">✨</span>
                    AIイラストアバターもご提供<span className="text-xs text-[#1a202c] align-super">※</span>
                  </h4>
                  <p className="text-lg font-bold text-[#1a202c] mb-6">３つのイラストアバタープランをご用意！</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-teal/50 transition-colors">
                    <h5 className="font-bold text-teal mb-3 text-center text-xl">テンプレートプラン</h5>
                    <p className="text-sm text-gray-600">
                      あらかじめ用意された3パターンのイラストから、基本的なカスタマイズを施し、簡単に利用できるアバターです。
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-teal/50 transition-colors">
                    <h5 className="font-bold text-teal mb-3 text-center text-xl">オリジナルプラン</h5>
                    <p className="text-sm text-gray-600">
                      ゼロからオリジナルキャラクターを制作するプランです。デザインの自由度が高く、人以外の動物やデフォルメキャラなども対応可能です。
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-teal/50 transition-colors max-w-md mx-auto">
                    <h5 className="font-bold text-teal mb-3 text-center text-xl">既存キャラクタープラン</h5>
                    <p className="text-sm text-gray-600">
                      既に企業などで使用されているキャラクターやマスコットを、アバターとして展開するプランです。
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-6">※オプションとなります。詳しくはお問い合わせください。</p>
              </div>
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

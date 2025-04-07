"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ServicePage() {
  const router = useRouter()

  // ページがロードされたときに上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  const services = [
    {
      title: (
        <>
          <span className="text-lg">Promo AI</span>
          <br />
          <span className="text-2xl text-teal">ショート動画 series</span>
        </>
      ),
      description:
        "AIアバター技術を用いた動画コンテンツ生成で、演者の撮影にかかる負担を大幅に削減。効果的なSNS運用やプロモーションをサポートします。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_short2-XIGojvHSMSr8bLOnAIV1MEhCDc3Ecw.png",
      slug: "shortmovie",
    },
    {
      title: (
        <>
          <span className="text-lg">Promo AI</span>
          <br />
          <span className="text-2xl text-teal">PRESS series</span>
        </>
      ),
      description:
        "AI技術を取り入れ、従来手間と時間がかかっていたアンケートリリースを「誰でも」「簡単に」「継続できる」新しい広報手法として提供します。メディア拡散力アップ、SEO効果、ブランド価値向上を実現。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_press2-klBOvc22qsCjuJzBrOenvJoqFbFfLI.png",
      slug: "press",
    },
    {
      title: (
        <>
          <span className="text-lg">Promo AI</span>
          <br />
          <span className="text-2xl text-teal">LP series</span>
        </>
      ),
      description:
        "AI技術を採用した高速・低コストなLP制作サービス。従来のLP制作にかかる時間・コスト・柔軟性の課題を解決し、短期間・低コストで効果的なLPを実現します。",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_lp2-0aPIGMHqgeLvaCJTq19h1zC6M2ZCZR.png",
      slug: "lp",
    },
  ]

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
                <Link href="/service/" className="text-teal border-b-2 border-teal pb-1 transition-colors">
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
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-2">OUR SERVICE</h1>
          <p className="text-xl text-teal font-bold mb-4">サービス</p>
          <p className="text-xl text-gray-400 mb-12 w-full">
            LOGICAは最先端のAI技術を活用し、効率的で効果的なプロモーションソリューションを提供します。
            <br />
            手間を減らし、成果を加速させるための3つの主要サービスをご紹介します。
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
              />
            ))}
          </div>
        </section>
        <section id="newsletter" className="bg-white rounded-xl p-10 mb-20 border border-teal/30 shadow-lg text-center">
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

function ServiceCard({ title, description, image, slug = "" }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-teal/50 transition-colors h-full">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={typeof title === "string" ? title : "Service"}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-[#1a202c] text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={`/${slug}/`} className="text-teal hover:text-azure transition-colors">
          詳細を見る →
        </Link>
      </CardFooter>
    </Card>
  )
}


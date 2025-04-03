"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ServicePage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  const services = [
    {
      title: (
        <>
          <span className="text-sm">Promo AI</span>
          <br />
          <span className="text-xl text-teal">ショート動画 series</span>
        </>
      ),
      description:
        "AIアバター技術を用いた動画コンテンツ生成で、撮影や編集にかかる負担を大幅に削減。効果的なSNS運用やプロモーションをサポートします。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.41.22-F1kkIQCD9EigvjeL7s3fQzLLgePiK5.png",
      slug: "shortmovie-series",
    },
    {
      title: (
        <>
          <span className="text-sm">Promo AI</span>
          <br />
          <span className="text-xl text-teal">PRESS series</span>
        </>
      ),
      description:
        "AI技術を取り入れ、従来手間と時間がかかっていたアンケートリリースを「誰でも」「簡単に」「継続できる」新しい広報手法として提供します。メディア拡散力アップ、SEO効果、ブランド価値向上を実現。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.44.43-nk2l9IlhTDYeiZbHx8Q8AiKSLaqpv8.png",
      slug: "press",
    },
    {
      title: (
        <>
          <span className="text-sm">Promo AI</span>
          <br />
          <span className="text-xl text-teal">LP series</span>
        </>
      ),
      description:
        "AI技術を採用した高速・高品質なLP制作サービス。従来のLP制作にかかる時間・コスト・柔軟性の課題を解決し、短期間・低コストで効果的なLPを実現します。",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2019.18.43-pxCljuoHZcAO3WePtq1z65iGLqNetN.png",
      slug: "lp",
    },
  ]

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
            <Link href="/service/" className="text-white transition-colors border-b-2 border-teal pb-1">
              Service
            </Link>
            <Link href="/articles/" className="text-gray-400 hover:text-white transition-colors">
              Articles
            </Link>
            <Link href="/about/" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-teal text-teal hover:bg-opacity-10 hover:bg-teal hover:text-white"
            onClick={handleSubscribeClick}
          >
            お問い合わせ
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8">サービス</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            LOGICAは最先端のAI技術を活用し、効率的で効果的なプロモーションソリューションを提供します。
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


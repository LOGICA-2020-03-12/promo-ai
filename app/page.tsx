"use client"

import type React from "react"

import { useState, useRef, type FormEvent, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Instagram, Mail, VolumeX, Volume2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, FreeMode, A11y } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const newsletterRef = useRef<HTMLElement>(null)
  const recentArticlesRef = useRef<HTMLElement>(null)

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToRecentArticles = () => {
    recentArticlesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)

    // For GitHub Pages, you could use a service like Formspree or a Google Form
    // to collect emails without needing a backend
    // Example: window.open(`https://formspree.io/f/yourformid?email=${encodeURIComponent(email)}`, '_blank')
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
            <Link href="/about/" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border border-gray-800 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 font-medium text-base rounded-md px-6"
            onClick={scrollToNewsletter}
          >
            お問い合わせ
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Promotionを
                <br />
                <span className="text-gradient">加速させる</span>
              </h1>
              <p className="text-gray-600 text-xl md:text-2xl lg:text-3xl font-semibold my-6">
                <span className="block mb-2">「もっとラクして、もっと伝わる」</span>
                <span className="block">AIで実現する、手間いらずのプロモーション改革</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-gradient hover:opacity-90" onClick={scrollToRecentArticles}>
                  最新コンテンツ
                </Button>
                <Button
                  variant="outline"
                  className="border border-gray-800 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 font-medium text-base rounded-md px-6"
                  onClick={scrollToNewsletter}
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-800">
              {/* 静的画像をYouTube動画に置き換え */}
              <div className="w-full h-full relative">
                <iframe
                  src="https://www.youtube.com/embed/065BVrYZNKo?autoplay=0"
                  title="「不動産の才能をのばす。」篇 30秒 トーセイ企業CM【改訂版】"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">サービス</h2>
              <p className="text-sm text-gray-400">Service</p>
            </div>
            <Link
              href="/service/"
              className="text-teal hover:text-azure text-sm flex items-center gap-2 transition-colors"
            >
              View all <Eye className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeaturedCard
              title={
                <>
                  <span className="text-sm">Promo AI</span>
                  <br />
                  <span className="text-xl text-teal">ショート動画 series</span>
                </>
              }
              description="AIアバター技術を用いた動画コンテンツ生成で、撮影や編集にかかる負担を大幅に削減。効果的なSNS運用やプロモーションをサポートします。"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.41.22-F1kkIQCD9EigvjeL7s3fQzLLgePiK5.png"
              slug="shortmovie-series"
            />
            <FeaturedCard
              title={
                <>
                  <span className="text-sm">Promo AI</span>
                  <br />
                  <span className="text-xl text-teal">PRESS series</span>
                </>
              }
              description="AI技術を取り入れ、従来手間と時間がかかっていたアンケートリリースを「誰でも」「簡単に」「継続できる」新しい広報手法として提供します。メディア拡散力アップ、SEO効果、ブランド価値向上を実現。"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2018.44.43-nk2l9IlhTDYeiZbHx8Q8AiKSLaqpv8.png"
              slug="press"
            />
            <FeaturedCard
              title={
                <>
                  <span className="text-sm">Promo AI</span>
                  <br />
                  <span className="text-xl text-teal">LP series</span>
                </>
              }
              description="AI技術を採用した高速・高品質なLP制作サービス。従来のLP制作にかかる時間・コスト・柔軟性の課題を解決し、短期間・低コストで効果的なLPを実現します。"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%200007-03-25%20at%2019.18.43-pxCljuoHZcAO3WePtq1z65iGLqNetN.png"
              slug="lp"
            />
          </div>
        </section>

        <section className="mb-20" ref={recentArticlesRef}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">最新コンテンツ</h2>
            <p className="text-sm text-gray-400">Latest Contents</p>
          </div>
          <VideoSlider />
        </section>

        <section
          ref={newsletterRef}
          id="newsletter"
          className="bg-white rounded-xl p-10 mb-20 border border-teal/30 shadow-lg text-center"
        >
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="inline-block p-3 bg-brand-gradient rounded-lg mb-2">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">お問い合わせ</h2>
            <p className="text-gray-600">
              サービスに関するご質問やお見積りのご依頼など、お気軽にお問い合わせください。
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-brand-gradient hover:opacity-90 text-white font-medium py-4 px-8 rounded-md transition-colors text-lg"
            >
              <Mail className="h-6 w-6" />
              PROMO AIに関するお問い合わせはコチラ
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

// VideoSlider 関数を以下のように更新します

function VideoSlider() {
  // VideoSlider 関数内のvideoDataを以下のように更新します。
  // 新しい動画を先頭に追加します。

  const videoData = [
    {
      id: 0,
      title: "LOGICA Melody",
      description: "LOGICAの最新営業コンテンツをご紹介します。AIを活用した効率的な営業戦略について解説しています。",
      category: "Sales Content",
      date: "March 20, 2025",
      videoSrc: "https://www.youtube.com/embed/mGZlXwmnQS8",
      posterSrc:
        "https://sjc.microlink.io/QGWY_FbXPCHfJzC1tr2rTAusSzwxJwDSQbXmRtXEikC-BXC38maD58RwzGy9ftZ8yZEneLH2Ayii7xxY4--ttg.jpeg",
      isYouTube: true,
      externalLink: "https://www.youtube.com/watch?v=mGZlXwmnQS8",
    },
    {
      id: 1,
      title: "LOGICA Drink",
      description:
        "LOGICAの革新的なAI駆動型プロモーションコンテンツをご紹介します。飲料マーケティングにおける独自のアプローチをご覧ください。",
      category: "Promo Video",
      date: "March 19, 2025",
      videoSrc: "https://www.youtube.com/embed/4BbbUKLeagA",
      posterSrc:
        "https://sjc.microlink.io/yT5kXaP5lPSfC6393NQ7hLJAqLf0qgc2SNsQa9S1jMaHj2HL06Kmj4MFdebOcqvN1Ol3I1oTafUFWUQ79JME1g.jpeg",
      isYouTube: true,
      externalLink: "https://www.youtube.com/watch?v=4BbbUKLeagA",
    },
    {
      id: 2,
      title: "LOGICA Rouge",
      description:
        "LOGICAの最新営業コンテンツシリーズ第5弾。AIを活用したプロモーション戦略と効果的な顧客エンゲージメントについて解説しています。",
      category: "Sales Content",
      date: "March 28, 2025",
      videoSrc: "https://www.youtube.com/embed/DEVWV_Mdtf4",
      posterSrc:
        "https://sjc.microlink.io/6pvF9_EKpRKOXITqUV8IBCCPU70MQ0uPncqA1W5uYh282rF7k1IzfNI9F8XBAXUfKH0DkEhfzDhSdOgWb4Y_Ww.jpeg",
      isYouTube: true,
      externalLink: "https://www.youtube.com/watch?v=DEVWV_Mdtf4",
    },
    {
      id: 3,
      title: "LOGICA Lip",
      description:
        "LOGICAの最新営業コンテンツシリーズ第4弾。AIを活用した効率的な営業アプローチと顧客対応の最適化について解説しています。",
      category: "Sales Content",
      date: "March 25, 2025",
      videoSrc: "https://www.youtube.com/embed/Caq2Zh09Jt4",
      posterSrc:
        "https://sjc.microlink.io/ZASIv_34K2GpFDlzgi0wV3S3gftAQvT4Zm5krAZU54FEi7Xx071tnFiKAdZH-4nX02w97ag4jLcgIOX3_EUpsg.jpeg",
      isYouTube: true,
      externalLink: "https://www.youtube.com/watch?v=Caq2Zh09Jt4",
    },
    {
      id: 4,
      title: "AI Video Editing",
      description:
        "Learn how AI can automate your video editing workflow and help you create professional-looking content in minutes.",
      category: "Production",
      date: "September 12, 2023",
      videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      posterSrc: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&h=400&auto=format&fit=crop",
      externalLink: "",
    },
    {
      id: 5,
      title: "Content Generation",
      description:
        "See how AI can generate creative content ideas and help you produce high-quality videos for your marketing campaigns.",
      category: "Creation",
      date: "October 8, 2023",
      videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      posterSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=400&auto=format&fit=crop",
      externalLink: "",
    },
    {
      id: 6,
      title: "AI Analytics Dashboard",
      description:
        "Explore how AI analytics can help you understand your audience and optimize your promotional content strategy.",
      category: "Analytics",
      date: "November 15, 2023",
      videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      posterSrc: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=600&h=400&auto=format&fit=crop",
      externalLink: "",
    },
  ]

  // 重複したビデオデータを作成して連続スクロール効果を強化
  const duplicatedVideoData = [...videoData, ...videoData, ...videoData]

  // Swiper.js用の状態管理
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  // マウスホバー時に自動スクロールを一時停止
  const handleMouseEnter = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop()
    }
  }, [swiperInstance])

  // マウスが離れたら自動スクロールを再開
  const handleMouseLeave = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.autoplay.start()
    }
  }, [swiperInstance])

  // 自動再生が確実に動作するようにするための処理
  useEffect(() => {
    if (swiperInstance) {
      // 初期化時に自動再生を確実に開始
      swiperInstance.autoplay.start()

      // ユーザー操作後も自動再生を確実に再開するための処理
      const handleTouchEnd = () => {
        setTimeout(() => {
          if (swiperInstance && !swiperInstance.destroyed) {
            swiperInstance.autoplay.start()
          }
        }, 100)
      }

      swiperInstance.on("touchEnd", handleTouchEnd)

      return () => {
        if (swiperInstance && !swiperInstance.destroyed) {
          swiperInstance.off("touchEnd", handleTouchEnd)
          swiperInstance.autoplay.stop()
        }
      }
    }
  }, [swiperInstance])

  // Swiper.js用の状態管理
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  // スライド変更時のコールバック  = useState(false)

  // スライド変更時のコールバック
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlideIndex(swiper.realIndex)
  }

  return (
    <div
      className="relative py-8 overflow-hidden video-slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Swiper.jsコンポーネント */}
      <Swiper
        modules={[Navigation, Autoplay, FreeMode, A11y]}
        spaceBetween={16}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        speed={8000} // 非常にゆっくりとしたスライド速度
        autoplay={{
          delay: 1, // 遅延をほぼゼロに設定
          disableOnInteraction: false, // ユーザー操作後も自動再生を継続
          pauseOnMouseEnter: false, // マウスホバー時の一時停止はカスタム処理で行う
          stopOnLastSlide: false, // 最後のスライドで停止しない
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="video-swiper"
      >
        {duplicatedVideoData.map((video, index) => (
          <SwiperSlide key={`${video.id}-${index}`} className="video-swiper-slide">
            <SmartphoneVideoCard
              title={video.title}
              description={video.description}
              category={video.category}
              date={video.date}
              videoSrc={video.videoSrc}
              posterSrc={video.posterSrc}
              isYouTube={video.isYouTube}
              externalLink={video.externalLink}
              index={index}
              activeSlideIndex={activeSlideIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* カスタムナビゲーションボタン */}
      <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white/70 hover:text-white/90 rounded-full p-2 transition-all duration-200 flex items-center justify-center w-10 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white/70 hover:text-white/90 rounded-full p-2 transition-all duration-200 flex items-center justify-center w-10 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  )
}

// SmartphoneVideoCard 関数を以下のように更新します
function SmartphoneVideoCard({
  title,
  description,
  category,
  date,
  videoSrc,
  posterSrc,
  isYouTube,
  externalLink,
  index,
  activeSlideIndex,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")

  // Intersection Observerを使用して、カードが画面中央に来たかどうかを検出
  useEffect(() => {
    if (!cardRef.current) return

    const options = {
      root: null, // ビューポートをルートとして使用
      rootMargin: "0px",
      threshold: 0.7, // 70%以上表示されたら発火
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting)
      })
    }, options)

    observer.observe(cardRef.current)

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // YouTube URLの設定
  useEffect(() => {
    if (isYouTube) {
      if (isInView) {
        // 中央に来たら自動再生（ミュート状態）
        // YouTubeの動画IDを抽出
        const videoId = videoSrc.split("/").pop()
        setYoutubeUrl(`${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoId}`)
      } else if (isHovered) {
        // ホバー時も自動再生
        setYoutubeUrl(`${videoSrc}?autoplay=1&mute=1`)
      } else {
        // それ以外の場合は自動再生しない
        setYoutubeUrl(videoSrc)
      }
    }
  }, [isHovered, isYouTube, videoSrc, isInView])

  // 通常の動画の再生制御
  useEffect(() => {
    if (!isYouTube && videoRef.current && !hasError) {
      if (isInView) {
        videoRef.current.play().catch((error) => {
          console.error("Video play error:", error)
          setHasError(true)
        })
      } else if (!isHovered) {
        videoRef.current.pause()
      }
    }
  }, [isInView, isHovered, isYouTube, hasError])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (!isYouTube && videoRef.current && !hasError) {
      videoRef.current.play().catch((error) => {
        console.error("Video play error:", error)
        setHasError(true)
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (!isYouTube && videoRef.current && !hasError && !isInView) {
      videoRef.current.pause()
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    if (!isYouTube && videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const handleVideoError = () => {
    setHasError(true)
    console.error("Video failed to load")
  }

  return (
    <div
      ref={cardRef}
      className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="space-y-3">
        <div className="relative rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
          {/* Smartphone frame - より縦長のアスペクト比に調整 */}
          {/* Smartphone frame - full screen video without notch */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[9/21] h-[420px] w-full">
            {/* Remove the notch */}
            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-10"></div>

            {/* YouTube Video or Regular Video or Fallback Image */}
            {isYouTube ? (
              <div className="w-full h-full">
                {/* YouTube thumbnail when not playing */}
                {!youtubeUrl && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={posterSrc || "/placeholder.svg?height=420&width=180"}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 p-4 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Only show iframe when URL is set */}
                {youtubeUrl && (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      src={youtubeUrl}
                      title={title}
                      className="w-[100%] h-[120%] scale-[1.2]"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ) : hasError ? (
              <div className="w-full h-full relative">
                <Image
                  src={posterSrc || "/placeholder.svg?height=420&width=180"}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <p className="text-white text-sm px-4 text-center">Video preview unavailable</p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                onError={handleVideoError}
                crossOrigin="anonymous"
              />
            )}

            {/* Controls overlay - only visible on hover for non-YouTube videos */}
            {!isYouTube && (
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              >
                {!hasError && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5 text-white" />
                      ) : (
                        <Volume2 className="h-5 w-5 text-white" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Play indicator - only visible when not hovered/in view and video is available */}
            {!isYouTube && !hasError && !isInView && !isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-medium group-hover:text-azure transition-colors">{title}</h3>
          {externalLink ? (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block text-gray-400 text-sm mt-2 line-clamp-2 hover:text-teal transition-colors cursor-pointer"
            >
              {description}
            </a>
          ) : (
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

function FeaturedCard({ title, description, image, slug = "" }) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-teal/50 transition-colors transform transition-transform duration-300 hover:-translate-y-2">
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
      <CardFooter className="flex justify-end text-sm text-gray-500">
        <Link href={`/${slug}/`} className="text-teal hover:text-azure transition-colors">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}


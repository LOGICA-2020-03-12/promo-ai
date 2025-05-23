"use client"

import type React from "react"

import { useState, useRef, type FormEvent, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VolumeX, Volume2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

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

  // ページがロードされたときに上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 動画の読み込み最適化のためのuseEffect
  useEffect(() => {
    // ブラウザの接続状況を確認
    if ("connection" in navigator && (navigator as any).connection) {
      const connection = (navigator as any).connection

      // 低速接続の場合は動画の読み込みを遅延させる
      if (connection.saveData || connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
        const videoContainer = document.querySelector(".video-container")
        if (videoContainer) {
          const placeholder = document.createElement("div")
          placeholder.className = "absolute inset-0 flex items-center justify-center bg-gray-100 z-20"
          placeholder.innerHTML = `
            <div class="text-center p-4">
              <p class="text-gray-600 mb-2">低速接続を検出しました</p>
              <button class="bg-teal text-white px-4 py-2 rounded">動画を読み込む</button>
            </div>
          `

          // ボタンクリックで動画を読み込む
          placeholder.querySelector("button")?.addEventListener("click", () => {
            const iframe = document.querySelector(".youtube-video") as HTMLIFrameElement
            if (iframe) {
              iframe.src = iframe.src // 動画の読み込みを開始
            }
            placeholder.remove()
          })

          videoContainer.appendChild(placeholder)

          // 動画の自動読み込みを停止
          const iframe = document.querySelector(".youtube-video") as HTMLIFrameElement
          if (iframe) {
            iframe.src = "" // 動画の読み込みを一時停止
          }
        }
      }
    }
  }, [])

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
                onClick={scrollToNewsletter}
              >
                <span className="relative z-10">お問い合わせ</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* FVエリア - 動画セクション */}
        <section className="relative w-full video-container">
          <div className="video-wrapper">
            {/* 動画読み込み前に表示するプレースホルダー */}
            <div className="video-placeholder absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="loading-spinner mb-4"></div>
                <p className="text-gray-500">動画を読み込み中...</p>
              </div>
            </div>

            <iframe
              src="https://www.youtube.com/embed/3IJp60wqNYA?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&controls=0&loop=1&playlist=3IJp60wqNYA&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&cc_load_policy=0&color=white&autohide=1&hl=ja&enablejsapi=1&origin=https://promoai.vercel.app"
              className="youtube-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="PROMO AI プロモーション動画"
              loading="lazy"
              onLoad={() => {
                // 動画が読み込まれたらプレースホルダーを非表示にする
                const placeholder = document.querySelector(".video-placeholder")
                if (placeholder) {
                  placeholder.classList.add("opacity-0")
                  setTimeout(() => {
                    placeholder.classList.add("hidden")
                  }, 500)
                }
              }}
            ></iframe>
            {/* UIを非表示にするための透明なオーバーレイ */}
            <div className="video-overlay pointer-events-auto"></div>
          </div>
        </section>

        {/* テキストコンテンツセクション - 動画の下に配置 */}
        <section className="py-16 bg-[#f1f4f8]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1a202c]">
                <span className="md:inline block">Promotionを</span>
                <span className="md:inline block">加速させる</span>
              </h1>
              <p className="text-[#1a202c] text-xl md:text-2xl lg:text-3xl font-semibold my-6">
                <span className="block mb-2">「もっとラクして、もっと伝わる」</span>
                <span className="block">AIで実現する、手間いらずのプロモーション改革</span>
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/about/"
                  className="inline-flex items-center justify-center bg-teal text-white border border-transparent relative overflow-hidden transition-all duration-300 hover:bg-white hover:text-teal hover:border-teal group py-4 px-8 rounded-md font-medium text-lg"
                >
                  <span className="relative z-10">PROMO AIについて</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-4xl font-bold">OUR SERVICE</h2>
              <p className="text-2xl text-teal font-bold">サービス</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeaturedCard
                title={
                  <>
                    <span className="text-lg">Promo AI</span>
                    <br />
                    <span className="text-2xl text-teal">ショート動画 series</span>
                  </>
                }
                description="AIアバター技術を用いた動画コンテンツ生成で、演者の撮影にかかる負担を大幅に削減。効果的なSNS運用やプロモーションをサポートします。"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_short2-XIGojvHSMSr8bLOnAIV1MEhCDc3Ecw.png"
                slug="shortmovie"
              />
              <FeaturedCard
                title={
                  <>
                    <span className="text-lg">Promo AI</span>
                    <br />
                    <span className="text-2xl text-teal">PRESS series</span>
                  </>
                }
                description="AI技術を取り入れ、従来手間と時間がかかっていたアンケートリリースを「誰でも」「簡単に」「継続できる」新しい広報手法として提供します。メディア拡散力アップ、SEO効果、ブランド価値向上を実現。"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_press2-klBOvc22qsCjuJzBrOenvJoqFbFfLI.png"
                slug="press"
              />
              <FeaturedCard
                title={
                  <>
                    <span className="text-lg">Promo AI</span>
                    <br />
                    <span className="text-2xl text-teal">LP series</span>
                  </>
                }
                description="AI技術を採用した高速・低コストなLP制作サービス。従来のLP制作にかかる時間・コスト・柔軟性の課題を解決し、短期間・低コストで効果的なLPを実現します。"
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promoai_lp2-0aPIGMHqgeLvaCJTq19h1zC6M2ZCZR.png"
                slug="lp"
              />
            </div>
          </section>

          <section className="mb-20" ref={recentArticlesRef}>
            <div className="mb-8">
              <h2 className="text-4xl font-bold">CONTENTS</h2>
              <p className="text-2xl text-teal font-bold">コンテンツ</p>
            </div>
            <VideoSlider />
          </section>

          <section
            ref={newsletterRef}
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

// VideoSlider 関数
function VideoSlider() {
  const videoData = [
    {
      id: 0,
      title: "LOGICA Melody",
      description:
        "ヘッドフォンの広告サンプルとなります。AIとアニメーション生成を組みわせたエモーショナルな映画の予告のようなコンテンツとなります。",
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
        "栄養ドリンクの広告サンプルとなります。AIとアニメーション生成と実写生成を組みわせて親しみと効果が実感できそうなイメージを訴求しています。",
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
        "口紅の広告サンプルとなります。AIとアニメーション生成を組み合わせたターゲット層に興味と関心を訴求したコンテンツとなっています。",
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
      description: "口紅の広告サンプルとなります。AIによる動画生成のみでの素材でプロモーションを作成。",
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
      title: "LOGICA TRAVEL",
      description:
        "旅行ガイドの広告サンプルとなります。素材すべてAIによる生成となり、3Dイラストのナビキャラによる解説コンテンツとなります。",
      category: "Travel Guide",
      date: "April 5, 2025",
      videoSrc: "https://www.youtube.com/embed/L4EtRaD5OVc",
      posterSrc: "https://i.ytimg.com/vi/L4EtRaD5OVc/maxresdefault.jpg",
      isYouTube: true,
      externalLink: "https://youtube.com/shorts/L4EtRaD5OVc",
    },
    {
      id: 6,
      title: "対談コンテンツ",
      description:
        "AIアバターによる対談コンテンツを制作。演者の撮影への負担を軽減して、情報配信を効率的に行うことができます。",
      category: "Analytics",
      date: "November 15, 2023",
      videoSrc: "https://www.youtube.com/embed/OpPi7-Qx67E",
      posterSrc: "https://img.youtube.com/vi/OpPi7-Qx67E/maxresdefault.jpg",
      isYouTube: true,
      externalLink: "https://www.youtube.com/watch?v=OpPi7-Qx67E",
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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

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
          disableOnInteraction: false, // ユ
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

interface VideoCardProps {
  title: string
  description: string
  category: string
  date: string
  videoSrc: string
  posterSrc: string
  isYouTube: boolean
  externalLink?: string
  index: number
  activeSlideIndex: number
}

// SmartphoneVideoCard 関数
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
}: VideoCardProps) {
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

        // LOGICA Lipの動画の場合は0.01秒から開始するパラメータを追加
        const isLogicaLip = title === "LOGICA Lip"
        const startParam = isLogicaLip ? "&start=0.01" : ""

        setYoutubeUrl(
          `${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3${startParam}`,
        )
      } else if (isHovered) {
        // ホバー時も自動再生
        // LOGICA Lipの動画の場合は0.01秒から開始するパラメータを追加
        const isLogicaLip = title === "LOGICA Lip"
        const startParam = isLogicaLip ? "&start=0.01" : ""

        setYoutubeUrl(
          `${videoSrc}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3${startParam}`,
        )
      } else {
        // それ以外の場合は自動再生しない
        setYoutubeUrl(videoSrc)
      }
    }
  }, [isHovered, isYouTube, videoSrc, isInView, title])

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
                    {/* UIを非表示にするための透明なオーバーレイ */}
                    <div className="video-overlay"></div>
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

interface FeaturedCardProps {
  title: React.ReactNode
  description: string
  image: string
  slug?: string
}

function FeaturedCard({ title, description, image, slug = "" }: FeaturedCardProps) {
  const router = useRouter()

  const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(`/${slug}/`)
    // ページ遷移後に上部にスクロール
    window.scrollTo(0, 0)
  }

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
        <a
          href={`/${slug}/`}
          onClick={handleReadMore}
          className="text-teal hover:text-azure transition-colors cursor-pointer"
        >
          Read more →
        </a>
      </CardFooter>
    </Card>
  )
}

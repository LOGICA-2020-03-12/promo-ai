"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { VolumeX, Volume2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export default function ContentsPage() {
  const router = useRouter()

  // ページがロードされたときに上部にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  // 動画データ - HOMEの最新の動画と同期
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
        "https://i.ytimg.com/vi/4BbbUKLeagA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnUHCTlT_UkEBj_8sIRMTXJNQZnQ",
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
        "https://i.ytimg.com/vi/Caq2Zh09Jt4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQnTxdYRVJgBnd9fXlJvjsFt_Yjw",
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
                <Link href="/contents/" className="text-teal border-b-2 border-teal pb-1 transition-colors">
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
          <h1 className="text-4xl font-bold mb-2">CONTENTS</h1>
          <p className="text-xl text-teal font-bold mb-4">コンテンツ</p>
          <p className="text-xl text-gray-400 mb-12 w-full">
            AI技術を活用して制作した「PROMO AI」のコンテンツをご紹介します。
            <br />
            SNS配信や対談など、様々なサンプルを随時追加予定ですので、その可能性をぜひお確かめください。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                category={video.category}
                date={video.date}
                videoSrc={video.videoSrc}
                posterSrc={video.posterSrc}
                isYouTube={video.isYouTube}
                externalLink={video.externalLink}
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

interface VideoCardProps {
  title: string
  description: string
  category: string
  date: string
  videoSrc: string
  posterSrc: string
  isYouTube: boolean
  externalLink?: string
}

// VideoCard コンポーネント
function VideoCard({
  title,
  description,
  category,
  date,
  videoSrc,
  posterSrc,
  isYouTube,
  externalLink,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // YouTube URLの設定
  useEffect(() => {
    if (isYouTube) {
      if (isHovered) {
        // ホバー時に自動再生
        const videoId = videoSrc.split("/").pop()

        // すべての動画に対して同じパラメータを使用
        setYoutubeUrl(
          `${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`,
        )
      } else {
        // それ以外の場合は自動再生しない
        setYoutubeUrl("")
      }
    }
  }, [isHovered, isYouTube, videoSrc])

  // 通常の動画の再生制御
  useEffect(() => {
    if (!isYouTube && videoRef.current && !hasError) {
      if (isHovered) {
        videoRef.current.play().catch((error) => {
          console.error("Video play error:", error)
          setHasError(true)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isHovered, isYouTube, hasError])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
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
      className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="space-y-3">
        <div className="relative rounded-lg overflow-hidden border border-gray-800 group-hover:border-teal/50 transition-colors">
          {/* Smartphone frame - より縦長のアスペクト比に調整 */}
          {/* Smartphone frame - full screen video without notch */}
          {/* Smartphone frame - 統一されたアスペクト比と高さ */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[9/16] h-[400px] w-full">
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
                      src={posterSrc || "/placeholder.svg?height=400&width=225"}
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
                      className="w-full h-full object-cover"
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
                  src={posterSrc || "/placeholder.svg?height=400&width=225"}
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

            {/* Play indicator - only visible when not hovered and video is available */}
            {!isYouTube && !hasError && !isHovered && (
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

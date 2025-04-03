"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, VolumeX, Volume2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"

export default function ArticlesPage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  // 動画データ - HOMEの最新の動画と同期
  const videoData = [
    {
      id: 0,
      title: "LOGICA Melody",
      description: "PROMO AIの最新営業コンテンツをご紹介します。AIを活用した効率的な営業戦略について解説しています。",
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
        "PROMO AIの革新的なAI駆動型プロモーションコンテンツをご紹介します。飲料マーケティングにおける独自のアプローチをご覧ください。",
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
        "PROMO AIの最新営業コンテンツシリーズ第5弾。AIを活用したプロモーション戦略と効果的な顧客エンゲージメントについて解説しています。",
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
        "PROMO AIの最新営業コンテンツシリーズ第4弾。AIを活用した効率的な営業アプローチと顧客対応の最適化について解説しています。",
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
            <Link href="/articles/" className="text-white transition-colors border-b-2 border-teal pb-1">
              Articles
            </Link>
            <Link href="/about/" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-teal bg-teal text-white hover:bg-teal hover:opacity-90 font-medium text-base"
            onClick={handleSubscribeClick}
          >
            お問い合わせ
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8">All Articles</h1>

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

// VideoCard コンポーネント
function VideoCard({ title, description, category, date, videoSrc, posterSrc, isYouTube, externalLink }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")

  // YouTube URLの設定
  useEffect(() => {
    if (isYouTube) {
      if (isHovered) {
        // ホバー時に自動再生
        const videoId = videoSrc.split("/").pop()
        setYoutubeUrl(`${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoId}`)
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
          <div className="relative bg-white rounded-lg overflow-hidden aspect-[9/21] h-[420px] w-full shadow-md">
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


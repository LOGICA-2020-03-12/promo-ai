import Link from "next/link"
import Image from "next/image"
import { BrainCircuit, Clock } from "lucide-react"

// This is a static list of blog posts for GitHub Pages
const blogPosts = [
  {
    title: "The Evolution of Generative Adversarial Networks: From GAN to StyleGAN-3",
    date: "May 15, 2023",
    author: "Dr. Alex Chen",
    category: "GenAI",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "Explore the remarkable evolution of GANs from their inception to the cutting-edge StyleGAN-3, and how they've revolutionized image generation.",
    slug: "evolution-of-gans",
  },
  {
    title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
    date: "February 5, 2024",
    author: "Dr. Michael Zhang",
    category: "AI Research",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "Discover how multimodal AI models are breaking down barriers between different types of data, enabling new applications and capabilities.",
    slug: "multimodal-ai-models",
  },
  {
    title: "AI in 2025: Transforming Daily Life",
    date: "October 18, 2023",
    author: "Dr. Sarah Johnson",
    category: "Future Tech",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "A forward-looking exploration of how AI will be integrated into everyday life by 2025, from healthcare to education and beyond.",
    slug: "ai-in-2025",
  },
  {
    title: "Deep Learning for Natural Language Processing",
    date: "November 7, 2024",
    author: "Dr. Lisa Park",
    category: "NLP",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "An in-depth look at how deep learning has revolutionized natural language processing, enabling machines to understand and generate human language.",
    slug: "deep-learning-nlp",
  },
  {
    title: "The Future of AI Research: What's Next?",
    date: "February 28, 2025",
    author: "Dr. Thomas Anderson",
    category: "Future of AI",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "Explore the cutting-edge research directions that will shape the future of artificial intelligence in the coming years.",
    slug: "future-of-ai-research",
  },
  {
    title: "Ethical Considerations in Generative AI",
    date: "January 14, 2025",
    author: "Dr. Maya Patel",
    category: "AI Ethics",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "A thoughtful examination of the ethical challenges posed by generative AI and how researchers and policymakers are addressing them.",
    slug: "ethical-considerations-genai",
  },
  {
    title: "AI Regulation Landscape in 2025: Global Policies and Industry Impact",
    date: "March 1, 2025",
    author: "Dr. Elena Kowalski",
    category: "AI Policy",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=600&h=400&auto=format&fit=crop",
    excerpt:
      "An overview of the evolving regulatory landscape for AI technologies and how it's shaping industry practices worldwide.",
    slug: "ai-regulation-landscape-2025",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#1a202c]">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Neural<span className="text-purple-500">Pulse</span>
          </Link>
          <Link href="/contact" className="text-sm font-medium text-purple-500 hover:text-purple-600">
            お問い合わせ
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Latest Articles</h1>

          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}/`} key={index} className="group">
                <div className="grid md:grid-cols-3 gap-6 items-start bg-white rounded-xl overflow-hidden border border-gray-200 p-4 md:p-0 hover:shadow-md transition-shadow">
                  <div className="relative h-48 md:h-full rounded-lg md:rounded-none overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:col-span-2 md:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-purple-500">
                      <BrainCircuit className="h-4 w-4" />
                      <span>{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold group-hover:text-purple-500 transition-colors">{post.title}</h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div>{post.date}</div>
                      <div>By {post.author}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-[#1a202c]">
              Neural<span className="text-purple-500">Pulse</span>
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Exploring the frontiers of artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

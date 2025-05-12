// Global type declarations for Next.js App Router
import type { ReactNode } from "react"

declare global {
  // Define PageProps interface that Next.js expects
  namespace NextPage {
    interface PageProps {
      params?: Record<string, string | string[]>
      searchParams?: Record<string, string | string[]>
      children?: ReactNode
    }
  }
}

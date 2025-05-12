"use client"

// This file provides basic type declarations for Next.js App Router

declare module "next" {
  export interface PageProps {
    params?: Record<string, string>
    searchParams?: Record<string, string | string[]>
  }
}

declare module "next/navigation" {
  export function useRouter(): {
    push: (url: string) => void
    replace: (url: string) => void
    refresh: () => void
    back: () => void
    forward: () => void
  }

  export function usePathname(): string
  export function useSearchParams(): URLSearchParams
}

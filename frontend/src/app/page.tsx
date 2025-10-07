import {Suspense } from "react"
import HomePageContent from "@/features/components/content/homePageContent"

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <HomePageContent />
    </Suspense>
  )
}

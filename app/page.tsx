import HomePageClient from "@/components/home-page-client"
import { getTopInsights } from "@/lib/insights"

export default function Page() {
  const insights = getTopInsights(3)
  return <HomePageClient insights={insights} />
}

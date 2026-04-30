import HomePageClient from "@/components/home-page-client"
import { getTopInsights } from "@/lib/insights"
import { fetchTrustedLogos } from "@/lib/trustedby"

export default async function Page() {
  const [insights, logos] = await Promise.all([
    getTopInsights(3),
    fetchTrustedLogos()
  ])
  
  return <HomePageClient insights={insights} trustedLogos={logos} />
}
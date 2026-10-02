import { HomeHero } from "@/components/home/HomeHero";
import { ExploreCategories } from "@/components/home/ExploreCategories";
import { TrendingNow } from "@/components/home/TrendingNow";
import { NewArrivals } from "@/components/home/NewArrivals";
import { FlashDeals } from "@/components/home/FlashDeals";
import { RecommendedForYou } from "@/components/home/RecommendedForYou";
import { TrustSecurity } from "@/components/home/TrustSecurity";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ExploreCategories />
      <div className="h-px w-full bg-line" aria-hidden />
      <TrendingNow />
      <div className="h-px w-full bg-line" aria-hidden />
      <NewArrivals />
      <FlashDeals />
      <RecommendedForYou />
      <TrustSecurity />
    </>
  );
}
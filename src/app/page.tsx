import AnnouncementTicker from "@/components/sections/AnnouncementTicker";
import ComparePropertiesBanner from "@/components/sections/ComparePropertiesBanner";
import ConstructionStatus from "@/components/sections/ConstructionStatus";
import FeaturedDevelopments from "@/components/sections/FeaturedDevelopments";
import HeroSection from "@/components/sections/hero-section";
import Neighborhoods from "@/components/sections/Neighborhood";
import WhyMiamiSection from "@/components/sections/WhyMiamiSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnnouncementTicker />
      <FeaturedDevelopments />
      <Neighborhoods />
      <ConstructionStatus />
      <ComparePropertiesBanner />
      <WhyMiamiSection />
    </div>
  );
}

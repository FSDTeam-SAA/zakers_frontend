import AnnouncementTicker from "@/components/sections/AnnouncementTicker";
import FeaturedDevelopments from "@/components/sections/FeaturedDevelopments";
import HeroSection from "@/components/sections/hero-section";
import Neighborhoods from "@/components/sections/Neighborhood";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnnouncementTicker />
      <FeaturedDevelopments />
      <Neighborhoods />
    </div>
  );
}

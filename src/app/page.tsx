import AnnouncementTicker from "@/components/sections/AnnouncementTicker";
import FeaturedDevelopments from "@/components/sections/FeaturedDevelopments";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AnnouncementTicker />
      <FeaturedDevelopments />
    </div>
  );
}

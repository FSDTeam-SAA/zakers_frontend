import Banner from "../components/Banner";
import AdvisorProfile from "@/components/sections/home/AdvisorProfile";
import AnnouncementTicker from "@/components/sections/home/AnnouncementTicker";
import ClientStories from "@/components/sections/home/ClientStories";
import ComparePropertiesBanner from "@/components/sections/home/ComparePropertiesBanner";
import ConstructionStatus from "@/components/sections/home/ConstructionStatus";
import CtaBanner from "@/components/sections/home/CtaBanner";
import FeaturedDevelopments from "@/components/sections/home/FeaturedDevelopments";
import Neighborhoods from "@/components/sections/home/Neighborhood";
import WhyMiamiSection from "@/components/sections/home/WhyMiamiSection";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <AnnouncementTicker />
      <FeaturedDevelopments />
      <Neighborhoods />
      <ConstructionStatus />
      <ComparePropertiesBanner />
      <WhyMiamiSection />
      <AdvisorProfile />
      <ClientStories />
      <CtaBanner />
    </main>
  );
}

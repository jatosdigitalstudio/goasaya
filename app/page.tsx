import Head from "./head";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EventSection from "@/components/sections/EventSection";

export default function Home() {
  return (
    <>
     <Head 
        title="GOASAYA | Asian Progressive Dining Experience"
        description="Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience"
        url="https://www.goasaya.com"
        keywords="luxury restaurant, fine dining asia, cave restaurant, Michelin star experience, luxury dining Jakarta, Asian progressive cuisine, best fine dining restaurant"
        image="https://www.goasaya.com/logo/09.jpg"
      />

      <HeroSection/>
      <AboutSection/>
      <EventSection/>
    </>
  );
}

import { AboutUsSection } from "./sections/AboutUsSection";
import { CoreValuesSection } from "./sections/CoreValuesSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection";
import { IntroVideoSection } from "./sections/IntroVideoSection";
import { MissionStatementSection } from "./sections/MissionStatementSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ResponsibilitiesSection } from "./sections/ResponsibilitiesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { VisionStatementSection } from "./sections/VisionStatementSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full relative">
      <NavigationSection />
      <HeaderSection />
      <AboutUsSection />
      <MissionStatementSection />
      <VisionStatementSection />
      <CoreValuesSection />
      <ResponsibilitiesSection />
      <TeamSection />
      <TestimonialsSection />
      <GallerySection />
      <IntroVideoSection />
      <FaqSection />
      <FooterSection />
      <div className="fixed top-[842px] left-[1279px] w-[199px] h-[65px] flex z-50">
        <div className="w-[201px] h-[65px] relative">
          <img
            className="absolute top-0 left-0 w-16 h-[65px]"
            alt="Logos whatsapp icon"
            src="/figmaAssets/logos-whatsapp-icon.svg"
          />

          <div className="absolute top-[33px] left-[70px] w-[129px] h-8 bg-[#ffffff] rounded-xl shadow-[0px_4px_9px_#0000001a]" />

          <div className="absolute top-[37px] left-[84px] [font-family:'Poppins',Helvetica] font-medium text-[#ff5f00] text-base tracking-[0] leading-[normal]">
            Chat with us
          </div>
        </div>
      </div>
    </div>
  );
};

import { PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const IntroVideoSection = (): JSX.Element => {
  return (
    <section className="w-full h-[600px] flex bg-[url(/figmaAssets/bg.png)] bg-cover bg-center">
      <div className="flex items-center px-[53px] w-full">
        <div className="flex flex-col max-w-[565px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-5xl text-justify tracking-[0] leading-normal">
            Our&nbsp;&nbsp;Daily&nbsp;&nbsp;Life
          </h2>

          <p className="mt-[7px] ml-[3px] [font-family:'Poppins',Helvetica] font-medium text-white text-xl text-justify tracking-[0] leading-normal">
            Witness the daily journey of service and dedication.
            <br /> Where compassion turns into action every single day.
          </p>

          <Button className="mt-[34px] ml-[3px] w-[220px] h-[67px] bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-xl gap-2">
            <PlayIcon className="w-9 h-9 fill-white" />
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl tracking-[0] leading-normal">
              Watch Now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

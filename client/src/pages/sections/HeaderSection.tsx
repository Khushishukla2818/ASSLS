import { Button } from "@/components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="w-full h-[830px] flex relative">
      <div className="w-full h-full flex">
        <div className="flex-1 w-full relative [background:url(../figmaAssets/frame-17.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(187,83,83,1)_0%,rgba(187,83,83,1)_100%)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(181deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.81)_69%,rgba(0,0,0,1)_100%)]" />

          <div className="absolute top-[307px] left-[118px] [font-family:'Merriweather',Helvetica] font-bold text-[#ffffff] text-[64px] tracking-[0] leading-[normal]">
            Building Equitable Futures <br />
            in Our Country
          </div>

          <div className="absolute top-[510px] left-[118px] w-[813px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-2xl tracking-[0] leading-[normal]">
            A dedicated 12A, 80G, and FCRA certified partner. Transforming lives
            through innovative agriculture, healthcare, and inclusive community
            power.
          </div>

          <Button className="absolute top-[658px] left-[118px] bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-xl px-6 py-2.5 h-auto">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-[normal]">
              Partner with us
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

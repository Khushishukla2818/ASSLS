import { Button } from "@/components/ui/button";

export const MissionStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[648px] flex">
      <div className="w-full flex">
        <div className="w-full flex">
          <div className="w-full h-[648px] relative bg-[url(/figmaAssets/image-3.png)] bg-cover bg-[50%_50%]">
            <div className="absolute top-0 left-0 w-full h-[648px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.92)_100%)]" />

            <div className="absolute top-[71px] left-[98px] w-[242px] [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0] leading-[normal]">
              Our Mission
            </div>

            <div className="absolute top-32 left-[98px] w-[119px] h-[7px] bg-[#ff5f00] rounded-lg" />

            <img
              className="top-[167px] left-[913px] w-[502px] h-[314px] object-cover absolute rounded-xl"
              alt="Rectangle"
              src="/figmaAssets/rectangle-3-1.png"
            />

            <div className="absolute top-[167px] left-[98px] w-[776px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-2xl tracking-[0] leading-[normal]">
              ASSLS in its mission builds community power through equitable
              neighborhood development projects, programs that reduce inequality
              burdens and pioneering research initiatives that help light the
              way to futures for all. ASSLS has programs and projects in place
              in AP and telangana.
              <br /> <br />
              During these years ASSLS&apos;s entire team worked together to
              complete a new Strategic Plan that defines our goals, how
              we&apos;ll reach them, and how we&apos;ll measure our progress.
            </div>

            <Button className="absolute top-[523px] left-[98px] bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-xl h-auto px-2.5 py-2.5">
              <span className="font-medium text-[#ffffff] text-2xl leading-[normal] [font-family:'Poppins',Helvetica] tracking-[0]">
                Donate
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

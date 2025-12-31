import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex">
        <div className="w-full flex">
          <div className="w-full h-[590px] relative overflow-hidden bg-[url(/figmaAssets/image-3-1.png)] bg-cover bg-[50%_50%]">
            <div className="absolute top-0 left-0 w-full h-[648px] bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.92)_100%)]" />

            <h2 className="absolute top-[71px] left-[98px] w-[414px] [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0] leading-[normal]">
              Stay Connected
            </h2>

            <div className="absolute top-32 left-[98px] w-[119px] h-[7px] bg-[#ff5f00] rounded-lg" />

            <img
              className="top-[167px] left-[901px] w-[502px] h-[314px] object-cover absolute rounded-xl"
              alt="Rectangle"
              src="/figmaAssets/rectangle-3-2.png"
            />

            <p className="absolute top-[167px] left-[98px] w-[761px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-2xl tracking-[0] leading-9">
              By subscribing to our mailing list, you will receive regular
              updates about our programs, field activities, community impact
              stories, upcoming initiatives, and opportunities to support our
              mission. These updates offer a closer look at how collective
              efforts are creating real change at the grassroots level
            </p>

            <div className="absolute top-[409px] left-[98px] w-[433px] h-14 flex gap-2">
              <div className="w-80 h-14 flex bg-neutral-50 rounded-lg overflow-hidden border border-solid border-[#e3e3e3]">
                <Input
                  className="w-full h-full border-0 bg-transparent [font-family:'Epilogue',Helvetica] font-normal text-[#939393] text-sm tracking-[0] leading-[14px]"
                  placeholder="Input Email Address"
                />
              </div>

              <Button className="w-[105px] h-14 bg-[#ff5f00] rounded-lg hover:bg-[#ff5f00]/90 [font-family:'Epilogue',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-4">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

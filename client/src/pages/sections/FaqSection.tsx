import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqItems = [
  { id: "item-1", question: "Who does ASSLS work for?" },
  { id: "item-2", question: "Where does ASSLS operate?" },
  { id: "item-3", question: "How can I donate to ASSLS?" },
  { id: "item-4", question: "How can I support ASSLS?" },
  { id: "item-5", question: "How can organizations partner with ASSLS?" },
  { id: "item-6", question: "How can I contact ASSLS?" },
];

const detailsLinks = [{ label: "Location" }, { label: "Contact" }];

const mainLinks = [
  { label: "Home" },
  { label: "About" },
  { label: "Services" },
  { label: "Blog" },
];

const asslsLinks = [
  { label: "Gallery" },
  { label: "Donate" },
  { label: "Community" },
];

const socialIcons = [
  { src: "/figmaAssets/ellipse-3.png", alt: "Social icon 1" },
  { src: "/figmaAssets/ellipse-2.png", alt: "Social icon 2" },
  { src: "/figmaAssets/ellipse-1.png", alt: "Social icon 3" },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center bg-white">
      <div className="w-full max-w-[1512px] px-6 py-8">
        <h2 className="text-[56px] leading-[67.2px] tracking-[-0.28px] [font-family:'Poppins',Helvetica] font-bold mb-12">
          <span className="text-black">Have a question?</span>
          <br />
          <span className="text-[#ff8a41]">FAQ</span>
        </h2>

        <div className="max-w-[1216px] mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#f4f5f6]"
              >
                <AccordionTrigger className="px-6 py-8 hover:no-underline">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl text-left">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <footer className="w-full bg-white shadow-[-4px_-4px_70px_#00000014] pt-12 pb-16">
          <div className="max-w-[1512px] mx-auto px-6">
            <div className="flex flex-wrap justify-between gap-8 mb-12">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[157px] h-[123px]"
                    alt="ASSLS Logo"
                    src="/figmaAssets/image-1-1.png"
                  />
                  <div className="flex flex-col">
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-[#1709a2] text-[32px] leading-6">
                      ASSLS
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-medium text-[#20792b] text-xl leading-6 mt-4">
                      A Hope For Better Lives
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <p className="font-body-text-18px-regular font-[number:var(--body-text-18px-regular-font-weight)] text-[#2d2d2d] text-[length:var(--body-text-18px-regular-font-size)] tracking-[var(--body-text-18px-regular-letter-spacing)] leading-[var(--body-text-18px-regular-line-height)]">
                      Updates right to your Inbox
                    </p>
                    <div className="flex items-center gap-5">
                      <Input
                        className="w-80 h-[54px] rounded-[10px] border border-[#d0d0d0] font-body-text-18px-regular font-[number:var(--body-text-18px-regular-font-weight)] text-[#2d2d2d] text-[length:var(--body-text-18px-regular-font-size)] tracking-[var(--body-text-18px-regular-letter-spacing)] leading-[var(--body-text-18px-regular-line-height)] px-5"
                        placeholder="Email Address"
                      />
                      <Button className="w-[116px] h-[54px] bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-[10px] font-body-text-18px-regular font-[number:var(--body-text-18px-regular-font-weight)] text-white text-[length:var(--body-text-18px-regular-font-size)] tracking-[var(--body-text-18px-regular-letter-spacing)] leading-[var(--body-text-18px-regular-line-height)] transition-all duration-200">
                        Send
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-[30px]">
                    <div className="flex items-center gap-[5px]">
                      <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#2d2d2d] text-lg leading-[18px]">
                        ©
                      </span>
                      <span className="font-secondary-body-text-title-18px-semibold font-[number:var(--secondary-body-text-title-18px-semibold-font-weight)] text-[#2d2d2d] text-[length:var(--secondary-body-text-title-18px-semibold-font-size)] tracking-[var(--secondary-body-text-title-18px-semibold-letter-spacing)] leading-[var(--secondary-body-text-title-18px-semibold-line-height)]">
                        ASSLS 2025
                      </span>
                    </div>
                    <a
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#2d2d2d] text-lg leading-8 hover:underline"
                    >
                      Privacy policy
                    </a>
                    <a
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#2d2d2d] text-lg leading-8 hover:underline"
                    >
                      Refund Policy
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-[68px]">
                <nav className="flex flex-col gap-4">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2d2d2d] text-lg leading-6">
                    Details
                  </h3>
                  {detailsLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-normal text-[#2d2d2d] text-lg leading-6 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <nav className="flex flex-col gap-4">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2d2d2d] text-lg leading-6">
                    Links
                  </h3>
                  {mainLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-normal text-[#2d2d2d] text-lg leading-6 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <nav className="flex flex-col gap-4">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2d2d2d] text-lg leading-6">
                    ASSLS
                  </h3>
                  {asslsLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-normal text-[#2d2d2d] text-lg leading-6 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col items-center gap-4">
                <img
                  className="w-[126px] h-[126px]"
                  alt="QR code for donations"
                  src="/figmaAssets/bi-qr-code.svg"
                />
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#2d2d2d] text-2xl">
                  Scan to donate
                </p>
                <div className="flex gap-3 mt-8">
                  {socialIcons.map((icon, index) => (
                    <a key={index} href="#" className="block">
                      <img
                        className="w-[53px] h-[53px] object-cover"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

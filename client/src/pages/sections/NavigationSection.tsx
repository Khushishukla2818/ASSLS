import { Button } from "@/components/ui/button";

const navigationLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About us", href: "/about", active: false },
  { label: "Services", href: "/services", active: false },
  { label: "Contact us", href: "/", active: false },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <header className="w-full flex justify-center bg-white shadow-[0px_4px_12px_4px_#0000001a]">
      <nav className="w-full max-w-[1512px] h-28 flex items-center justify-between px-[102px]">
        <img
          className="w-[69px] h-[76px] object-cover"
          alt="Logo"
          src="/figmaAssets/image-1.png"
        />

        <div className="flex items-center gap-[42px] relative">
          {navigationLinks.map((link, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <a
                href={link.href}
                className={`[font-family:'Poppins',Helvetica] text-2xl tracking-[0] leading-[normal] ${
                  link.active
                    ? "font-medium text-[#ff5f00]"
                    : "font-normal text-[#4a4a4a]"
                }`}
              >
                {link.label}
              </a>
              {link.active && (
                <div className="absolute top-[33px] w-[54px] h-1 bg-[#ff5f00] rounded-lg" />
              )}
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="h-auto px-4 py-0 rounded-xl border-[#ff5f00] hover:bg-transparent"
        >
          <div className="inline-flex items-center justify-center gap-2.5 p-2.5">
            <span className="font-medium text-[#ff5f00] text-2xl leading-[normal] [font-family:'Poppins',Helvetica] tracking-[0]">
              Donate
            </span>
          </div>
        </Button>
      </nav>
    </header>
  );
};

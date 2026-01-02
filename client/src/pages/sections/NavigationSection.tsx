import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export const NavigationSection = (): JSX.Element => {
  const [location] = useLocation();

  return (
    <header className="w-full flex justify-center bg-white shadow-[0px_4px_12px_4px_#0000001a]">
      <nav className="w-full max-w-[1512px] h-28 flex items-center justify-between px-[102px]">
        <img
          className="w-[69px] h-[76px] object-cover cursor-pointer"
          alt="Logo"
          src="/figmaAssets/image-1.png"
          onClick={() => window.location.href = "/"}
        />

        <div className="flex items-center gap-[42px] relative">
          {navigationLinks.map((link, index) => {
            const isActive = location === link.href;
            return (
              <div key={index} className="relative flex flex-col items-center">
                <a
                  href={link.href}
                  className={`[font-family:'Poppins',Helvetica] text-2xl tracking-[0] leading-[normal] transition-colors hover:text-[#ff5f00] ${
                    isActive
                      ? "font-medium text-[#ff5f00]"
                      : "font-normal text-[#4a4a4a]"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <div className="absolute top-[33px] w-full h-1 bg-[#ff5f00] rounded-lg" />
                )}
              </div>
            );
          })}
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

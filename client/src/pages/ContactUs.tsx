import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SuccessModal } from "@/components/SuccessModal";

export const ContactUs = (): JSX.Element => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="bg-[#ffffff] overflow-hidden w-full relative font-['Poppins',_Helvetica]">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      {/* Top Info Bar */}
      <div className="w-full flex justify-center bg-white border-b border-[#e9ecef]">
        <div className="w-full max-w-[1512px] h-[45px] flex items-center justify-between px-[102px]">
          <div className="flex gap-[15px] items-center">
             <div className="flex items-center gap-2">
              <img src="/figmaAssets/phone-icon.svg" alt="Phone" className="w-4 h-4" />
              <span className="text-[#ff5f00] text-sm font-medium tracking-[0] leading-[normal]">(+91) 995-945-2342</span>
            </div>
            <div className="w-[1px] h-3 bg-gray-300 mx-2" />
            <div className="flex items-center gap-2">
              <img src="/figmaAssets/email-icon.svg" alt="Email" className="w-4 h-4" />
              <span className="text-[#ff5f00] text-sm font-medium tracking-[0] leading-[normal]">ceo@assls.in</span>
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <img src="/figmaAssets/logos-youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
            <img src="/figmaAssets/logos-instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
            <img src="/figmaAssets/logos-facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="w-full flex justify-center bg-white">
        <nav className="w-full max-w-[1512px] h-28 flex items-center justify-between px-[102px]">
          <div className="flex items-center gap-4">
            <img className="w-[69px] h-[76px] object-cover" alt="Logo" src="/figmaAssets/image-1.png" />
            <div className="flex flex-col">
              <span className="font-bold text-[#111111] text-3xl leading-none tracking-tight">ASSLS</span>
              <span className="text-[#05cd99] text-[10px] font-black uppercase tracking-[0.2em] mt-1">A Hope For Better Lives</span>
            </div>
          </div>
          <div className="flex items-center gap-[42px] relative">
            <a href="/" className="font-normal text-[#4a4a4a] text-2xl tracking-[0] leading-[normal]">Home</a>
            <a href="/about" className="font-normal text-[#4a4a4a] text-2xl tracking-[0] leading-[normal]">About us</a>
            <a href="/services" className="font-normal text-[#4a4a4a] text-2xl tracking-[0] leading-[normal]">Services</a>
            <a href="#" className="font-normal text-[#4a4a4a] text-2xl tracking-[0] leading-[normal]">Blog</a>
            <div className="relative flex flex-col items-center">
              <a href="/contact" className="font-medium text-[#ff5f00] text-2xl tracking-[0] leading-[normal]">Contact us</a>
              <div className="absolute top-[33px] w-full h-[3px] bg-[#ff5f00] rounded-full" />
            </div>
          </div>
          <Button variant="outline" className="h-auto px-10 py-3 rounded-xl border-[#ff5f00] text-[#ff5f00] font-bold hover:bg-transparent text-2xl">
            Donate
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-[1512px] mx-auto px-[102px] pt-[80px] pb-[100px]">
        <div className="text-center mb-[80px]">
          <h1 className="font-['Yellowtail',_cursive] font-normal text-[#ff5f00] text-[64px] tracking-[0] leading-[normal] mb-4">
            Get In Touch With Us
          </h1>
          <p className="max-w-[830px] mx-auto font-normal text-[#4a4a4a] text-lg tracking-[0] leading-[27px] opacity-70">
            For More Information About Our Services, Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="w-full flex gap-[84px]">
          {/* Left: Photos */}
          <div className="flex-1 relative flex flex-col gap-6">
             <div className="flex gap-6 items-start">
                <div className="w-[240px] aspect-[4/5] rounded-[15px] overflow-hidden shadow-md">
                   <img src="/figmaAssets/rectangle-5.png" alt="Detail 1" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6 pt-12">
                   <div className="w-[180px] aspect-square rounded-[15px] overflow-hidden shadow-md">
                      <img src="/figmaAssets/rectangle-3-1.png" alt="Detail 2" className="w-full h-full object-cover" />
                   </div>
                   <div className="w-[180px] aspect-square rounded-[15px] overflow-hidden shadow-md">
                      <img src="/figmaAssets/rectangle-22593.png" alt="Detail 3" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
             <div className="w-[240px] aspect-[4/3] rounded-[15px] overflow-hidden shadow-md -mt-12">
                 <img src="/figmaAssets/placeholder---image-1.png" alt="Detail 4" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 space-y-[33px] text-left">
            <div className="space-y-[15px]">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Name</label>
              <Input className="h-[65px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] text-base" placeholder="Enter Your Name" />
            </div>
            <div className="space-y-[15px]">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Mobile</label>
              <Input className="h-[65px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] text-base" placeholder="Enter Mobile Number" />
            </div>
            <div className="space-y-[15px]">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Email</label>
              <Input className="h-[65px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] text-base" placeholder="Enter E - Mail ID" />
            </div>
            <div className="space-y-[15px] relative">
              <label className="font-medium text-[#111111] text-lg tracking-[0] leading-[normal]">Message</label>
              <Textarea className="min-h-[148px] bg-white border border-[#e3e3e3] rounded-xl px-[25px] py-[20px] text-base resize-none" placeholder="Enter Text" />
              
              {/* WhatsApp - Absolute positioned to the right of the form */}
              <div className="absolute right-[-140px] bottom-[30px] flex items-center gap-2 group cursor-pointer z-20">
                <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-[50px] h-[50px]" />
                <div className="bg-white px-3 py-1 rounded shadow-md border border-gray-100">
                   <span className="text-[#ff5f00] text-[10px] font-bold whitespace-nowrap">Chat with us</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => setShowSuccess(true)}
              className="w-full h-[65px] bg-[#ff5f00] hover:bg-[#ff5f00]/90 rounded-xl font-bold text-white text-base"
            >
              Submit
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full flex justify-center py-[100px] bg-white">
        <div className="w-full max-w-[1512px] flex px-[102px] gap-[100px]">
          <div className="flex-1 h-[482px] rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1!2d79.1!3d15.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTV_MDcnMjQuNCJOIDc5XzA3JzI0LjQiRQ!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-[45px]">
            <div>
              <h3 className="font-bold text-[#ff5f00] text-3xl mb-4">Location</h3>
              <p className="font-normal text-[#4a4a4a] text-lg leading-[32px]">
                3-11, Yenuguladinnepadu Village,<br />
                Chatlamitla Post, Thokapalli Sub<br />
                Post Office, Peddaraveedu<br />
                Mandal, Andhra Pradesh, India
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#ff5f00] text-3xl mb-2">Call To Us</h3>
              <p className="font-normal text-[#4a4a4a] text-sm opacity-50 uppercase tracking-[0.2em] mb-4">
                We are available 24/7, 7 days a week
              </p>
              <div className="font-normal text-[#4a4a4a] text-xl space-y-2">
                <p>(+91) 99594 52342</p>
                <p>(+91) 81427 32207</p>
                <p>(+91) 63006 78500</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#ff5f00] text-3xl mb-4">Write To Us</h3>
              <div className="font-normal text-[#4a4a4a] text-xl space-y-2">
                <p>ceo@assls.in</p>
                <p>programs@assls.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center bg-white pt-[100px] pb-[45px] border-t">
        <div className="w-full max-w-[1512px] px-[102px] flex justify-between mb-[95px]">
          <div className="max-w-[342px] space-y-[35px]">
            <div className="flex items-center gap-[15px]">
              <img className="w-[69px] h-[76px] object-cover" alt="Logo" src="/figmaAssets/image-1.png" />
              <div className="flex flex-col">
                <span className="font-bold text-[#111111] text-[35px] leading-none">ASSLS</span>
                <span className="font-black text-[#05cd99] text-[10px] uppercase tracking-[0.2em]">A Hope For Better Lives</span>
              </div>
            </div>
            <div className="space-y-[15px]">
              <p className="font-bold text-[#4a4a4a] text-lg">Updates right to your Inbox</p>
              <div className="flex gap-2.5">
                <Input className="h-14 bg-[#f8f9fa] border-0 rounded-lg px-[22px]" placeholder="Email Address" />
                <Button className="w-[105px] h-14 bg-[#ff5f00] rounded-lg">Send</Button>
              </div>
            </div>
          </div>

          <div className="flex gap-[100px]">
            <div className="space-y-[33px]">
              <h4 className="font-bold text-[#111111] text-lg uppercase tracking-[0.2em]">Details</h4>
              <div className="flex flex-col gap-[22px] font-normal text-[#4a4a4a] text-lg opacity-70">
                <a href="#">Location</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="space-y-[33px]">
              <h4 className="font-bold text-[#111111] text-lg uppercase tracking-[0.2em]">Links</h4>
              <div className="flex flex-col gap-[22px] font-normal text-[#4a4a4a] text-lg opacity-70">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="space-y-[33px] flex flex-col items-center">
              <h4 className="font-bold text-[#111111] text-lg uppercase tracking-[0.2em]">ASSLS</h4>
              <div className="flex flex-col gap-[22px] font-normal text-[#4a4a4a] text-lg opacity-70">
                <a href="#">Gallery</a>
                <a href="#">Donate</a>
                <a href="#">Community</a>
              </div>
              <div className="mt-8 flex flex-col items-center gap-[15px]">
                 <div className="p-4 border border-[#e3e3e3] rounded-[32px] shadow-sm">
                  <img src="/figmaAssets/bi-qr-code.svg" alt="QR Code" className="w-[120px] h-[120px]" />
                </div>
                <span className="font-black text-[#e3e3e3] text-[10px] uppercase tracking-[0.4em]">Scan to donate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1512px] px-[102px] pt-[45px] border-t border-[#e3e3e3] flex justify-between items-center">
          <div className="flex gap-[55px] font-black text-[#4a4a4a] text-sm uppercase tracking-[0.2em] opacity-50">
            <span>© ASSLS 2025</span>
            <a href="#">Privacy policy</a>
            <a href="#">Refund Policy</a>
          </div>
          <div className="flex gap-[33px] items-center">
            <img src="/figmaAssets/logos-youtube-icon.svg" className="w-8 h-8" />
            <img src="/figmaAssets/logos-instagram-icon.svg" className="w-8 h-8" />
            <img src="/figmaAssets/logos-facebook-icon.svg" className="w-8 h-8" />
          </div>
        </div>
      </footer>
    </div>
  );
};

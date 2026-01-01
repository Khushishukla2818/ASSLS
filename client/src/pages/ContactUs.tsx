import { NavigationSection } from "./sections/NavigationSection";

export const ContactUs = (): JSX.Element => {
  return (
    <div className="w-full bg-white font-sans">
      {/* Top Info Bar */}
      <div className="bg-gray-50 py-2 px-4 md:px-8 lg:px-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium text-gray-500">
          <div className="flex gap-6">
            <span>(+91) 81427 32207</span>
            <span>ceo@assls.in</span>
          </div>
          <div className="flex gap-4">
            <img src="/figmaAssets/image-5.png" alt="YouTube" className="w-4 h-4 opacity-60" />
            <img src="/figmaAssets/image-6.png" alt="Instagram" className="w-4 h-4 opacity-60" />
            <img src="/figmaAssets/image-7.png" alt="Facebook" className="w-4 h-4 opacity-60" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/figmaAssets/image-1.png" alt="ASSLS Logo" className="h-16" />
          <nav className="flex gap-8">
            <a href="/" className="text-gray-700 hover:text-orange-500 font-medium text-lg">Home</a>
            <a href="/about" className="text-gray-700 hover:text-orange-500 font-medium text-lg">About us</a>
            <a href="/services" className="text-gray-700 hover:text-orange-500 font-medium text-lg">Services</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium text-lg">Blog</a>
            <a href="/contact" className="text-[#ff5f00] font-bold border-b-4 border-[#ff5f00] pb-1 text-lg">Contact us</a>
          </nav>
          <button className="border-2 border-[#ff5f00] text-[#ff5f00] px-8 py-2 rounded-xl font-bold hover:bg-orange-50 transition text-lg">Donate</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-6xl font-serif italic text-[#ff5f00] font-medium">Get In Touch With Us</h1>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
          For More Information About Our Services, Please Feel Free To Drop Us An Email.<br />
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-[32px] h-80" />
            <div className="rounded-[32px] overflow-hidden h-64 mt-12 shadow-xl">
              <img src="/figmaAssets/placeholder---image-1.png" alt="Contact" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[32px] overflow-hidden h-48 -mt-12 shadow-xl">
              <img src="/figmaAssets/placeholder---image-8.png" alt="Contact" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8 text-left">
            <div className="space-y-2">
              <label className="block text-xl font-bold text-gray-900">Name</label>
              <input type="text" placeholder="Enter Your Name" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-lg focus:ring-4 focus:ring-orange-100 focus:border-[#ff5f00] transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="block text-xl font-bold text-gray-900">Mobile</label>
              <input type="text" placeholder="Enter Mobile Number" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-lg focus:ring-4 focus:ring-orange-100 focus:border-[#ff5f00] transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="block text-xl font-bold text-gray-900">Email</label>
              <input type="email" placeholder="Enter E - Mail ID" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-lg focus:ring-4 focus:ring-orange-100 focus:border-[#ff5f00] transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="block text-xl font-bold text-gray-900">Message</label>
              <textarea placeholder="Enter Text" rows={4} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-lg focus:ring-4 focus:ring-orange-100 focus:border-[#ff5f00] transition-all outline-none resize-none" />
            </div>
            <button className="w-full bg-[#ff5f00] text-white py-5 rounded-2xl font-bold text-2xl shadow-2xl shadow-orange-100 hover:bg-[#e65500] transition-all transform hover:-translate-y-1">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Map & Details Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[48px] overflow-hidden shadow-2xl h-[500px] border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.123456789!2d79.123456789!3d15.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTV_MDcnMjQuNCJOIDc5XzA3JzI0LjQiRQ!5e0!3m2!1sen!2sin!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            />
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#ff5f00]">Location</h3>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                3-11, Yenuguladinnepadu Village,<br />
                Chatlamitla Post, Thokapalli Sub<br />
                Post Office, Peddaraveedu<br />
                Mandal, Andhra Pradesh, India
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#ff5f00]">Call To Us</h3>
              <p className="text-gray-400 text-sm font-black uppercase tracking-widest">We are available 24/7, 7 days a week</p>
              <div className="text-xl text-gray-600 font-bold space-y-1">
                <p>(+91) 99594 52342</p>
                <p>(+91) 81427 32207</p>
                <p>(+91) 63006 78500</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#ff5f00]">Write To Us</h3>
              <div className="text-xl text-gray-600 font-bold space-y-1">
                <p>ceo@assls.in</p>
                <p>programs@assls.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 px-4 md:px-8 lg:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center gap-5">
                <img src="/figmaAssets/image-1.png" alt="ASSLS Logo" className="h-20" />
                <div>
                  <h4 className="font-bold text-3xl text-[#111111] tracking-tighter leading-none">ASSLS</h4>
                  <p className="text-[#05CD99] text-xs font-black uppercase tracking-[0.2em] mt-1">A Hope For Better Lives</p>
                </div>
              </div>
              <div className="space-y-6 max-w-md">
                <p className="text-gray-600 font-bold text-lg">Updates right to your Inbox</p>
                <div className="flex gap-3">
                  <input type="email" placeholder="Email Address" className="flex-1 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-lg focus:ring-4 focus:ring-orange-100 focus:border-[#ff5f00] transition-all outline-none" />
                  <button className="bg-[#ff5f00] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#e65500] transition-all shadow-xl shadow-orange-100">Send</button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="font-bold text-xl text-[#111111] uppercase tracking-widest">Details</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-lg">
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Location</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-bold text-xl text-[#111111] uppercase tracking-widest">Links</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-lg">
                <li><a href="/" className="hover:text-[#ff5f00] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#ff5f00] transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-[#ff5f00] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Blog</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-bold text-xl text-[#111111] uppercase tracking-widest">ASSLS</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-lg">
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-[#ff5f00] transition-colors">Community</a></li>
              </ul>
              <div className="pt-8 flex flex-col items-center gap-4">
                <div className="p-4 border-2 border-gray-50 rounded-[32px] shadow-2xl">
                  <img src="/figmaAssets/bi-qr-code.svg" alt="QR Code" className="w-28 h-28" />
                </div>
                <span className="text-xs font-black text-gray-300 uppercase tracking-[0.3em]">Scan to donate</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-50 gap-8">
            <div className="flex items-center gap-10 text-sm font-black text-gray-300 uppercase tracking-widest">
              <span>© ASSLS 2025</span>
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Refund Policy</a>
            </div>
            <div className="flex gap-8">
              <a href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-red-50 transition-all group shadow-sm hover:shadow-md">
                <img src="/figmaAssets/image-5.png" alt="YouTube" className="w-7 h-7 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-pink-50 transition-all group shadow-sm hover:shadow-md">
                <img src="/figmaAssets/image-6.png" alt="Instagram" className="w-7 h-7 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-blue-50 transition-all group shadow-sm hover:shadow-md">
                <img src="/figmaAssets/image-7.png" alt="Facebook" className="w-7 h-7 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3 z-50 group">
        <div className="bg-white px-4 py-2 rounded-xl shadow-lg text-gray-800 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</div>
        <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-16 h-16 cursor-pointer hover:scale-110 active:scale-95 transition-all" />
      </div>
    </div>
  );
};

export const AboutUs = (): JSX.Element => {
  const coreValues = [
    {
      title: "Service & Equity",
      description: "To serve is the choosiest of choices. We believe different views and experiences are advantages, so we strive to ensure everyone has a seat and voice at the table built by all."
    },
    {
      title: "Transformative",
      description: "We are smart, adaptable, learn from our mistakes, and are willing to be the first to try new things."
    },
    {
      title: "Integrity & Excellence",
      description: "We uphold the values of ASSLS in every action and decision. We believe in what we are doing, thus we value hard work and persistence to offer our best."
    },
    {
      title: "Respect & Support",
      description: "Everyone matters. We work with exceptional people who do exceptional things. We are committed to building an encouraging, caring, and supportive environment."
    }
  ];

  const sections = [
    {
      id: "our-story",
      title: "Our Story",
      description: "ASSLS (Adukondamu S/ST Labor Society) is a non-profit organization founded in 2005 to support farmers and vulnerable communities in rural Andhra Pradesh. We work closely with communities to improve livelihoods, health, education, and social well-being.\n\nOur programs focus on agriculture development, women empowerment, youth support, and healthcare initiatives. We also promote environmental protection, nutrition awareness, and HIV/AIDS prevention. Through community participation and partnerships, ASSLS strives to create sustainable and inclusive change.",
      image: "/figmaAssets/placeholder---image-9.png",
      imagePosition: "left"
    },
    {
      id: "our-vision",
      title: "Our Vision",
      description: "Our vision is to build strong, self-reliant, and inclusive communities where every individual lives with dignity and opportunity. We envision a future where farmers, women, children, and vulnerable groups have equal access to livelihoods, health, and education.\n\nThrough sustainable agriculture, environmental care, and social equity, we strive to create long-lasting positive change. ASSLS believes in community-led growth that nurtures resilience, well-being, and hope for generations to come.",
      image: "/figmaAssets/placeholder---image-10.png",
      imagePosition: "right"
    },
    {
      id: "our-mission",
      title: "Our Mission",
      description: "Our mission is to work alongside communities to improve livelihoods, health, education, and social well-being. We focus on empowering farmers, women, youth, and vulnerable groups through inclusive development programs.\n\nBy promoting sustainable agriculture, skill development, and health awareness, we address real community needs. Through participation, partnerships, and responsible action, ASSLS strives to create lasting and meaningful change.",
      image: "/figmaAssets/rectangle-10.png",
      imagePosition: "left"
    }
  ];

  const services = [
    {
      title: "Farmer Welfare & Sustainable Agriculture",
      description: "Supporting farmers through training, innovation, and awareness programs to improve agricultural practices, income stability, and climate resilience.",
      image: "/figmaAssets/rectangle-5.png"
    },
    {
      title: "Women Empowerment & Skill Development",
      description: "Empowering women through vocational training, livelihood programs, and capacity-building initiatives that promote financial independence and social equality.",
      image: "/figmaAssets/rectangle-6.png"
    },
    {
      title: "Youth & Adolescent Development",
      description: "Providing education support, life skills training, and awareness programs to help adolescents and youth build confidence, knowledge, and future opportunities.",
      image: "/figmaAssets/rectangle-7.png"
    },
    {
      title: "Health Care & Medical Support",
      description: "Organizing medical camps, eye care programs, nutrition awareness, and health education to improve access to quality healthcare in rural communities.",
      image: "/figmaAssets/rectangle-8.png"
    },
    {
      title: "Community Awareness & Social Rights",
      description: "Creating awareness on sanitation, hygiene, drinking water, government schemes, and social rights through community-based education and engagement.",
      image: "/figmaAssets/rectangle-22578.png"
    },
    {
      title: "Environmental Protection & Biodiversity",
      description: "Promoting plantation drives, biodiversity conservation, ecosystem restoration, and environmental awareness to protect natural resources and village habitats.",
      image: "/figmaAssets/rectangle-22580.png"
    },
    {
      title: "Livelihood Promotion & Income Generation",
      description: "Supporting self-sustaining ventures through skill training, employment generation, and livelihood development programs for vulnerable groups.",
      image: "/figmaAssets/rectangle-22581.png"
    },
    {
      title: "HIV/AIDS Prevention, Care & Support",
      description: "Conducting awareness programs, community outreach, counseling, and rehabilitation support for HIV-affected and at-risk populations.",
      image: "/figmaAssets/rectangle-22582.png"
    },
    {
      title: "Research, Training & Policy Advocacy",
      description: "Conducting research studies, training programs, and policy advocacy to address issues related to agriculture, livelihoods, and community development.",
      image: "/figmaAssets/rectangle-22584.png"
    },
    {
      title: "Community Mobilization & Capacity Building",
      description: "Strengthening community institutions, volunteers, and local leadership through training, collaboration, and participatory development approaches.",
      image: "/figmaAssets/rectangle-22585.png"
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/figmaAssets/image-1.png" alt="ASSLS Logo" className="h-16" />
          <nav className="flex gap-8">
            <a href="/" className="text-gray-700 hover:text-[#ff5f00] font-medium text-lg">Home</a>
            <a href="/about" className="text-[#ff5f00] font-bold border-b-4 border-[#ff5f00] pb-1 text-lg">About us</a>
            <a href="/services" className="text-gray-700 hover:text-[#ff5f00] font-medium text-lg">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-[#ff5f00] font-medium text-lg">Contact us</a>
          </nav>
          <button className="border-2 border-[#ff5f00] text-[#ff5f00] px-8 py-2 rounded-xl font-bold hover:bg-orange-50 transition text-lg">Donate</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-20">
            <h1 className="text-7xl font-bold text-gray-900 leading-[1.1] tracking-tighter">Strengthening lives by strengthening communities.</h1>
            
            <div className="flex gap-20">
              <div>
                <div className="text-6xl font-bold text-[#ff5f00]">10M+</div>
                <div className="text-gray-400 text-xs mt-3 font-black uppercase tracking-[0.2em]">Donation Received</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-[#ff5f00]">100+</div>
                <div className="text-gray-400 text-xs mt-3 font-black uppercase tracking-[0.2em]">Volunteers</div>
              </div>
              <div>
                <div className="text-6xl font-bold text-[#ff5f00]">10+</div>
                <div className="text-gray-400 text-xs mt-3 font-black uppercase tracking-[0.2em]">Care homes</div>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <button className="bg-[#ff5f00] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#e65500] transition-all shadow-2xl shadow-orange-100 transform hover:-translate-y-1 text-xl">
                Donate Now
              </button>
              <a href="#" className="text-gray-900 underline font-black decoration-4 underline-offset-8 hover:text-[#ff5f00] transition-all text-xl">Join community</a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="rounded-[40px] overflow-hidden h-72 shadow-2xl">
              <img src="/figmaAssets/placeholder---image-1.png" alt="Community" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[40px] overflow-hidden h-52 mt-12 shadow-2xl">
              <img src="/figmaAssets/placeholder---image-4.png" alt="Handicraft" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[40px] overflow-hidden h-52 -mt-12 shadow-2xl">
              <img src="/figmaAssets/placeholder---image-6.png" alt="Women" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[40px] overflow-hidden h-72 shadow-2xl">
              <img src="/figmaAssets/placeholder---image-7.png" alt="Farming" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[40px] overflow-hidden h-52 col-span-2 shadow-2xl mt-4">
              <img src="/figmaAssets/placeholder---image-8.png" alt="Gathering" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Divider */}
      <div className="my-32 max-w-7xl mx-auto px-4">
        <div className="border-t-8 border-[#ff5f00] pt-16 text-center">
          <h2 className="text-6xl font-serif italic text-[#ff5f00] font-medium tracking-tight">Who We Are</h2>
        </div>
      </div>

      {/* Who We Are Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-12">
        <p className="text-2xl text-gray-700 leading-relaxed font-light">
          The <span className="font-bold text-gray-900">ASSLS (AADUKONDAMU SC/ST LABOR SOCIETY)</span> was formed under the aegis of Mr. Prabhu Dasu in the year 2005 with Regd. No 357 / 2005, under society's registration act 35 of 2001 to raise most up-to-date voices, ideas and solutions in the development context. The structure upgrades the voices of individuals performing transformative work in their communities and finding workable solutions to important challenges.
        </p>
        <p className="text-2xl text-gray-700 leading-relaxed font-light">
          We believe that solutions come from communities on the frontlines of these challenges, and solutions come from art, culture, and actions derived from people who are stepping up in the communities where they live and work. The ASSLS shines a light on these leaders and creates a space for them to tell their stories, their own way.
        </p>
      </section>

      {/* Story, Vision, Mission Sections */}
      <div className="space-y-48 my-48">
        {sections.map((section, idx) => (
          <section key={idx} className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <h2 className="text-5xl font-serif italic text-[#ff5f00] mb-20 text-center font-medium">{section.title}</h2>
            <div className={`flex flex-col ${section.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
              <div className="flex-1 space-y-10">
                {section.description.split('\n\n').map((p, i) => (
                  <p key={i} className="text-xl text-gray-700 leading-relaxed font-light">{p}</p>
                ))}
              </div>
              <div className="lg:w-1/2 rounded-[48px] overflow-hidden shadow-2xl">
                <img src={section.image} alt={section.title} className="w-full aspect-video object-cover" />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Core Values */}
      <section className="py-40 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif italic text-[#ff5f00] mb-24 text-center font-medium">Core Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              {coreValues.map((value, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xl font-light">{value.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[48px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]">
              <img src="/figmaAssets/rectangle-22586.png" alt="Core Values" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-40 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif italic text-[#ff5f00] mb-24 text-center font-medium">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col">
              <div className="h-72 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10 space-y-6 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-black uppercase tracking-wider">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-40 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif italic text-[#ff5f00] mb-8 text-center font-medium">Executive Committee</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-24 font-black uppercase tracking-[0.3em] text-[10px]">
            Our Executive Committee brings together experienced leaders dedicated to guiding ASSLS with integrity and purpose.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-48">
            {[
              { name: "Mr. Prabhu Dasu", role: "President", img: "/figmaAssets/image-3.png" },
              { name: "Mr. Lorem", role: "Vice President" },
              { name: "Mr. Ipsum", role: "Secretary" },
              { name: "Mrs. Lorem", role: "Joint Secretary" },
              { name: "Mrs. Ipsum", role: "Treasurer" }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="aspect-[3/4] rounded-[32px] bg-gray-200 mb-8 overflow-hidden shadow-inner group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  {member.img && <img src={member.img} alt={member.name} className="w-full h-full object-cover" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#ff5f00] font-black text-xs uppercase tracking-[0.2em] mt-2">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-[#111111] text-white rounded-[48px] p-20 flex flex-col lg:flex-row gap-20 items-center shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5f00]/10 rounded-full -mr-48 -mt-48 blur-[120px]"></div>
            <div className="w-64 h-64 rounded-[40px] overflow-hidden flex-shrink-0 border-8 border-[#05CD99] shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <img src="/figmaAssets/image-3.png" alt="Mr. Prabhu Dasu" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-10 relative">
              <p className="text-4xl font-serif italic leading-relaxed text-gray-100 font-light">
                "True change begins when communities come together with purpose and compassion. Every small effort, when guided by unity and responsibility, can create lasting impact. At ASSLS, we believe in empowering people to shape their own future with dignity."
              </p>
              <div className="pt-6 border-t border-white/10 w-fit">
                <p className="text-3xl font-bold tracking-tight">Mr. Prabhu Dasu</p>
                <p className="text-[#ff5f00] font-black uppercase tracking-[0.3em] text-xs mt-2">Founder ASSLS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-40 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-6xl font-serif italic text-[#ff5f00] mb-24 text-center font-medium">Partners & Collaborations</h2>
        <div className="flex justify-center items-center gap-24 flex-wrap opacity-50 hover:opacity-100 transition-opacity duration-700">
          <img src="/figmaAssets/image-1-1.png" alt="Partner" className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          <img src="/figmaAssets/image-3-1.png" alt="Partner" className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          {["Partner", "Partner", "Partner"].map((p, i) => (
            <div key={i} className="h-20 px-14 bg-gray-50 rounded-3xl flex items-center text-gray-300 font-black uppercase tracking-[0.4em] text-[10px] border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-500 cursor-default">{p}</div>
          ))}
        </div>
      </section>

      {/* CTA & Footer copied from Services for perfect consistency */}
      <section className="mt-32 relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/figmaAssets/placeholder---image.png" alt="Community" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center text-white space-y-12 px-4 max-w-4xl">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight">Together, We Can Create Change</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-[#ff5f00] hover:bg-[#e65500] text-white px-12 py-5 rounded-2xl font-bold transition-all text-xl shadow-2xl shadow-orange-900/40 transform hover:-translate-y-1">
              Join our Community
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 rounded-2xl font-bold transition-all text-xl shadow-2xl transform hover:-translate-y-1">
              Donate
            </button>
          </div>
        </div>
      </section>

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
      <div className="fixed bottom-8 right-8 flex items-center gap-3 z-50">
        <div className="bg-white px-4 py-2 rounded-xl shadow-lg text-gray-800 font-medium text-sm">Chat with us</div>
        <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-16 h-16" />
      </div>
    </div>
  );
};

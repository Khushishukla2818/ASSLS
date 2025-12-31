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
    <div className="w-full bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/figmaAssets/image-1.png" alt="ASSLS Logo" className="h-16" />
          <nav className="flex gap-8">
            <a href="/" className="text-gray-700 hover:text-orange-500">Home</a>
            <a href="/about" className="text-orange-500 font-medium border-b-4 border-orange-500 pb-2">About us</a>
            <a href="/services" className="text-gray-700 hover:text-orange-500">Services</a>
            <a href="/" className="text-gray-700 hover:text-orange-500">Contact us</a>
          </nav>
          <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-medium">Donate</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-16 leading-tight">Strengthening lives by strengthening communities.</h1>
            
            <div className="flex gap-20 mb-12">
              <div>
                <div className="text-5xl font-bold text-orange-500">10M+</div>
                <div className="text-gray-700 text-base mt-2">Donation Received</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-500">100+</div>
                <div className="text-gray-700 text-base mt-2">Volunteers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-orange-500">10+</div>
                <div className="text-gray-700 text-base mt-2">Care homes</div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition">
                Donate Now
              </button>
              <a href="#" className="text-gray-700 underline font-medium">Join community</a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-max">
            <div className="rounded-2xl overflow-hidden h-64">
              <img src="/figmaAssets/placeholder---image-1.png" alt="Community" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 mt-8">
              <img src="/figmaAssets/placeholder---image-4.png" alt="Handicraft" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="/figmaAssets/placeholder---image-6.png" alt="Women" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-64">
              <img src="/figmaAssets/placeholder---image-7.png" alt="Farming" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 col-span-2">
              <img src="/figmaAssets/placeholder---image-8.png" alt="Community gathering" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider with "Who We Are" */}
      <div className="my-12 border-t-4 border-orange-500 py-8 text-center">
        <h2 className="text-4xl font-serif italic text-orange-500">Who We Are</h2>
      </div>

      {/* Who We Are Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <p className="text-lg text-gray-800 max-w-4xl mx-auto mb-4 leading-relaxed">
          The <span className="font-bold">ASSLS (AADUKONDAMU SC/ST LABOR SOCIETY)</span> was formed under the aegis of Mr. Prabhu Dasu in the year 2005 with Regd. No 357 / 2005, under society's registration act 35 of 2001 to raise most up-to-date voices, ideas and solutions in the development context. The structure upgrades the voices of individuals performing transformative work in their communities and finding workable solutions to important challenges.
        </p>
        <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
          We believe that solutions come from communities on the frontlines of these challenges, and solutions come from art, culture, and actions derived from people who are stepping up in the communities where they live and work. The ASSLS shines a light on these leaders and creates a space for them to tell their stories, their own way.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-8">
        <h2 className="text-4xl font-serif italic text-orange-500 mb-12 text-center">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src="/figmaAssets/placeholder---image-9.png" alt="Our Story Community" className="w-full h-96 object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-800 leading-relaxed">
              ASSLS (Adukondamu S/ST Labor Society) is a non-profit organization founded in 2005 to support farmers and vulnerable communities in rural Andhra Pradesh. We work closely with communities to improve livelihoods, health, education, and social well-being.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our programs focus on agriculture development, women empowerment, youth support, and healthcare initiatives.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              We also promote environmental protection, nutrition awareness, and HIV/AIDS prevention. Through community participation and partnerships, ASSLS strives to create sustainable and inclusive change.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-8">
        <h2 className="text-4xl font-serif italic text-orange-500 mb-12 text-center">Our Vision</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-800 leading-relaxed">
              Our vision is to build strong, self-reliant, and inclusive communities where every individual lives with dignity and opportunity. We envision a future where farmers, women, children, and vulnerable groups have equal access to livelihoods, health, and education.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Through sustainable agriculture, environmental care, and social equity, we strive to create long-lasting positive change. ASSLS believes in community-led growth that nurtures resilience, well-being, and hope for generations to come.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="/figmaAssets/placeholder---image-10.png" alt="Our Vision" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-8">
        <h2 className="text-4xl font-serif italic text-orange-500 mb-12 text-center">Our Mission</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src="/figmaAssets/rectangle-10.png" alt="Our Mission" className="w-full h-96 object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-800 leading-relaxed">
              Our mission is to work alongside communities to improve livelihoods, health, education, and social well-being. We focus on empowering farmers, women, youth, and vulnerable groups through inclusive development programs.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              By promoting sustainable agriculture, skill development, and health awareness, we address real community needs.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Through participation, partnerships, and responsible action, ASSLS strives to create lasting and meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif italic text-orange-500 mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              {coreValues.map((value, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-800 leading-relaxed text-base">{value.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="/figmaAssets/rectangle-22586.png" alt="Core Values" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-8">
        <h2 className="text-4xl font-serif italic text-orange-500 mb-12 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif italic text-orange-500 mb-4 text-center">Executive Committee</h2>
          <p className="text-center text-gray-700 mb-12">
            Our Executive Committee brings together experienced leaders dedicated to guiding ASSLS with integrity and purpose.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-gray-300 h-48 rounded-lg mb-4 overflow-hidden">
                <img src="/figmaAssets/image-3.png" alt="Mr. Prabhu Dasu" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Mr. Prabhu Dasu</h3>
              <p className="text-orange-500 font-medium text-sm">President</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 h-48 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900">Mr. Lorem</h3>
              <p className="text-orange-500 font-medium text-sm">Vice President</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 h-48 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900">Mr. Ipsum</h3>
              <p className="text-orange-500 font-medium text-sm">Secretary</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 h-48 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900">Mrs. Lorem</h3>
              <p className="text-orange-500 font-medium text-sm">Joint Secretary</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 h-48 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900">Mrs. Ipsum</h3>
              <p className="text-orange-500 font-medium text-sm">Treasurer</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-black text-white rounded-xl p-12 flex gap-8 items-center mb-16">
            <div className="w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 border-4 border-green-500">
              <img src="/figmaAssets/image-3.png" alt="Mr. Prabhu Dasu" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-2xl italic leading-relaxed mb-8 font-serif">
                "True change begins when communities come together with purpose and compassion. Every small effort, when guided by unity and responsibility, can create lasting impact. At ASSLS, we believe in empowering people to shape their own future with dignity."
              </p>
              <p className="text-xl font-bold">Mr. Prabhu Dasu</p>
              <p className="text-orange-500 font-medium">Founder ASSLS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mt-8">
        <h2 className="text-4xl font-serif italic text-orange-500 mb-12 text-center">Partners & Collaborations</h2>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <img src="/figmaAssets/image-1-1.png" alt="Partner" className="h-20 object-contain" />
          <img src="/figmaAssets/image-3-1.png" alt="Partner" className="h-20 object-contain" />
          <div className="h-20 bg-gray-300 rounded-lg px-8 flex items-center text-gray-600 font-medium">Partner</div>
          <div className="h-20 bg-gray-300 rounded-lg px-8 flex items-center text-gray-600 font-medium">Partner</div>
          <div className="h-20 bg-gray-300 rounded-lg px-8 flex items-center text-gray-600 font-medium">Partner</div>
        </div>
      </section>

      {/* Together We Can Create Change Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl mx-4 md:mx-8 lg:mx-16 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Together, We Can Create Change</h2>
            <p className="text-lg mb-8 leading-relaxed">
              When communities and supporters come together, amazing things happen. Join us in our mission to transform lives and strengthen communities. Every contribution counts.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
              Join our Community
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="/figmaAssets/placeholder---image.png" alt="Together We Can Create Change" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-16 py-12 px-4 md:px-8 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-700 mb-4">Updates right to your Inbox</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm" />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition">Send</button>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="/" className="text-gray-700 hover:text-orange-500">Privacy policy</a>
            <a href="/" className="text-gray-700 hover:text-orange-500">Refund Policy</a>
          </div>
          <div className="text-right">
            <p className="text-gray-700">© ASSLS 2025</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3">
        <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-16 h-16" />
        <div className="bg-white px-4 py-2 rounded-xl shadow-lg text-gray-800 font-medium text-sm">Chat with us</div>
      </div>
    </div>
  );
};

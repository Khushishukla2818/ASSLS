export const AboutUs = (): JSX.Element => {
  const teamMembers = [
    { name: "Mr. Prabhu Dasu", role: "President" },
    { name: "Mr. Lorem", role: "Vice President" },
    { name: "Mr. Ipsum", role: "Secretary" },
    { name: "Mrs. Lorem", role: "Joint Secretary" },
    { name: "Mrs. Ipsum", role: "Treasurer" },
  ];

  const programs = [
    {
      title: "Farmer Welfare & Sustainable Agriculture",
      description: "Supporting farmers through training, innovation, and awareness programs to improve agricultural practices, income stability, and climate resilience."
    },
    {
      title: "Health Care & Medical Support",
      description: "Organizing medical camps, eye care programs, nutrition awareness, and health education to improve access to quality healthcare in rural communities."
    },
    {
      title: "Livelihood Promotion & Income Generation",
      description: "Supporting self-sustaining ventures through skill training, employment generation, and livelihood development programs for vulnerable groups."
    },
    {
      title: "Women Empowerment & Skill Development",
      description: "Empowering women through vocational training, livelihood programs, and capacity-building initiatives that promote financial independence and social equality."
    },
    {
      title: "Community Awareness & Social Rights",
      description: "Creating awareness on sanitation, hygiene, drinking water, government schemes, and social rights through community-based education and engagement."
    },
    {
      title: "HIV/AIDS Prevention, Care & Support",
      description: "Conducting awareness programs, community outreach, counseling, and rehabilitation support for HIV-affected and at-risk populations."
    },
    {
      title: "Youth & Adolescent Development",
      description: "Providing education support, life skills training, and awareness programs to help adolescents and youth build confidence, knowledge, and future opportunities."
    },
    {
      title: "Environmental Protection & Biodiversity",
      description: "Promoting plantation drives, biodiversity conservation, ecosystem restoration, and environmental awareness to protect natural resources and village habitats."
    },
    {
      title: "Research, Training & Policy Advocacy",
      description: "Conducting research studies, training programs, and policy advocacy to address issues related to agriculture, livelihoods, and community development."
    },
    {
      title: "Community Mobilization & Capacity Building",
      description: "Strengthening community institutions, volunteers, and local leadership through training, collaboration, and participatory development approaches."
    }
  ];

  const coreValues = [
    { title: "Service & Equity", description: "To serve is the choosiest of choices, We believe different views and experiences are advantages, so we strive to ensure everyone has a seat and voice at the table built by all." },
    { title: "Transformative", description: "We are smart, adaptable, learn from our mistakes, and are willing to be the first to try new things." },
    { title: "Integrity & Excellence", description: "We uphold the values of ASSLS in every action and decision. We believe in what we are doing, thus we value hard work and persistence to offer our best." },
    { title: "Respect & Support", description: "Everyone matters. We work with exceptional people who do exceptional things. We are committed to building an encouraging, caring, and supportive environment." }
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
            <a href="/" className="text-gray-700 hover:text-orange-500">Services</a>
            <a href="/" className="text-gray-700 hover:text-orange-500">Contact us</a>
          </nav>
          <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-medium">Donate</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
        <p className="text-xl text-gray-700 mb-6">
          The <span className="font-semibold text-black">ASSLS (AADUKONDAMU SC/ST LABOR SOCIETY)</span> was formed under the aegis of Mr. Prabhu Dasu in the year 2005 with Regd. No 357 / 2005, under society's registration act 35 of 2001 to raise most up-to-date voices, ideas and solutions in the development context.
        </p>
        <p className="text-xl text-gray-700">
          We believe that solutions come from communities on the frontlines of these challenges, and solutions come from art, culture, and actions derived from people who are stepping up in the communities where they live and work.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-playball text-orange-500 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Our vision is to build strong, self-reliant, and inclusive communities where every individual lives with dignity and opportunity. We envision a future where farmers, women, children, and vulnerable groups have equal access to livelihoods, health, and education.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Through sustainable agriculture, environmental care, and social equity, we strive to create long-lasting positive change. ASSLS believes in community-led growth that nurtures resilience, well-being, and hope for generations to come.
            </p>
          </div>
          <div className="bg-gray-300 h-72 rounded-lg"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-300 h-72 rounded-lg"></div>
          <div>
            <h2 className="text-4xl font-playball text-orange-500 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Our mission is to work alongside communities to improve livelihoods, health, education, and social well-being. We focus on empowering farmers, women, youth, and vulnerable groups through inclusive development programs.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              By promoting sustainable agriculture, skill development, and health awareness, we address real community needs. Through participation, partnerships, and responsible action, ASSLS strives to create lasting and meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playball text-orange-500 text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playball text-orange-500 text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-playball text-orange-500 text-center mb-12">Executive Committee</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our Executive Committee brings together experienced leaders dedicated to guiding ASSLS with integrity and purpose.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-400 h-40 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-300 h-72 rounded-lg"></div>
          <div>
            <h2 className="text-4xl font-playball text-orange-500 mb-6">Our Story</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              ASSLS (Adukondamu S/ST Labor Society) is a non-profit organization founded in 2005 to support farmers and vulnerable communities in rural Andhra Pradesh. We work closely with communities to improve livelihoods, health, education, and social well-being.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our programs focus on agriculture development, women empowerment, youth support, and healthcare initiatives. We also promote environmental protection, nutrition awareness, and HIV/AIDS prevention. Through community participation and partnerships, ASSLS strives to create sustainable and inclusive change.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black text-white rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl font-serif italic mb-6">
            "True change begins when communities come together with purpose and compassion. Every small effort, when guided by unity and responsibility, can create lasting impact. At ASSLS, we believe in empowering people to shape their own future with dignity."
          </p>
          <p className="text-xl font-semibold">Mr. Prabhu Dasu</p>
          <p className="text-orange-500">-Founder ASSLS</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-16 py-12 px-4 md:px-8 lg:px-16 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-black mb-4">Newsletter</h3>
            <p className="text-gray-700 mb-4">Updates right to your Inbox</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium">Send</button>
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
      <div className="fixed bottom-8 right-8 flex items-center gap-2">
        <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-16 h-16" />
        <div className="bg-white px-4 py-2 rounded-xl shadow-lg">Chat with us</div>
      </div>
    </div>
  );
};

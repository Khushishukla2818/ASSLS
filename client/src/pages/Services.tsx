export const Services = (): JSX.Element => {
  const services = [
    {
      id: 1,
      title: "Farmer Welfare & Sustainable Agriculture",
      description: "Supporting farmers through training, innovation, and awareness programs to improve agricultural practices, income stability, and climate resilience.",
      icon: "🌾"
    },
    {
      id: 2,
      title: "Health Care & Medical Support",
      description: "Organizing medical camps, eye care programs, nutrition awareness, and health education to improve access to quality healthcare in rural communities.",
      icon: "⚕️"
    },
    {
      id: 3,
      title: "Livelihood Promotion & Income Generation",
      description: "Supporting self-sustaining ventures through skill training, employment generation, and livelihood development programs for vulnerable groups.",
      icon: "💼"
    },
    {
      id: 4,
      title: "Women Empowerment & Skill Development",
      description: "Empowering women through vocational training, livelihood programs, and capacity-building initiatives that promote financial independence and social equality.",
      icon: "👩"
    },
    {
      id: 5,
      title: "Community Awareness & Social Rights",
      description: "Creating awareness on sanitation, hygiene, drinking water, government schemes, and social rights through community-based education and engagement.",
      icon: "🤝"
    },
    {
      id: 6,
      title: "HIV/AIDS Prevention, Care & Support",
      description: "Conducting awareness programs, community outreach, counseling, and rehabilitation support for HIV-affected and at-risk populations.",
      icon: "❤️"
    },
    {
      id: 7,
      title: "Youth & Adolescent Development",
      description: "Providing education support, life skills training, and awareness programs to help adolescents and youth build confidence, knowledge, and future opportunities.",
      icon: "🎓"
    },
    {
      id: 8,
      title: "Environmental Protection & Biodiversity",
      description: "Promoting plantation drives, biodiversity conservation, ecosystem restoration, and environmental awareness to protect natural resources and village habitats.",
      icon: "🌱"
    },
    {
      id: 9,
      title: "Research, Training & Policy Advocacy",
      description: "Conducting research studies, training programs, and policy advocacy to address issues related to agriculture, livelihoods, and community development.",
      icon: "📊"
    },
    {
      id: 10,
      title: "Community Mobilization & Capacity Building",
      description: "Strengthening community institutions, volunteers, and local leadership through training, collaboration, and participatory development approaches.",
      icon: "👥"
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
            <a href="/about" className="text-gray-700 hover:text-orange-500">About us</a>
            <a href="/services" className="text-orange-500 font-medium border-b-4 border-orange-500 pb-2">Services</a>
            <a href="/" className="text-gray-700 hover:text-orange-500">Contact us</a>
          </nav>
          <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-medium">Donate</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">Our Services</h1>
          <p className="text-2xl text-gray-700 max-w-3xl">
            ASSLS offers a comprehensive range of services designed to empower communities and create lasting positive change through innovative programs and community partnerships.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Comprehensive Development Programs</h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            We deliver targeted interventions across multiple sectors to address the complex needs of rural and vulnerable communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose ASSLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-orange-600">20+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Years of Experience</h3>
              <p className="text-gray-700">Established in 2005 with proven track record in community development</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">10+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-700">Comprehensive programs addressing multiple community needs</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">100K+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lives Impacted</h3>
              <p className="text-gray-700">Thousands of families benefited from our programs</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3 Certs</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Certified Partner</h3>
              <p className="text-gray-700">12A, 80G, and FCRA certified organization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Key Focus Areas</h2>

          <div className="space-y-16">
            {/* Agricultural Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Agricultural Development</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We support farmer communities with modern agricultural practices, sustainable farming techniques, and market linkages to ensure income stability and food security.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Farmer training and capacity building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Climate-smart agriculture promotion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Market linkages and value addition</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-300 h-80 rounded-lg"></div>
            </div>

            {/* Health & Wellness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-300 h-80 rounded-lg"></div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Healthcare remains a fundamental right. We organize medical camps, health awareness programs, and nutrition initiatives to improve community health outcomes.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Medical camps and health screenings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Nutrition and health awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>HIV/AIDS prevention programs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Women & Youth Empowerment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Women & Youth Empowerment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We believe in unlocking the potential of women and youth through skill development, education, and creating equal opportunities for economic participation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Vocational skills training programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Life skills and education support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Economic empowerment initiatives</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-300 h-80 rounded-lg"></div>
            </div>

            {/* Environmental Conservation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-300 h-80 rounded-lg"></div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Environmental Conservation</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Protecting our environment is crucial for sustainable development. We implement conservation programs and promote ecological awareness in communities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Afforestation and plantation drives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Biodiversity conservation projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span>Environmental awareness campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join us in our mission to create equitable and sustainable communities. Your support enables us to expand our services and reach more lives.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-orange-600 transition">
              Partner With Us
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-medium text-lg hover:bg-orange-50 transition">
              Donate Now
            </button>
          </div>
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

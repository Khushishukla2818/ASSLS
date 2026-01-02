import { NavigationSection } from "./sections/NavigationSection";
import { FooterSection } from "./sections/FooterSection";

export const Services = (): JSX.Element => {
  const services = [
    {
      title: "Agriculture & Farmer Welfare",
      description: "ASSLS is deeply committed to revitalizing the agricultural sector by accelerating a just evolution toward climate-positive farming. Our initiatives focus on farmer innovations, the integration of sustainable practices that help local communities transition through economic shifts and climate resilience. We act as a bridge between traditional wisdom and modern solutions, providing essential inputs for natural resource management and promoting the rights of agriculturists under the Development and Rights to Agriculture Act.\n\nBy working with those impacted by adverse climate change, we implement equitable solutions that ensure farmers have ownership over their resources. Our goal is to create an elevated agricultural economy that sustainably serves all people while closing representation gaps. Through collective effort, we strive to transform agriculture into a wealth-generating sector for the local communities of Andhra Pradesh and Telangana.",
      image: "/figmaAssets/rectangle-5.png",
      imagePosition: "right"
    },
    {
      title: "Women Empowerment",
      description: "Women are the backbone of community resilience, and ASSLS prioritizes their empowerment through multi-dimensional support systems. Our programs are designed to improve women's participation in natural resource management and decision-making processes at the village level. We provide vocational training and capacity-building capsules that enable substitute women and female heads of households to achieve financial independence. By focusing on skill development, we help women transition from vulnerable circumstances to becoming influential change agents within their local networks.\n\nWe also conduct specific awareness programs on family sustenance, legal rights, and health consciousness to ensure holistic upliftment. Our vision is a society where women have a seat and a voice at every table, free from wage gaps and social limitations. Through continuous motivation and integrated actions, we ensure that women are leading the way toward a more just and fertile world.",
      image: "/figmaAssets/rectangle-6.png",
      imagePosition: "left"
    },
    {
      title: "Youth & Skill Development",
      description: "The ADUKONDAMU S/ST LABOR SOCIETY recognizes youth as the primary change agents for a responsive democracy. We offer specialized vocational training and educational capsules designed to engage adolescents in distress, particularly those from historically neglected communities. By providing skills in modern technology and self-sustaining ventures, we reduce the risk of poverty and migration among the younger generation. Our programs focus on transforming energy and potential into tangible livelihoods through employment and income-generation training. We work closely with partners like STEP and local institutions to provide certification and professional pathways for school dropouts and marginalized youth.\n\nBy fostering an environment of excellence and persistence, we empower young people to break the cycle of poverty and lead community development. We believe that investing in youth skills is a 'big bet' that will yield significant progress for the future of our society.",
      image: "/figmaAssets/rectangle-7.png",
      imagePosition: "right"
    },
    {
      title: "Healthcare & Medical Support",
      description: "Our healthcare initiatives are built on the principle that quality medical care is a fundamental right, not a privilege. ASSLS organizes comprehensive medical and eye care camps, offering operations and treatments to those in remote areas who lack access to standard facilities. We place a high priority on Reproductive and Child Health (RCH) and provide critical health information to vulnerable segments to build resilience against epidemics. Our team works tirelessly to bridge the gap between rural masses and essential health services through linkages with ICDS and state health commissions.\n\nBy hosting awareness sessions on cancer understanding and general hygiene, we promote a culture of health consciousness and preventive care. We also provide specialized support for the elderly and adolescents, ensuring that every age group receives the medical attention they deserve. Our medical outreach is a vital catalyst for improving the overall quality of life in the Prakasam district and surrounding regions.",
      image: "/figmaAssets/rectangle-8.png",
      imagePosition: "left"
    },
    {
      title: "Education & Child Development",
      description: "Education is the cornerstone of the ASSLS mission to build community power and foster equitable futures. We focus on providing care, support, and rehabilitation to children and adolescents, with a special emphasis on those from disadvantaged backgrounds. Our programs include educational instincts for school dropouts and never-enrolled children, ensuring they are integrated back into the learning system. We advocate for child rights protection and work collaboratively with parents to build capacity regarding laws that safeguard the younger generation.\n\nBy fostering literacy and education through motivation, we prepare children to become the next generation of effective leaders and influencers. Our commitment extends to providing materialization of entitlements, ensuring that every child has the resources needed to succeed academically. We believe that by protecting the child segment today, we are securing a peaceful and just world for the future.",
      image: "/figmaAssets/rectangle-22587.png",
      imagePosition: "right"
    },
    {
      title: "Nutrition & Food Security",
      description: "ASSLS addresses the critical challenge of malnutrition through sustainable nutrition enrichment and supplementation programs. We understand that food security is the foundation of community health, which is why we provide targeted nutritional support to children, pregnant women, and the elderly. Our team works on the frontlines to educate families on government nutrition schemes and the importance of a balanced diet for long-term health. By partnering with ICDS and local self-government wings, we ensure that the most vulnerable segments of society receive their essential food entitlements. We also promote the cultivation of indigenous crops and kitchen gardens to foster local food sovereignty and resilience.\n\nOur research studies on livelihood patterns help us identify and mitigate poverty risks that lead to food insecurity. Ultimately, we strive to create a system where every household has access to the nutrition required to lead a productive and joyful life.",
      image: "/figmaAssets/rectangle-22588.png",
      imagePosition: "left"
    },
    {
      title: "HIV/AIDS Prevention, Care & Support",
      description: "The organization has established a credible presence in the fight against HIV/AIDS, focusing on prevention, outreach, and community mobilization. We provide a compassionate support system for those infected and affected by the virus, offering a \"boon\" of information and resilience during difficult times. Our activities include organizing awareness programs to reduce stigma and educating the public on prevention strategies to stop the spread of the epidemic. We work in partnership with village elders and government functionaries to provide comprehensive care and rehabilitation for families facing the tragedy of HIV/AIDS.\n\nThrough our RCH initiatives and medical camps, we ensure that the physical health of patients is monitored alongside their social well-being. By building a supportive and non-discriminatory environment, we help individuals live with dignity and hope. Our work in this sector has been instrumental in policy advocacy and protecting the rights of vulnerable health segments.",
      image: "/figmaAssets/rectangle-22589.png",
      imagePosition: "right"
    },
    {
      title: "Environmental Protection & Biodiversity Conservation",
      description: "At the heart of our mission is the restoration of biodiversity and the preservation of our natural heritage for a climate-positive future. ASSLS works closely with the AP Bio-Diversity Board and the Ministry of Environment to protect forest ecosystems and village habitats. We promote the preservation of indigenous practices that have historically sustained our local flora and fauna. Our programs focus on reducing carbon waste and promoting clean energy initiatives that lower the energy burden on moderate-income households.\n\nThrough community awareness and large-scale plantation drives, we strive to create a greener and more fertile environment for all. We believe that a healthy ecosystem is essential for sustainable agriculture and the overall well-being of the planet. By involving local communities in natural resource management, we ensure that environmental protection is a collective and lasting effort.",
      image: "/figmaAssets/rectangle-22590.png",
      imagePosition: "left"
    },
    {
      title: "Livelihood Promotion & Income Generation",
      description: "ASSLS strives to generate wealth, work, and savings for all communities by promoting diverse and self-sustaining livelihood models. We focus on building the capacity of farmers, youth, and women to engage in income-generating activities that reduce economic vulnerability. Our approach includes training in the collection, processing, storage, and marketing of village resources to improve local revenues. By creating linkages with NABARD, local banks, and micro-insurance providers, we ensure that small-scale entrepreneurs have the capital they need to grow.\n\nWe provide vocational training tailored to the market's needs, ensuring that our beneficiaries are equipped for modern economic transitions. Our goal is to eliminate representation and wage gaps by fostering an inclusive economy that serves the marginalized. Through these efforts, we are turning service into a catalyst for long-term economic independence and community prosperity.",
      image: "/figmaAssets/rectangle-22591.png",
      imagePosition: "right"
    },
    {
      title: "Social Justice & Rights Awareness",
      description: "The core mission of ASSLS is to speed up a just evolution toward a more equitable and inclusive society. We actively work to protect the rights of the old aged, adolescents, farmers, and S/ST communities through legal advocacy and social reform. Our leadership has historically served in influential roles, such as the SC/ST Vigilance and Monitoring Committee and the Right to Food case in the Supreme Court. We strive to inculcate social, economic, and cultural fraternity, ensuring that everyone has a seat and a voice at the table.\n\nBy creating awareness about entitlements and fighting against historical neglect, we empower the vulnerable to claim their rightful place in democracy. Our values of integrity and equity guide every decision as we work to dismantle systems of inequality. We are committed to building a world where justice is accessible to all, regardless of their background or economic status.",
      image: "/figmaAssets/rectangle-22592.png",
      imagePosition: "left"
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <NavigationSection />
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-[#6094BD] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-center leading-tight font-medium">
            Supporting Communities Through<br />Meaningful and Sustainable Services
          </h1>
          <p className="text-center text-xl mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            We deliver community-driven programs that support livelihoods, health, education, and social well-being.
            Each service is focused on creating sustainable and long-term impact at the grassroots level.
          </p>
          
          {/* Hero Images Scroll/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
              <img src="/figmaAssets/rectangle-1.png" alt="Activity 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
              <img src="/figmaAssets/rectangle-2.png" alt="Activity 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
              <img src="/figmaAssets/rectangle-3.png" alt="Activity 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
              <img src="/figmaAssets/rectangle-4.png" alt="Activity 4" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex items-center gap-4 justify-start cursor-pointer group w-fit">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#6094BD] transition-all">
              <span className="text-sm ml-1 text-white group-hover:text-[#6094BD]">▶</span>
            </div>
            <span className="text-lg font-bold tracking-wide">Watch our videos</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-[#ff5f00] text-3xl font-bold uppercase tracking-widest">Our Services</h2>
          <div className="fixed right-8 bottom-8 z-50 flex flex-col items-center gap-3">
            <div className="bg-white p-3 rounded-full shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition-all">
              <img src="/figmaAssets/logos-whatsapp-icon.svg" alt="WhatsApp" className="w-14 h-14" />
            </div>
            <span className="bg-white px-4 py-1 rounded-full shadow-lg text-xs font-black text-gray-800 uppercase tracking-tighter">Chat with us</span>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-40">
          {services.map((service, idx) => (
            <div key={idx} className="space-y-12">
              <h3 className="text-5xl font-bold text-[#111111] leading-tight">{service.title}</h3>
              
              <div className={`flex flex-col ${service.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-start`}>
                <div className="flex-1 space-y-8">
                  {service.description.split('\n\n').map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed text-xl font-light">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="lg:w-[48%] w-full rounded-[40px] overflow-hidden shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

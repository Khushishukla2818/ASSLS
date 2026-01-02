import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationSection } from "@/pages/sections/NavigationSection";
import { FooterSection } from "@/pages/sections/FooterSection";
import { BlogDetailModal } from "@/components/BlogDetailModal";

const blogPosts = [
  {
    title: "Skill Development Programme",
    subtitle: "Empowering Youth and Women",
    author: "ASSLS",
    date: "May 20, 2025",
    description: "Vocational training programs were organized for youth and women. These sessions focused on employable skills to support self-reliance.",
    description1: "ASSLS organized a skill development programme to equip youth and women with practical skills that improve employability and self-reliance. The training focused on vocational skills, basic technical knowledge, and life skills required for today's job market. Participants received hands-on training under experienced trainers, helping them build confidence and practical understanding. The programme was designed to address local employment needs and support sustainable livelihoods.",
    description2: "Beyond technical training, the programme emphasized personal development, communication skills, and financial awareness. Participants were guided on self-employment options, entrepreneurship, and linking their skills to available government schemes. Community involvement played a key role in encouraging participation and continued learning. The initiative also helped strengthen social inclusion by providing equal learning opportunities. Through such programmes, ASSLS continues to empower individuals and families toward long-term economic stability and growth.",
    image: "/figmaAssets/rectangle-7.png",
    thumbnails: [
      "/figmaAssets/rectangle-7.png",
      "/figmaAssets/rectangle-22592.png",
      "/figmaAssets/rectangle-22584.png"
    ],
    moreCount: 15
  },
  {
    title: "Drawing Competition",
    subtitle: "Encouraging Creativity",
    author: "ASSLS",
    date: "May 16, 2025",
    description: "ASSLS organized a drawing competition to encourage creativity, imagination, and self-expression among children and adolescents.",
    description1: "ASSLS organized a drawing competition to encourage creativity, imagination, and self-expression among children and adolescents. The event provided a safe and joyful space for young participants to express their thoughts on themes such as cleanliness, environment, education, and community life through art. Children from different backgrounds enthusiastically participated, showcasing their talent and confidence. The activity helped nurture creativity while making learning fun and engaging.",
    description2: "Beyond artistic expression, the competition aimed to build confidence, teamwork, and emotional development among children. Parents and community members actively supported the event, creating a positive and encouraging environment. The initiative also reinforced the importance of child development through creative activities. Through such programs, ASSLS continues to support holistic growth and joyful learning for children in the communities it serves.",
    image: "/figmaAssets/rectangle-22587.png",
    thumbnails: [
      "/figmaAssets/rectangle-22587.png",
      "/figmaAssets/rectangle-22588.png",
      "/figmaAssets/rectangle-22589.png"
    ],
    moreCount: 21
  },
  {
    title: "Job Mela Creating Employment",
    subtitle: "Opportunities for Youth",
    author: "ASSLS",
    date: "May 26, 2025",
    description: "ASSLS organized a Job Mela to connect unemployed youth with meaningful employment opportunities and career guidance.",
    description1: "ASSLS organized a Job Mela to connect unemployed youth with meaningful employment opportunities and career guidance. The program brought together local employers, training institutions, and job seekers under one platform. Participants received information about job openings, skill requirements, and career pathways across different sectors. The initiative aimed to reduce unemployment and support youth in finding sustainable livelihoods.",
    description2: "In addition to job placements, the Job Mela focused on building confidence and employability among participants. Career counseling sessions, resume guidance, and skill awareness talks were conducted to prepare youth for the job market. The event encouraged collaboration between communities and employers while promoting economic stability. Through initiatives like the Job Mela, ASSLS continues to empower youth and strengthen local employment ecosystems.",
    image: "/figmaAssets/rectangle-1.png",
    thumbnails: [
      "/figmaAssets/rectangle-1.png",
      "/figmaAssets/rectangle-2.png",
      "/figmaAssets/rectangle-3.png"
    ],
    moreCount: 5
  },
  {
    title: "Serving Food with Care and",
    subtitle: "Compassion",
    author: "ASSLS",
    date: "May 26, 2025",
    description: "ASSLS organized a food donation and serving drive to support vulnerable families, elderly people, and individuals in need.",
    description1: "ASSLS organized a food donation and serving drive to support vulnerable families, elderly people, and individuals in need. The initiative aimed to ensure access to nutritious meals for those facing food insecurity. Volunteers actively participated in preparing and distributing food with dignity and care. Special attention was given to hygiene, quality, and nutritional value during food distribution.",
    description2: "Community members joined hands, strengthening the spirit of unity and compassion. Through this initiative, ASSLS reaffirmed its commitment to serving humanity. The drive created a meaningful impact by bringing hope and relief to many lives. The initiative also created awareness about nutrition, food wastage, and the need for sustainable food support systems. Through such initiatives, ASSLS continues its commitment to building healthier, more resilient communities by addressing both immediate needs and long-term well-being.",
    image: "/figmaAssets/rectangle-3-1.png",
    thumbnails: [
      "/figmaAssets/rectangle-3-1.png",
      "/figmaAssets/rectangle-22588.png",
      "/figmaAssets/rectangle-22589.png"
    ],
    moreCount: 12
  },
  {
    title: "Swachh Bharat Cleanliness Drive",
    subtitle: "for Healthy Communities",
    author: "ASSLS",
    date: "May 15, 2025",
    description: "We conducted cleanliness drives in villages to promote hygiene and sanitation for a healthier environment.",
    description1: "ASSLS organized a Swachh Bharat cleanliness drive to promote sanitation, hygiene, and healthy living practices in rural and semi-urban communities. The initiative aimed to create awareness about the importance of cleanliness in preventing diseases and improving overall quality of life. Through hands-on participation, community members were encouraged to take ownership of maintaining clean and safe surroundings.",
    description2: "Along with cleanliness activities, ASSLS conducted awareness sessions on waste management, personal hygiene, and the responsible use of public spaces. Special focus was given to educating children and adolescents about the long-term benefits of a clean environment. The program strengthened community responsibility and collective action while supporting the national vision of Swachh Bharat.",
    image: "/figmaAssets/rectangle-22593.png",
    thumbnails: [
      "/figmaAssets/rectangle-22593.png",
      "/figmaAssets/rectangle-3-1.png",
      "/figmaAssets/rectangle-5.png"
    ],
    moreCount: 19
  }
];

export const Blog = (): JSX.Element => {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);

  const categories = [
    { name: "Medical Camps", count: 40 },
    { name: "Speeches", count: 20 },
    { name: "Food Donations", count: 50 },
    { name: "Social Awareness", count: 15 },
    { name: "Competitions", count: 42 },
    { name: "Job Mela", count: 27 },
    { name: "Child care", count: 20 },
    { name: "Agriculture", count: 32 },
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen font-['Poppins',_Helvetica]">
      <NavigationSection />

      {/* BlogDetailModal */}
      <BlogDetailModal 
        isOpen={selectedPostIndex !== null} 
        onClose={() => setSelectedPostIndex(null)}
        post={selectedPostIndex !== null ? blogPosts[selectedPostIndex] : null}
        onPrev={() => setSelectedPostIndex(prev => prev !== null ? (prev > 0 ? prev - 1 : blogPosts.length - 1) : null)}
        onNext={() => setSelectedPostIndex(prev => prev !== null ? (prev < blogPosts.length - 1 ? prev + 1 : 0) : null)}
      />

      {/* Hero Header */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <img 
          src="/figmaAssets/rectangle-3-2.png" 
          alt="Community Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-[102px]">
          <h1 className="text-white text-[80px] font-bold max-w-[1000px] mb-8 leading-[1] tracking-tight">
            Real Stories Creating Real Change in Communities.
          </h1>
          <p className="text-white/90 text-[24px] max-w-[800px] font-light leading-relaxed">
            Read about our programs, people, and progress across communities. These stories showcase the impact created through collective effort.
          </p>
        </div>
      </div>

      {/* Breadcrumbs & Content Container */}
      <div className="max-w-[1512px] mx-auto px-[102px] py-20">
        <div className="flex items-center gap-3 text-lg text-gray-500 mb-12 font-medium">
          <a href="/" className="hover:text-[#ff5f00] transition-colors">Home</a>
          <span className="opacity-30">/</span>
          <a href="/blog" className="hover:text-[#ff5f00] transition-colors">Blog</a>
          <span className="opacity-30">/</span>
          <span className="text-[#111111]">All Blogs</span>
        </div>

        <h2 className="text-[64px] font-bold text-[#111111] mb-20 tracking-tight">All Blogs</h2>

        <div className="flex gap-20">
          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[40px] p-8 shadow-sm border border-[#E3E3E3]/50 flex gap-10 cursor-pointer hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                onClick={() => setSelectedPostIndex(index)}
              >
                <div className="w-[450px] h-[320px] flex-shrink-0 rounded-[30px] overflow-hidden shadow-sm">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 py-4">
                  <div className="flex items-center gap-8 mb-6 text-[16px] font-bold text-[#111111]/30 uppercase tracking-widest">
                    <div className="flex items-center gap-3">
                      <img src="/figmaAssets/phone-icon.svg" className="w-5 h-5 opacity-20" alt="author" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/figmaAssets/calendar-icon.svg" className="w-5 h-5 opacity-20" alt="date" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-[40px] font-bold text-[#111111] mb-6 leading-tight tracking-tight">{post.title}</h3>
                  <p className="text-[#111111]/60 text-xl leading-relaxed mb-8 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex gap-4">
                    {post.thumbnails.slice(0, 4).map((thumb, i) => (
                      <div key={i} className="w-[70px] h-[70px] rounded-2xl overflow-hidden border border-[#E3E3E3]">
                        <img src={thumb} alt="Thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-[70px] h-[70px] rounded-2xl bg-[#F8F9FA] flex items-center justify-center text-[#111111]/40 text-sm font-black border border-[#E3E3E3]">
                      +{post.moreCount}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-10 py-16 text-2xl font-bold">
              <button className="text-[#111111]/20 hover:text-[#ff5f00] transition-colors uppercase tracking-widest text-lg">Previous</button>
              <div className="flex items-center gap-8">
                <span className="text-[#ff5f00]">1</span>
                <span className="text-[#111111]/20 cursor-pointer hover:text-[#111111]/40 transition-colors">2</span>
                <span className="text-[#111111]/20 cursor-pointer hover:text-[#111111]/40 transition-colors">3</span>
                <span className="text-[#111111]/10">....</span>
                <span className="text-[#111111]/20 cursor-pointer hover:text-[#111111]/40 transition-colors">9</span>
              </div>
              <button className="text-[#ff5f00] hover:text-[#ff5f00]/80 transition-colors uppercase tracking-widest text-lg">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[380px] space-y-16">
            <div>
              <h3 className="text-[40px] font-bold text-[#111111] mb-10 tracking-tight">Categories</h3>
              <div className="space-y-4">
                {categories.map((cat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-6 bg-white border border-[#E3E3E3]/50 rounded-2xl hover:border-[#ff5f00] hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group"
                  >
                    <span className="text-xl font-bold text-[#111111]/70 group-hover:text-[#ff5f00]">{cat.name}</span>
                    <span className="text-sm text-[#111111]/20 font-black">({cat.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Banner */}
      <div className="max-w-[1512px] mx-auto px-[102px] mb-32">
        <div className="bg-white rounded-[40px] overflow-hidden flex items-center p-0 h-[450px] shadow-xl border border-[#E3E3E3]/30">
          <div className="w-[40%] h-full">
            <img 
              src="/figmaAssets/placeholder---image-1.png" 
              alt="Child" 
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>
          <div className="flex-1 px-20 flex flex-col items-start text-left">
            <h2 className="text-[64px] font-bold text-[#111111] mb-6 uppercase leading-[0.9] tracking-tighter">
              Stand with those <br/> who need it most.
            </h2>
            <p className="text-[#ff5f00] text-3xl font-bold mb-12 tracking-tight">
              Your Donation Helps Communities Grow And Thrive.
            </p>
            <Button className="bg-[#111111] text-white hover:bg-[#333] h-[80px] px-16 rounded-2xl font-bold text-2xl shadow-xl transition-all no-default-hover-elevate">
              Donate Us
            </Button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

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
  },
  {
    title: "Farmer Awareness Camps",
    author: "ASSLS",
    date: "Jun 01, 2025",
    description: "Awareness sessions were held on modern and sustainable farming practices. Farmers were guided on crop planning.",
    description1: "Awareness sessions were held on modern and sustainable farming practices. Farmers were guided on crop planning and government schemes.",
    description2: "The program focused on soil health, natural resource management, and climate-resilient agriculture to improve yields and sustainability.",
    image: "/figmaAssets/rectangle-5.png",
    thumbnails: [
      "/figmaAssets/rectangle-5.png",
      "/figmaAssets/rectangle-22580.png",
      "/figmaAssets/rectangle-22581.png"
    ],
    moreCount: 11
  },
  {
    title: "Medical Health Camps",
    author: "ASSLS",
    date: "Jun 07, 2025",
    description: "Health check-up camps were conducted in remote rural areas. Doctors provided consultations and medicines.",
    description1: "Health check-up camps were conducted in remote rural areas. Doctors provided consultations, medicines, and health guidance.",
    description2: "The initiative focused on preventive care, general health screenings, and medical advice for vulnerable communities.",
    image: "/figmaAssets/rectangle-8.png",
    thumbnails: [
      "/figmaAssets/rectangle-8.png",
      "/figmaAssets/rectangle-22588.png",
      "/figmaAssets/rectangle-22589.png"
    ],
    moreCount: 3
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
    <div className="bg-[#F8F9FA] min-h-screen font-['Poppins',_Helvetica]">
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
      <div className="relative h-[600px] w-full overflow-hidden">
        <img 
          src="/figmaAssets/rectangle-3-2.png" 
          alt="Community Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-[102px]">
          <h1 className="text-white text-7xl font-bold max-w-4xl mb-6 leading-tight">
            Real Stories Creating Real Change in Communities.
          </h1>
          <p className="text-white/90 text-xl max-w-2xl font-light">
            Read about our programs, people, and progress across communities. These stories showcase the impact created through collective effort.
          </p>
        </div>
      </div>

      {/* Breadcrumbs & Content Container */}
      <div className="max-w-[1512px] mx-auto px-[102px] py-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
          <a href="/" className="hover:text-[#ff5f00]">Home</a>
          <span>&gt;</span>
          <a href="/blog" className="hover:text-[#ff5f00]">Blog</a>
          <span>&gt;</span>
          <span className="text-gray-900">All Blogs</span>
        </div>

        <h2 className="text-[48px] font-bold text-[#111111] mb-12">All Blogs</h2>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex gap-8 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedPostIndex(index)}
              >
                <div className="w-[380px] h-[280px] flex-shrink-0 rounded-[15px] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-4 text-sm font-medium text-gray-400">
                    <div className="flex items-center gap-2">
                      <img src="/figmaAssets/phone-icon.svg" className="w-4 h-4 grayscale" alt="author" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/figmaAssets/calendar-icon.svg" className="w-4 h-4 grayscale" alt="date" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-[32px] font-bold text-[#111111] mb-4">{post.title}</h3>
                  <p className="text-[#4a4a4a] text-lg leading-relaxed opacity-70 mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex gap-3">
                    {post.thumbnails.slice(0, 4).map((thumb, i) => (
                      <div key={i} className="w-16 h-16 rounded-lg overflow-hidden border border-gray-100">
                        <img src={thumb} alt="Thumbnail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-bold border border-gray-100">
                      +{post.moreCount}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-8 py-12 text-xl font-medium">
              <button className="text-gray-400 hover:text-[#ff5f00] transition-colors">Previous</button>
              <div className="flex items-center gap-6">
                <span className="text-[#ff5f00]">1</span>
                <span className="text-gray-400">2</span>
                <span className="text-gray-400">3</span>
                <span className="text-gray-400">....</span>
                <span className="text-gray-400">9</span>
              </div>
              <button className="text-[#ff5f00] font-bold">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[350px] space-y-12">
            <div>
              <h3 className="text-[32px] font-bold text-[#111111] mb-8">Categories</h3>
              <div className="space-y-4">
                {categories.map((cat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-[#ff5f00] hover:text-[#ff5f00] transition-all cursor-pointer group"
                  >
                    <span className="text-lg font-medium text-gray-700 group-hover:text-[#ff5f00]">{cat.name}</span>
                    <span className="text-sm text-gray-300 font-bold">({cat.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Banner */}
      <div className="max-w-[1512px] mx-auto px-[102px] mb-20">
        <div className="bg-[#E5E5E5] rounded-[20px] overflow-hidden flex items-center p-0 h-[400px]">
          <div className="w-1/3 h-full">
            <img 
              src="/figmaAssets/placeholder---image-1.png" 
              alt="Child" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="flex-1 px-16 flex flex-col items-start text-left">
            <h2 className="text-[54px] font-bold text-[#111111] mb-4 uppercase leading-none">
              Stand with those who need it most.
            </h2>
            <p className="text-[#ff5f00] text-2xl font-medium mb-12">
              Your Donation Helps Communities Grow And Thrive.
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 h-auto px-12 py-5 rounded-xl font-bold text-2xl shadow-sm">
              Donate Us
            </Button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

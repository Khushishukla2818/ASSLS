import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationSection } from "@/pages/sections/NavigationSection";
import { FooterSection } from "@/pages/sections/FooterSection";

export const Blog = (): JSX.Element => {
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

  const blogPosts = [
    {
      title: "Swach Bharath Activity",
      author: "ASSLS",
      date: "May 15, 2025",
      description: "We conducted cleanliness drives in villages to promote hygiene and sanitation. The initiative encouraged community participation for a healthier environment.",
      image: "/figmaAssets/rectangle-22593.png",
      thumbnails: [
        "/figmaAssets/rectangle-22593.png",
        "/figmaAssets/rectangle-3-1.png",
        "/figmaAssets/rectangle-5.png",
        "/figmaAssets/rectangle-6.png",
        "/figmaAssets/rectangle-7.png"
      ],
      moreCount: 19
    },
    {
      title: "Drawing Competition",
      author: "ASSLS",
      date: "May 16, 2025",
      description: "ASSLS organized a drawing competition to encourage creativity among children and adolescents. The activity helped children express their thoughts on social, environmental, and cultural themes.",
      image: "/figmaAssets/rectangle-22587.png",
      thumbnails: [
        "/figmaAssets/rectangle-22587.png",
        "/figmaAssets/rectangle-22588.png",
        "/figmaAssets/rectangle-22589.png",
        "/figmaAssets/rectangle-22590.png",
        "/figmaAssets/rectangle-22591.png"
      ],
      moreCount: 21
    },
    {
      title: "Skill Development Program",
      author: "ASSLS",
      date: "May 20, 2025",
      description: "Vocational training programs were organized for youth and women. These sessions focused on employable skills to support self-reliance.",
      image: "/figmaAssets/rectangle-7.png",
      thumbnails: [
        "/figmaAssets/rectangle-7.png",
        "/figmaAssets/rectangle-22592.png",
        "/figmaAssets/rectangle-22584.png",
        "/figmaAssets/rectangle-22585.png",
        "/figmaAssets/rectangle-22586.png"
      ],
      moreCount: 15
    },
    {
      title: "Job Mela Programme",
      author: "ASSLS",
      date: "May 26, 2025",
      description: "ASSLS organized job fairs connecting local youth with employment opportunities. The program helped bridge the gap between skills and jobs.",
      image: "/figmaAssets/rectangle-1.png",
      thumbnails: [
        "/figmaAssets/rectangle-1.png",
        "/figmaAssets/rectangle-2.png",
        "/figmaAssets/rectangle-3.png",
        "/figmaAssets/rectangle-4.png",
        "/figmaAssets/rectangle-5.png"
      ],
      moreCount: 5
    },
    {
      title: "Farmer Awareness Camps",
      author: "ASSLS",
      date: "Jun 01, 2025",
      description: "Awareness sessions were held on modern and sustainable farming practices. Farmers were guided on crop planning and government schemes.",
      image: "/figmaAssets/rectangle-5.png",
      thumbnails: [
        "/figmaAssets/rectangle-5.png",
        "/figmaAssets/rectangle-22580.png",
        "/figmaAssets/rectangle-22581.png",
        "/figmaAssets/rectangle-22582.png",
        "/figmaAssets/rectangle-22584.png"
      ],
      moreCount: 11
    },
    {
      title: "Medical Health Camps",
      author: "ASSLS",
      date: "Jun 07, 2025",
      description: "Health check-up camps were conducted in remote rural areas. Doctors provided consultations, medicines, and health guidance.",
      image: "/figmaAssets/rectangle-8.png",
      thumbnails: [
        "/figmaAssets/rectangle-8.png",
        "/figmaAssets/rectangle-22588.png",
        "/figmaAssets/rectangle-22589.png",
        "/figmaAssets/rectangle-22590.png",
        "/figmaAssets/rectangle-22591.png"
      ],
      moreCount: 3
    },
    {
      title: "Women Empowerment Training",
      author: "ASSLS",
      date: "May 26, 2025",
      description: "Women received training in tailoring, small businesses, and entrepreneurship. The program aimed to improve financial independence and confidence.",
      image: "/figmaAssets/rectangle-6.png",
      thumbnails: [
        "/figmaAssets/rectangle-6.png",
        "/figmaAssets/rectangle-22586.png",
        "/figmaAssets/rectangle-22585.png",
        "/figmaAssets/rectangle-10.png",
        "/figmaAssets/rectangle-22592.png"
      ],
      moreCount: 10
    }
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-['Poppins',_Helvetica]">
      <NavigationSection />

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
              <div key={index} className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex gap-8">
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
                  <p className="text-[#4a4a4a] text-lg leading-relaxed opacity-70 mb-6">
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

import { Button } from "@/components/ui/button";
import { FooterSection } from "@/pages/sections/FooterSection";
import { NavigationSection } from "@/pages/sections/NavigationSection";

export const Blog = (): JSX.Element => {
  const blogPosts = [
    {
      title: "Empowering Rural Communities",
      date: "October 15, 2025",
      excerpt: "Our latest initiative in agriculture has helped over 500 farmers adopt sustainable practices...",
      image: "/figmaAssets/rectangle-22593.png"
    },
    {
      title: "Education for Every Child",
      date: "September 28, 2025",
      excerpt: "Providing school supplies and scholarships to underprivileged children in Andhra Pradesh...",
      image: "/figmaAssets/rectangle-3-1.png"
    },
    {
      title: "Women Empowerment Workshop",
      date: "August 12, 2025",
      excerpt: "Skill development training for local women to help them achieve financial independence...",
      image: "/figmaAssets/rectangle-5.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-['Poppins',_Helvetica]">
      <NavigationSection />

      <main className="w-full max-w-[1512px] mx-auto px-[102px] py-[80px]">
        <h1 className="font-['Yellowtail',_cursive] text-[#ff5f00] text-[64px] text-center mb-16">Our Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-lg border border-gray-100 flex flex-col hover-elevate">
              <div className="h-[250px] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[#ff5f00] text-sm font-medium mb-3">{post.date}</span>
                <h3 className="text-[#111111] text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-[#4a4a4a] opacity-70 mb-6 flex-1">{post.excerpt}</p>
                <Button variant="link" className="text-[#ff5f00] p-0 h-auto font-bold text-lg justify-start">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

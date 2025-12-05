import HeroVideoSection from "@/components/HeroVideoSection";
import FeaturedCoursesGrid from "@/components/FeaturedCoursesGrid";

export default function Home() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <HeroVideoSection />
      <FeaturedCoursesGrid />
    </main>
  );
}

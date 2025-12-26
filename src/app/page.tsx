import HeroVideoSection from "@/components/section/HeroInicio";
import FeaturedCoursesGrid from "@/components/section/FeaturedCoursesGrid";

export default function Home() {
  return (
    <main id="content">
      <section className="relative h-16 w-full"></section>
      <HeroVideoSection />
      <FeaturedCoursesGrid />
    </main>
  );
}

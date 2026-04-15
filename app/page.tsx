import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Process from "@/components/Process/Process";
import Footer2 from "@/components/Footerv2/Footerv2";
export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Process />
      <Footer2 />
      {/* Other sections like "Product Features" will go here next */}
    </main>
  );
}

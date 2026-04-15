import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Process from "@/components/Process/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Process />
      {/* Other sections like "Product Features" will go here next */}
    </main>
  );
}

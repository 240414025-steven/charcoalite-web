import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Lineup from "@/components/ProductLineup";

export default function Home() {
  return (
    <main>
      <Hero />
      <Lineup />
      <Story />

      {/* Keep adding sections*/}
    </main>
  );
}

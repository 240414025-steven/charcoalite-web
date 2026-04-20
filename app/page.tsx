import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Lineup from "@/components/ProductLineup";
import Anatomy from "@/components/Anatomy/Anatomy";

export default function Home() {
  return (
    <main>
      <Hero />
      <Lineup />
      <Story />
      <Anatomy />

      {/* Keep adding sections*/}
    </main>
  );
}

import FilterBar from "@/components/filterBar/filterBar";
import Hero from "@/components/hero/hero";

interface CardCarProps {
  model: string;
  capacity: number;
  price: number;
  transmission: string;
  year: number;
}

export default function Home() {
  return (
    <>
      <Hero>
        <p></p>
      </Hero>
      <FilterBar />
    </>
  );
}

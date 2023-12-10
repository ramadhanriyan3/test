"use client";
import { useRouter } from "next/navigation";
import Testimonial from "@/components/testimonial/testimonial";
import Hero from "@/components/hero/hero";
import OurService from "@/components/ourService/service";
import WhyUs from "@/components/whyus/whyUs";
import BlueBox from "@/components/blueBox/blueBox";
import FaqAccordion from "@/components/accordion/accordion";
import MyButton from "@/components/button/button";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero>
        <MyButton
          value="Mulai Sewa Mobil"
          handlerOnClick={() => router.push("/cars")}
        />
      </Hero>
      <OurService />
      <WhyUs />
      <Testimonial />
      <BlueBox />
      <FaqAccordion />
    </>
  );
}

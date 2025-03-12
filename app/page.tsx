
import { MenuOrderSection } from "./commoncomponents/Menu";
import "./globals.css";
// import { TomatoSauceSection } from "./commoncomponents/OrderDelivery";
import { TestimonialSection } from "./commoncomponents/Testimonal";
import Hero from "./commoncomponents/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuOrderSection />
      <TestimonialSection />
    </>
  );
}

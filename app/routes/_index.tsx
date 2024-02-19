import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/main/Footer";
import MainSection from "~/components/main/MainSection";
import NavBar from "~/components/commons/NavBar";
import PricingSection from "~/components/main/PricingSection";
import PropertiesSection from "~/components/main/PropertiesSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Healthy Glow" },
    { name: "description", content: "Description of the page" },
  ];
};


export default function Index() {
  return (
    <body className="leading-normal tracking-normal text-white gradient">
      <NavBar />
      <MainSection />
      <PropertiesSection />
      <PricingSection />
      <Footer />
    </body>
  );
}

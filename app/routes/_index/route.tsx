import { ActionFunctionArgs } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/landing/Footer";
import MainSection from "~/components/landing/main-section/MainSection";
import NavBar from "~/components/commons/NavBar";
import PricingSection from "~/components/landing/PricingSection";
import PropertiesSection from "~/components/landing/PropertiesSection";
import {z} from 'zod'
import { validateAction } from "~/utils/validators/zod";
import { registerFormSchema } from "~/utils/forms-schemas/landing";
export const meta: MetaFunction = () => {
  return [
    { title: "Healthy Glow" },
    { name: "description", content: "Description of the page" },
  ];
};

export const action = async ({
    params,
    request,
  }: ActionFunctionArgs) => {
    const {formData, errors} = await validateAction(request, registerFormSchema)
    if (errors) {
      return {
        errors
      }
    }
   
    
    return {}
  };

export default function Index() {
  return (
    <body className="leading-normal tracking-normal text-white">
      <NavBar />
      <MainSection />
      <PropertiesSection />
      <PricingSection />
      <Footer />
    </body>
  );
}
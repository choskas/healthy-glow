import { ActionFunctionArgs, json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/landing/Footer";
import MainSection from "~/components/landing/main-section/MainSection";
import NavBar from "~/components/commons/NavBar";
import PricingSection from "~/components/landing/PricingSection";
import PropertiesSection from "~/components/landing/PropertiesSection";
import { z } from "zod";
import { validateAction } from "~/utils/validators/zod";
import { registerFormSchema } from "~/utils/forms-schemas/landing";
import db from "~/utils/db";
import { users } from "~/utils/db/schema";
export const meta: MetaFunction = () => {
  return [
    { title: "Healthy Glow" },
    { name: "description", content: "Description of the page" },
  ];
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const { formData, errors } = await validateAction(
    request,
    registerFormSchema
  );
  const queryParams = new URL(request.url).searchParams;

  const amount = queryParams.get("amount") ? queryParams.get("amount") : null;
  const months = queryParams.get("months") ? queryParams.get("months") : null;

  if (errors) {
    return {
      errors,
      status: 400,
    };
  }

  const response = await db
    .insert(users)
    .values({...formData, creditAmount: amount, creditMonths: months });
  return json({ response, status: 200 });
};

export default function Index() {
  return (
    <main className="leading-normal tracking-normal text-white">
      <MainSection />
      <PropertiesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}

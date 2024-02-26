import { ActionFunctionArgs, json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import MainSection from "~/components/landing/main-section/MainSection";
import PricingSection from "~/components/landing/PricingSection";
import PropertiesSection from "~/components/landing/PropertiesSection";
import { validateAction } from "~/utils/validators/zod";
import { registerFormSchema } from "~/utils/forms-schemas/landing";
import db from "~/utils/db";
import { users } from "~/utils/db/schema";
import { LandingProvider } from "~/context/landing";
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

  if (errors) {
    return {
      errors,
      status: 400,
    };
  }

  const response = await db
    .insert(users)
    .values({ ...formData });
  return json({ response, status: 200 });
};

export default function Index() {
  return (
    <main className="leading-normal tracking-normal text-white">
      <LandingProvider>
        <MainSection />
        <PropertiesSection />
        <PricingSection />
      </LandingProvider>
    </main>
  );
}

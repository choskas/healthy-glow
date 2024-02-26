import {
  Form as RemixForm,
  useActionData,
  useNavigation,
} from "@remix-run/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { RegisterActionData } from "./types";
import { useContext } from "react";
import { LandingContext } from "~/context/landing";
import useRegister from "../hooks/useRegister";
import { ReloadIcon } from "@radix-ui/react-icons";

const RegisterForm = () => {
  const { months, amount } = useContext(LandingContext);
  const navigation = useNavigation();
  const { form } = useRegister();
  const actionData = useActionData<RegisterActionData>();

  return (
    <RemixForm method="post" className="space-y-8" id="register-form">
      <Form {...form}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage>
                {actionData?.errors && actionData.errors[field.name]}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage>
                {actionData?.errors && actionData.errors[field.name]}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage>
                {actionData?.errors && actionData.errors[field.name]}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono celular</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage>
                {actionData?.errors && actionData.errors[field.name]}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="doctorCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código promocional</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage>
                {actionData?.errors && actionData.errors[field.name]}
              </FormMessage>
            </FormItem>
          )}
        />
        <input type="hidden" name="creditMonths" value={months[0].toString()} />
        <input type="hidden" name="creditAmount" value={amount[0].toString()} />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={navigation.state === "submitting"}
            className="mx-auto flex items-center lg:mx-0 hover:underline text-white bg-black font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {navigation.state === "submitting" && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Enviar
          </button>
        </div>
      </Form>
    </RemixForm>
  );
};

export default RegisterForm;

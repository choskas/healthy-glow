import { Form as RemixForm, useActionData, useParams, useSearchParams} from "@remix-run/react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerFormSchema } from "~/utils/forms-schemas/landing";

const RegisterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
          name: "",
          lastName: "",
          email: "",
          phone: "",
          doctorCode: "",
        },
      });

  const actionData = useActionData<RegisterActionData>()
  return (
    <RemixForm method="post"  className="space-y-8" id="register-form">
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
              <FormMessage>{actionData?.errors && actionData.errors[field.name]}</FormMessage>
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
              <FormMessage>{actionData?.errors && actionData.errors[field.name]}</FormMessage>
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
              <FormMessage>{actionData?.errors && actionData.errors[field.name]}</FormMessage>
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
              <FormMessage>{actionData?.errors && actionData.errors[field.name]}</FormMessage>
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
              <FormMessage>{actionData?.errors && actionData.errors[field.name]}</FormMessage>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="mx-auto lg:mx-0 hover:underline text-white bg-black font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Enviar
          </button>
        </div>

    </Form>
    </RemixForm>
  );
};

export default RegisterForm;

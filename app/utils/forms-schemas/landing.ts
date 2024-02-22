import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email("Introduce un email válido"),
  phone: z
    .string()
    .min(10, "Tu número de télefono debe de ser de 10 digitos")
    .max(10, "Tu número de télefono debe de ser de 10 digitos"),
  doctorCode: z
    .string()
    .min(4, "El código es de minimo 4 digitos")
    .max(5, "El código es inválido"),
});

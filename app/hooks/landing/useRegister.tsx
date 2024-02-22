import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useRegister = () => {
    const formSchema = z.object({
        name: z.string().min(2).max(50),
        lastName: z.string().min(2).max(50),
        email: z.string().email("Introduce un email válido"),
        phone: z.string().min(10, "Tu número de télefono debe de ser de 10 digitos").max(10, "Tu número de télefono debe de ser de 10 digitos"),
        doctorCode: z.string().min(4, "El código es de minimo 4 digitos").max(5, "El código es inválido")
      });
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          lastName: "",
          email: "",
          phone: "",
          doctorCode: ""
        },
      });
    
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
      }
      
      return {
        form,
        onSubmit
      }
}

export default useRegister
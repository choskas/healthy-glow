import { zodResolver } from "@hookform/resolvers/zod";
import { useActionData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LandingContext } from "~/context/landing";
import { registerFormSchema } from "~/utils/forms-schemas/landing";
import { RegisterActionData } from "../main-section/types";
import { useToast } from "~/components/ui/use-toast";

const useRegister = () => {
  const { isOpen, setIsOpen, setAmount, setMonths } =
    useContext(LandingContext);
  const { toast } = useToast();
  const actionData = useActionData<RegisterActionData>();

  const onClickGetItNow = () => setIsOpen(!isOpen);

  const onChangeAmountSlider = (value: number[]) => {
    setAmount(value);
  };
  const onChangeLimitSlider = (value: number[]) => {
    setMonths(value);
  };

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      doctorCode: "",
      creditMonths: undefined,
      creditAmount: undefined,
    },
  });

  useEffect(() => {
    // @ts-ignore
    if (actionData?.status === 200) {
      setIsOpen(false);
      toast({
        title: "Tu información se ha enviado.",
        description: "Pronto nos pondremos en contacto contigo.",
      });
    }
    // @ts-ignore
  }, [actionData?.status]);

  return {
    onClickGetItNow,
    onChangeAmountSlider,
    onChangeLimitSlider,
    form,
  };
};

export default useRegister;

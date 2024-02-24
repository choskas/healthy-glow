import { useSearchParams } from "@remix-run/react";
import { useState } from "react";
import {
  Card,
  CardContent,
} from "~/components/ui/card";
import { Slider } from "~/components/ui/slider";
import { APR } from "~/constants";
import { getMonthlyPayment } from "~/utils/commons";
import { formatMoney } from "~/utils/commons/formatters";

const SimulatorCard = () => {
  const [searchParams, setSearchParams] =  useSearchParams()
  
  const [amount, setAmount] = useState([0]);
  const [months, setMonths] = useState([0])


  const onChangeAmountSlider = (value: number[]) => {
    setSearchParams(searchParams => {
        searchParams.set("amount", value[0].toString());
        return searchParams;
      });
    setAmount(value);
  };
  const onChangeLimitSlider = (value: number[]) => {
    setSearchParams(searchParams => {
        searchParams.set("months", value[0].toString());
        return searchParams;
      });
    setMonths(value);
  };

  return (
    <Card className="md:w-2/3 w-full py-[24px]">
      <CardContent>
        <section className="flex justify-between">
          <p className="mb-[24px]">Monto</p>
          <p>{formatMoney(amount ? amount[0] : 0)}</p>
        </section>
        <section className="mt-[24px]">
          <Slider
            className="cursor-pointer"
        
            max={300000}
            step={5000}
            onValueChange={onChangeAmountSlider}
          />
          <div className="flex justify-between mt-[12px]">
            <p>$ 0</p>
            <p>{formatMoney(300000)}</p>
          </div>
        </section>
        <section className="flex justify-between mt-[24px]">
          <p className="mb-[24px]">Meses</p>
          <p>{months}</p>
        </section>
        <section className="mt-[24px]">
          <Slider
            className="cursor-pointer"
         
            max={24}
            step={1}
            onValueChange={onChangeLimitSlider}
          />
          <div className="flex justify-between mt-[12px]">
            <p>0</p>
            <p>24</p>
          </div>
        </section>
        <section className="flex flex-col mt-[24px]">
          <div className="flex justify-between mt-[12px]">
            <p>Interés a pagar *</p>
            <p>{formatMoney(getMonthlyPayment(amount[0], APR, months[0]).monthlyInterest, true) }</p>
          </div>
          <div className="flex justify-between mt-[12px]">
            <p>Monto a pagar *</p>
            <p>{formatMoney(getMonthlyPayment(amount[0], APR, months[0]).monthlyTotal, true) }</p>
          </div>
          <div className="flex justify-between mt-[12px]">
            <p>Comisiones</p>
            <p></p>
          </div>
        </section>
        <p className="mt-[24px] text-[10px] text-left">* Aproximado mensual</p>
        <p className="text-[10px] text-left">Tasa Fija Anual Simple: {APR}%.</p>
        <button
            id="navAction"
            onClick={() => {
              const button = document.getElementById("register-button");
              button?.click();
            }}
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-[24px] py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Solicitalo ahora
          </button>
      </CardContent>
    </Card>
  );
};

export default SimulatorCard;

import { createContext, useState } from "react";
import { LandingContextT } from "./types";
import { boolean } from "drizzle-orm/mysql-core";

const initBalance = {
  user: 0,
  balance: 0,
  available_balance: 0,
  clabe: "0",
  status: "AVAILABLE",
  last_update: "2023-04-11T22:45:15.282538Z",
};

const LandingContext = createContext<LandingContextT>({
  amount: [0],
  setAmount: () => {},
  months: [0],
  setMonths: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

const LandingProvider = ({ children }: { children: React.ReactNode }) => {
  const [amount, setAmount] = useState([0]);
  const [months, setMonths] = useState([0]);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <LandingContext.Provider
      value={{
        amount,
        setAmount,
        months,
        setMonths,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

export { LandingContext, LandingProvider };

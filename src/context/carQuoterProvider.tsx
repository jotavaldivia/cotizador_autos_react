import { PropsWithChildren, createContext, useState } from "react";
import { quoterType } from "../models/quoter";

const INITIAL_STATE = {
  carBrand: "",
  year: 0,
  plan: "",
};

const CarQuoterContext = createContext({});

const CarQuoterProvider = ({ children }: PropsWithChildren) => {
  const [carQuoter, setCarQuoter] = useState<quoterType>(INITIAL_STATE);

  return (
    <CarQuoterContext.Provider value={{ carQuoter, setCarQuoter }}>
      {children}
    </CarQuoterContext.Provider>
  );
};

export { CarQuoterContext, CarQuoterProvider };

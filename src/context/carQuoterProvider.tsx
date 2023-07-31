import { PropsWithChildren, createContext, useState } from "react";
import { quoterType } from "../models/quoter";

const INITIAL_STATE = {
  carBrand: "",
  year: "",
  plan: "",
};

const CarQuoterContext = createContext({});

const CarQuoterProvider = ({ children }: PropsWithChildren) => {
  const [carQuoter, setCarQuoter] = useState<quoterType>(INITIAL_STATE);
  const [error, setError] = useState<boolean>(false);

  return (
    <CarQuoterContext.Provider
      value={{ carQuoter, setCarQuoter, error, setError }}
    >
      {children}
    </CarQuoterContext.Provider>
  );
};

export { CarQuoterContext, CarQuoterProvider };

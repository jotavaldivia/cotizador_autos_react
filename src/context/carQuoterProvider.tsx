import { PropsWithChildren, createContext, useState } from "react";
import { quoterType } from "../models/quoter";
import { getDiferenceYaer } from "../helpers/getDiferenceYaer";


const diference = getDiferenceYaer(2023);
console.log(diference)


const INITIAL_STATE = {
  carBrand: "",
  year: "",
  plan: "",
};

const CarQuoterContext = createContext({});

const CarQuoterProvider = ({ children }: PropsWithChildren) => {
  const [carQuoter, setCarQuoter] = useState<quoterType>(INITIAL_STATE);
  const [error, setError] = useState<boolean>(false);

  const quoter = () => {
    const diferenceYear = getDiferenceYaer(parseInt(carQuoter.year));
    console.log(diferenceYear)
    let result = 2000;
    result -= ((diferenceYear * 3) * result) / 100;
    console.log(result)
    }
    

  return (
    <CarQuoterContext.Provider
      value={{ carQuoter, setCarQuoter, error, setError,quoter }}
    >
      {children}
    </CarQuoterContext.Provider>
  );
};

export { CarQuoterContext, CarQuoterProvider };

import { ChangeEvent, useContext } from "react";
import { CarQuoterContext } from "../context/carQuoterProvider";
import { quoterContextType } from "../models/quoter";

const useCarQuoter = () => {
  const { carQuoter, setCarQuoter, error, setError,quoter } = useContext(
    CarQuoterContext
  ) as quoterContextType;

  const hanldeChangeState = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ): void => {
    setCarQuoter({
      ...carQuoter,
      [e.target.name]: e.target.value,
    });
    console.log(carQuoter);
  };

  return { carQuoter, setCarQuoter, hanldeChangeState, error, setError , quoter};
};

export default useCarQuoter;

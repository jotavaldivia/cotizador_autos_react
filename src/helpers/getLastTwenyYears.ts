import { YEARMAX } from "../constants";

export const getLastTwenyYears = () => {
  const years = [];
  for (let i = 0; i < 20; i++) {
    years.push({ id: YEARMAX - i, name: YEARMAX - i });
  }
  return years;
};

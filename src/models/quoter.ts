export type quoterType = {
  carBrand: string;
  year: number;
  plan: string;
};

export type quoterContextType = {
  carQuoter: Array<quoterType>;
  setCarQuoter: (value: Array<quoterType>) => void;
};

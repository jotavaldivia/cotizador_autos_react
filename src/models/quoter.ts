export type quoterType = {
  carBrand: string;
  year: string;
  plan: string;
};

export type quoterContextType = {
  carQuoter: quoterType;
  setCarQuoter: (value: quoterType) => void;
  error: boolean;
  setError: (value: boolean) => void;
};

import { CAR_BRANDS, PLANS } from "../constants";
import { getLastTwenyYears } from "../utilities";

console.log(getLastTwenyYears());
const Form = () => {
  return (
    <>
      <form action="">
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Marca --</option>
            {CAR_BRANDS.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Año --</option>
            {getLastTwenyYears().map((year) => (
              <option key={year.id} value={year.id}>
                {year.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <label key={plan.id} className="flex-1">
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  className="mr-2"
                />
                {plan.name}
              </label>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 text-white 
          uppercase py-2 px-10 text-center rounded-lg font-bold cursor-pointer"
        />
      </form>
    </>
  );
};

export default Form;

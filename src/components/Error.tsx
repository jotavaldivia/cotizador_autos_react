type Porps = {
  text: string;
};

const Error = ({ text }: Porps) => {
  return (
    <>
      <p className="text-center text-red-500 mt-5 border border-red-500 p-2">
        {text}
      </p>
    </>
  );
};

export default Error;

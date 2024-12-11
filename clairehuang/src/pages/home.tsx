import { WhatOthersSay } from "../components/what-others-say";
const Home = () => {
  return (
    <div>
      <div className="flex w-full h-screen items-center justify-center">
        <img src="./icon.png" alt="memoji" />
        <h1 className="text-dark-navy mynerve text-[100px]">
          CLAIRE <br /> HUANG
        </h1>
      </div>
      <div className="flex flex-col h-screen items-center  justify-center">
        <h1 className="text-dark-navy mynerve text-[100px]">WHAT OTHERS SAY</h1>
        <WhatOthersSay />
      </div>
    </div>
  );
};

export default Home;

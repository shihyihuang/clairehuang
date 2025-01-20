import { WhatOthersSay } from "../components/what-others-say";
import { HowIGotHere } from "../components/how-i-got-here";
import { WhatIOffer } from "../components/what-i-offer";

const Home = () => {
  return (
    <div>
      <div className="flex max-w-screen h-screen items-center justify-center">
        <img
          src="./icon.png"
          alt="memoji"
          className="w-[140px] md:w-[180px] l:w-[230px] mr-m "
        />
        <h1 className="text-dark-navy mynerve text-center text-[60px] md:text-[80px] l:text-[100px]">
          CLAIRE <br /> HUANG
        </h1>
      </div>
      <div className="flex flex-col h-screen items-center justify-center bg-light-brown px-m l:px-l">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px]">
          WHAT OTHERS SAY
        </h1>
        <WhatOthersSay />
      </div>
      <div className="flex flex-col h-screen items-center justify-between py-xl md:py-l l:py-xxl  px-m md:px-l">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px]">
          WHAT I OFFER
        </h1>
        <WhatIOffer />
      </div>
      <div className="flex flex-col h-screen items-center  justify-center bg-light-brown">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] mb-s">
          HOW I GOT HERE
        </h1>
        <HowIGotHere />
      </div>
    </div>
  );
};

export default Home;

import { WhatOthersSay } from "../components/what-others-say";
import { HowIGotHere } from "../components/how-i-got-here";
import { WhatIOffer } from "../components/what-i-offer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Claire Huang";
  }, []);

  const landingVideoClass =
    "absolute inset-0 w-full h-full object-cover opacity-40";

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="./landing-l.mov"
          className={`${landingVideoClass} hidden l:block`}
          autoPlay
          loop={true}
          muted
          playsInline
        />
        <video
          src="./landing-s.mov"
          className={`${landingVideoClass} block l:hidden`}
          autoPlay
          loop={true}
          muted
          playsInline
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px]">
            CLAIRE HUANG
          </h1>
          <h1 className="text-dark-navy mynerve text-[30px] md:text-[40px] l:text-[50px]">
            {" "}
            Software Engineer
          </h1>
        </div>
      </div>

      <div className="flex flex-col h-full min-h-screen items-center justify-center bg-light-brown px-m l:px-l">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          WHAT OTHERS SAY
        </h1>
        <WhatOthersSay />
      </div>
      <div className="flex flex-col h-full min-h-screen items-center justify-between py-xl md:py-l l:py-xxl px-m md:px-l">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          WHAT I OFFER
        </h1>
        <WhatIOffer />
      </div>
      <div className="flex flex-col h-full min-h-screen items-center  justify-center bg-light-brown px-s l:px-m">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          HOW I GOT HERE
        </h1>
        <HowIGotHere />
      </div>
    </div>
  );
};

export default Home;

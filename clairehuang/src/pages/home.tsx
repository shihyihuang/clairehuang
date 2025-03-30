import { Landing } from "../components/landing";
import { WhatOthersSay } from "../components/testimonial/what-others-say";
import { HowIGotHere } from "../components/education/how-i-got-here";
import { WhatIOffer } from "../components/skills/what-i-offer";
import { WhatIveDone } from "../components/works/what-ive-done";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

interface IHome {
  setIsOpen: (isOpen: boolean) => void;
}

const Home = (props: IHome) => {
  const { setIsOpen } = props;

  useEffect(() => {
    document.title = "Claire Huang";
  }, []);

  return (
    <div>
      <ToastContainer position="bottom-right" />
      {/* landing main */}
      <Landing />
      {/* testimonial */}
      <div className="flex flex-col h-full min-h-screen items-center justify-center px-m l:px-l">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          WHAT OTHERS SAY
        </h1>
        <WhatOthersSay />
      </div>
      {/* skills */}
      <div className="flex flex-col h-full min-h-screen items-center justify-between bg-light-brown py-xl md:py-l l:py-xxl px-m md:px-l">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          WHAT I OFFER
        </h1>
        <WhatIOffer />
      </div>
      {/* work experience */}
      <div className="flex flex-col h-full min-h-screen items-center justify-center py-xl md:py-l l:py-xxl px-s l:px-m ">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          WHAT I'VE DONE
        </h1>
        <WhatIveDone setIsOpen={setIsOpen} />
      </div>
      {/* education */}
      <div className="flex flex-col h-full min-h-screen items-center  justify-center bg-light-brown py-xl md:py-l l:py-xxl px-s l:px-m">
        <h1 className="text-dark-navy mynerve text-[50px] md:text-[80px] l:text-[100px] leading-none pb-m">
          HOW I GOT HERE
        </h1>
        <HowIGotHere />
      </div>
    </div>
  );
};

export default Home;

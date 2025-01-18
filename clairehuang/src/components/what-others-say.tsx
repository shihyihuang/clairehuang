// interface IWhatOthersSay {}
import { TestimonialCard } from "./testimonial-card";
import { TESTIMONOAL_LIST } from "../config/testimonial";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../styles/testimonial.css";

const testimonialList = TESTIMONOAL_LIST;

export const WhatOthersSay = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="max-w-full overflow-hidden">
      <motion.div className="flex justify-center items-center pb-l">
        <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
      </motion.div>

      <ul className="flex flex-nowrap overflow-x-auto gap-space-4" ref={ref}>
        {testimonialList.map((content, index) => (
          <li>
            <TestimonialCard key={index} content={content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

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
    <div>
      <motion.div className="flex justify-center items-center gap-4 pb-24">
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

      <ul className="flex gap-space-4 " ref={ref}>
        {testimonialList.map((content, index) => (
          <TestimonialCard key={index} content={content} />
        ))}
      </ul>
    </div>
  );
};

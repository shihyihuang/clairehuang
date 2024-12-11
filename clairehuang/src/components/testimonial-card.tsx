import { ITestimonial } from "../types/testimonial";
import { FaStar } from "react-icons/fa";

interface ITestimonialCard {
  content: ITestimonial;
}

export const TestimonialCard = (props: ITestimonialCard) => {
  const { content } = props;
  return (
    <div className="flex w-[320px] md:w-[350px] l:w-[400px] h-[280px] shadow-xl bg-block-white rounded-[8px] p-space-4 ">
      <div className="flex flex-col justify-center gap-space-3">
        <div className="flex ">
          <img
            src={content.avatar}
            alt="profile"
            className="rounded-full w-[50px] h-[50px]"
          />
          <div className="flex flex-col items-start justify-center ml-space-2">
            <p className="playpen-san-content text-dark-brown text-ml font-[500]">
              {content.name}
            </p>
            <p className="playpen-san-content text-light-brown text-m font-[400]">
              {content.position}
            </p>
          </div>
        </div>
        <div className="flex text-warning-yellow gap-xxs">
          {Array.from({ length: content.score }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <p className="playpen-san-content text-dark-brown text-m font-[400] overflow-y-auto max-h-[200px]">
          {" "}
          {content.content}{" "}
        </p>
      </div>
    </div>
  );
};

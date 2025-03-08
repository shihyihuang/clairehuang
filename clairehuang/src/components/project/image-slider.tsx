import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

interface IImageSlider {
  images: string[];
  projectName: string;
}
export const ImageSlider = (props: IImageSlider) => {
  const { images, projectName } = props;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const PetPlanningClass = "w-full h-[50vh] object-contain";

  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    infinite: true,
  };
  return (
    <div className="flex justify-center items-center w-full rounded-m relative">
      <div className="w-[40vh] md:w-[70vh] l:w-[80vh] rounded-m">
        <Slider
          {...settings}
          afterChange={(index: number) =>
            setCurrentSlideIndex(Number(images[index].substr(-5, 1)))
          }>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center ">
              <img
                src={image}
                alt={`${projectName}${index + 1}`}
                className={`border-none rounded-m ${
                  projectName === "PET Planning" || "Enterprise Network Design"
                    ? PetPlanningClass
                    : "w-[50vh] md:w-[70vh] l:w-[80vh]"
                }`}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-2 flex w-full items-end justify-center flex-row p-space-4">
          {[...Array(images.length)].map((_, i) => (
            <div
              key={i}
              className={`w-[8px] h-[8px] rounded-full mr-space-2 ${
                currentSlideIndex === i + 1 ? "bg-light-brown" : "bg-grey-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

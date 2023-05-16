// library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// style imports & local
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';

// data
import { sliderData } from '../data';

const MainSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mainSlider h-full bg-gradient-to-br from-white to-gray-200 dark:bg-primary dark:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden shadow-md dark:drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col lg:flex-row gap-y-[15px] lg:gap-x-[30px] items-center w-full h-full p-[20px] lg:p-[60px] md:pr-[5px]">
              <div className="flex-1">
                <h2 className="uppercase mb-1 text-center lg:text-left">
                  {slide.preTitle}
                </h2>
                <p className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 lg:mb-20">
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3}
                </p>
                <button className="btn btn-accent mx-auto lg:mx-0">
                  {slide.btnText}
                </button>
              </div>
              <div className="flex-1 justify-end">
                <img
                  className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] -rotate-12 object-contain"
                  src={slide.img}
                  alt={slide.preTitle}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default MainSlider;

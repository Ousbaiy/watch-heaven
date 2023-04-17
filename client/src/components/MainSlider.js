// library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// style imports & local
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';

// img
import Home from '../img/home.png';

// data
const sliderData = [
  {
    id: 1,
    img: Home,
    preTitle: 'Special offer',
    titlePart1: 'save 20%',
    titlePart2: 'on your',
    titlePart3: 'first order',
    btnText: 'shop now',
  },
  {
    id: 2,
    img: Home,
    preTitle: 'Special offer',
    titlePart1: 'save 20%',
    titlePart2: 'on your',
    titlePart3: 'first order',
    btnText: 'shop now',
  },
  {
    id: 3,
    img: Home,
    preTitle: 'Special offer',
    titlePart1: 'save 20%',
    titlePart2: 'on your',
    titlePart3: 'first order',
    btnText: 'shop now',
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>slide</SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default MainSlider;

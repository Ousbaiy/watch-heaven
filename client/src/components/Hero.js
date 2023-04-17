// components
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';

// images
import PromoImg1 from '../img/promo1.png';
import PromoImg2 from '../img/promo2.png';

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar  */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider  */}
          <div className="w-full max-w-lg lg:max-w-[730px] mx-auto">
            <MainSlider />
          </div>
          {/* promos */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6 flex justify-between">
              <div className="flex flex-col max-w-[160px] h-full justify-center ">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  save 35% all casio watches
                </div>
                <a href="#a" className='uppercase text-accent'>Shop now</a>
              </div>
              <img
                className="h-[140px] w-[140px] mt-5 object-contain"
                src={PromoImg1}
                alt="promo watch"
              />
            </div>
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6 flex justify-between">
              <div className="flex flex-col max-w-[160px] h-full justify-center ">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  save 25% all rolex watches
                </div>
                <a href="#a" className='uppercase text-accent'>Shop now</a>
              </div>
              <img
                className="h-[140px] w-[140px] mt-5 object-contain"
                src={PromoImg2}
                alt="promo watch"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

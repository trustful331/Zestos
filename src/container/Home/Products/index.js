import { useEffect } from "react";
import AOS from "aos";
export default function Products() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="container md:mt-12  mt-10 pb-[50px] comfort 2xl:px-0 px-[15px]">
        <h2 className="xl:text-[86px] lg:text-[66px] md:text-[56px] sm:text-[46px] text-3xl font-extrabold md:mt-[90px] mt-10 md:mb-[80px] mb-5 text-center leading-[1]">
          The Comfort of Your{" "}
          <span className="bg-gradient-to-r font-ananda from-yellow to-green text-transparent bg-clip-text font-extrabold inline-block">
            Home
          </span>
        </h2>
        <p className="xl:text-[18px] text-[16px] text-black/50 leading-[30px] xl:w-[50vw] mx-auto text-center mb-24">
          Living in a new city is very challenging for everyone and notably, if
          you’re a young person it will be quite scary as well. Missing your
          comforts of home, the warmness, the emotions and it is difficult to
          adjust. Worry no more because Cozy Stay helps you locate the optimal
          coliving spaces that add comfort and solace to your home by mirroring
          the amenities you call your own.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8">
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_1.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Clean bathroom
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_2.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Neat environment
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_3.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Cozy beds
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_4.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Spacious cupboard
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_5.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Desks
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_6.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Entertainment area
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_1.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Clean restrooms
            </h4>
          </div>
          <div className={`relative `} data-aos="fade-up">
            <div className="rounded-xl p-3 bg-white">
              <img
                src="assets/images/product_2.png"
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </div>
            <h4 className="text-[.95rem] text-[#6f726f] font-normal font-work text-center -mt-8">
              Clean restrooms
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

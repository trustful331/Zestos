import Banner from "./Banner";
import { BiBed } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { TbBuildingEstate, TbBuildingSkyscraper } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Banner */}
      <Banner />
      <div className="border-t">
        <div className="flex justify-around items-center p-[30px_70px] container">
          <div className="flex gap-2 items-center">
            <TbBuildingEstate size={34} className="text-green" />
            <h6 className="text-[24px] leading-[24px] text-[#232728] font-semibold">
              24+
            </h6>
            <p className="text-[18px] text-[#232728]/70 font-normal">Cities</p>
          </div>
          <div className="flex gap-2 items-center">
            <TbBuildingSkyscraper size={34} className="text-green" />
            <h6 className="text-[24px] leading-[24px] text-[#232728] font-semibold">
              450+
            </h6>
            <p className="text-[18px] text-[#232728]/70 font-normal">
              Residences
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BiBed size={34} className="text-green" />
            <h6 className="text-[24px] leading-[24px] text-[#232728] font-semibold">
              70,000+
            </h6>
            <p className="text-[18px] text-[#232728]/70 font-normal">Beds</p>
          </div>
        </div>
      </div>
      <div className="relative mt-[200px]">
        <img
          src="/assets/images/device.png"
          className={`w-[24%] absolute transition-all duration-[800ms] ${
            scroll ? "bottom-0 left-[15%]" : "left-0 -bottom-52"
          }`}
        />
        <img
          src="/assets/images/device_bg.jpg"
          className="w-full h-[800px] object-cover"
        />
        <img
          src="/assets/images/device.png"
          className={`w-[24%] absolute transition-all duration-[800ms] ${
            scroll ? "bottom-0 right-[15%]" : "right-0 -bottom-52"
          }  `}
        />
      </div>
      <div className="container mt-12">
        <h1 className="text-[86px] font-bold mt-[90px] mb-[80px] text-center">
          The Comfort of Your Home
        </h1>
        <p className="text-[18px] text-black/50 leading-[30px] w-[50vw] mx-auto text-center mb-14">
          Living in a new city is very challenging for everyone and notably, if
          you’re a young person it will be quite scary as well. Missing your
          comforts of home, the warmness, the emotions and it is difficult to
          adjust. Worry no more because Cozy Stay helps you locate the optimal
          coliving spaces that add comfort and solace to your home by mirroring
          the amenities you call your own.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div data-aos="zoom-in-right">
            <div className="rounded-xl p-3 bg-white shadow-sm">
              <img src="assets/images/demo.png" className="rounded-xl w-full" />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Title title title
            </h4>
          </div>
          <div data-aos="zoom-in-up">
            <div className="rounded-xl p-3 bg-white shadow-sm">
              <img src="assets/images/demo.png" className="rounded-xl w-full" />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Title title title
            </h4>
          </div>
          <div data-aos="zoom-in-left">
            <div className="rounded-xl p-3 bg-white shadow-sm">
              <img src="assets/images/demo.png" className="rounded-xl w-full" />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Title title title
            </h4>
          </div>
          <div data-aos="zoom-in-right">
            <div className="rounded-xl p-3 bg-white shadow-sm">
              <img src="assets/images/demo.png" className="rounded-xl w-full" />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Title title title
            </h4>
          </div>
          <div data-aos="zoom-in-up">
            <div className="rounded-xl p-3 bg-white shadow-sm">
              <img src="assets/images/demo.png" className="rounded-xl w-full" />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Title title title
            </h4>
          </div>
          <div data-aos="zoom-in-left">
            <div className="rounded-xl p-3 bg-white shadow-sm">
              <img src="assets/images/demo.png" className="rounded-xl w-full" />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Title title title
            </h4>
          </div>
        </div>
      </div>
      <div
        className="relative mt-[200px] cities-bg flex items-end"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-4"></div>
            <div className="col-span-8">
              <div className="grid grid-cols-3 gap-5 mb-24 items-center">
                <div>
                  <img
                    src="/assets/images/kochi.png"
                    className="w-full animate-bounce"
                  />
                </div>
                <div>
                  <img src="/assets/images/bang.png" className="w-full" />
                </div>
                <div>
                  <img
                    src="/assets/images/chennai.png"
                    className="w-full animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img src="/assets/images/clipper.png" className="w-full object-cover" /> */}
      </div>
    </div>
  );
}

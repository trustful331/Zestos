import Banner from "./Banner";
import React, { useEffect, useState } from "react";
import { BiBed } from "react-icons/bi";
import { TbBuildingEstate, TbBuildingSkyscraper } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./Products";
import Features from "./Features";
import BeatStress from "./BeatStress";
import LiveLoveLife from "./LiveLoveLife";
import App from "./App";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const sections = ["devices", "comfort", "features", "app-bg"];
      const newVisibleSections = [];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementsByClassName(sections[i])[0];
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const visiblePercentage =
          (Math.min(
            window.innerHeight - Math.max(sectionTop, 0),
            sectionHeight
          ) /
            sectionHeight) *
          100;
        let isVisible;
        if (sections[i] == "devices") {
          isVisible = visiblePercentage >= 30;
        } else if (sections[i] == "comfort") {
          isVisible = visiblePercentage >= 60;
        } else if (sections[i] == "features") {
          isVisible = visiblePercentage >= 40;
        } else if (sections[i] == "app-bg") {
          isVisible = visiblePercentage >= 50;
        }

        if (isVisible) {
          newVisibleSections.push(sections[i]);
        }
      }
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Banner */}
      <Banner />
      <div className="border-t md:pt-0 pt-3">
        <div className="flex flex-wrap lg:justify-around lg:gap-0 gap-8 items-center justify-center lg:p-[30px_70px] sm:p-[30px] p-[15px] container  md:pt-0 pt-10">
          <div className="lg:w-auto md:w-[32%] w-full flex lg:flex-row flex-col lg:gap-2 gap-4 items-center lg:shadow-none shadow-lg rounded-[24px] lg:p-0 md:p-8 p-5">
            <TbBuildingEstate size={34} className="text-green lg:mb-0 mb-2" />
            <h6 className="lg:text-[24px] md:text-[34px] sm:text-[24px] text-[16px] leading-[24px] text-[#232728] font-semibold">
              24+
            </h6>
            <p className="lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px] text-[#232728]/70 font-normal">
              Cities
            </p>
          </div>
          <div className="lg:w-auto md:w-[32%] w-full flex lg:flex-row flex-col lg:gap-2 gap-4 items-center lg:shadow-none shadow-lg rounded-[24px] lg:p-0 md:p-8 p-5">
            <TbBuildingSkyscraper
              size={34}
              className="text-green lg:mb-0 mb-2"
            />
            <h6 className="lg:text-[24px] md:text-[34px] sm:text-[24px] text-[16px] leading-[24px] text-[#232728] font-semibold">
              450+
            </h6>
            <p className="lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px] text-[#232728]/70 font-normal">
              Residences
            </p>
          </div>
          <div className="lg:w-auto md:w-[32%] w-full flex lg:flex-row flex-col lg:gap-2 gap-4 items-center lg:shadow-none shadow-lg rounded-[24px] lg:p-0 md:p-8 p-5">
            <BiBed size={34} className="text-green lg:mb-0 mb-2" />
            <h6 className="lg:text-[24px] md:text-[34px] sm:text-[24px] text-[16px] leading-[24px] text-[#232728] font-semibold">
              70,000+
            </h6>
            <p className="lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px] text-[#232728]/70 font-normal">
              Beds
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-12">
        <h2 className="xl:text-[6rem] md:text-[4rem] text-[2rem] font-extrabold text-center md:px-0 sm:px-6 px-[15px]">
          A Place Like{" "}
          <span className="bg-gradient-to-r from-yellow to-green text-transparent bg-clip-text">
            Home
          </span>
        </h2>
        <div className="text-center md:min-w-[40vw] md:max-w-[20vw] mx-auto md:px-0 sm:px-6 px-[15px]">
          <h5 className="md:text-[19px] text-[18px] my-4 font-semibold text-black">
            Discover Coliving Spaces That Resemble Your Home.
          </h5>
          <p className="lg:text-[23px] md:text-[16px] text-[14px] font-normal lg:leading-[37px] leading-[28px] text-black">
            Finding perfect coliving spaces in a new city can be tiring. If you
            are a new bird in the city, then say no more. Before you say I miss
            my home, hear us out. Cozy Stay offers you a complete co-living
            space with a hassle-free, cost-effective, and peaceful living
            experience, catering to individual needs. Now, no more worries about
            the hygiene or the amenities you might require, coz we got it all
            under covered.
          </p>
          <button className="mt-11 mb-12 bg-green rounded-full text-white px-16 py-3.5 border shadow-lg flex items-center gap-3 mx-auto">
            Book Now
          </button>
        </div>
      </div>
      <div className="relative md:mt-[200px] devices">
        <div className="bg-black/50 absolute h-full w-full z-10" />
        <img
          src="/assets/images/device.png"
          className={`max-w-[451px] w-full absolute transition-all duration-[800ms] z-30  xl:translate-x-0 -translate-x-1/2 ${
            visibleSections.includes("devices")
              ? "bottom-0 xl:left-[15%] left-1/2"
              : "xl:left-0 -bottom-52  left-1/2"
          }`}
        />
        <img
          src="assets/images/device_inner.png"
          className="absolute xl:left-[12%] bottom-[29%] w-[541px] z-20  left-1/2 xl:translate-x-0 -translate-x-1/2 transition-all duration-[800ms]"
        />
        <img
          src="/assets/images/device_bg.jpg"
          className="w-full h-[800px] object-cover"
        />
        <img
          src="assets/images/device_inner.png"
          className="absolute right-[12%] bottom-[29%] w-[541px] xl:opacity-100 opacity-0 z-20"
        />
        <img
          src="/assets/images/device.png"
          className={`w-[451px] absolute transition-all duration-[800ms] xl:opacity-100 opacity-0 z-30 ${
            visibleSections.includes("devices")
              ? "bottom-0 right-[15%]"
              : "right-0 -bottom-52"
          }`}
        />
      </div>
      <Products visibleSections={visibleSections} />
      <Features visibleSections={visibleSections} />
      <div
        className="relative md:mt-[200px] cities-bg flex items-end xl:h-screen sm:h-[700px] h-[500px]"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="grid sm:grid-cols-12 grid-cols-1 gap-5">
            <div className="sm:col-span-4"></div>
            <div className="sm:col-span-8">
              <div className="grid grid-cols-3 gap-5 relative xl:bottom-[100px] bottom-[100px] items-center">
                <div>
                  <img src="/assets/images/kochi.png" className="w-full" />
                </div>
                <div>
                  <img
                    src="/assets/images/bang.png"
                    className="w-full animate-bounce"
                  />
                </div>
                <div>
                  <img src="/assets/images/chennai.png" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BeatStress />
      <LiveLoveLife />
      <App visibleSections={visibleSections} />
    </div>
  );
}

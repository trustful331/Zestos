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
      const sections = ["devices", "comfort", "features"];
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
          isVisible = visiblePercentage >= 50;
        } else if (sections[i] == "features") {
          isVisible = visiblePercentage >= 40;
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
      <div className="container mt-12">
        <h2 className="text-[6rem] font-extrabold text-center">
          A Place Like{" "}
          <span className="bg-gradient-to-r from-yellow to-green text-transparent bg-clip-text">
            Home
          </span>
        </h2>
        <div className="text-center min-w-[40vw] max-w-[20vw] mx-auto">
          <h5 className="text-[19px] my-4 font-semibold text-black">
            Discover Coliving Spaces That Resemble Your Home.
          </h5>
          <p className="text-[23px] font-normal leading-[37px] text-black">
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
      <div className="relative mt-[200px] devices">
        <img
          src="/assets/images/device.png"
          className={`w-[24%] absolute transition-all duration-[800ms] ${
            visibleSections.includes("devices")
              ? "bottom-0 left-[15%]"
              : "left-0 -bottom-52"
          }`}
        />
        <img
          src="/assets/images/device_bg.jpg"
          className="w-full h-[800px] object-cover"
        />
        <img
          src="/assets/images/device.png"
          className={`w-[24%] absolute transition-all duration-[800ms] ${
            visibleSections.includes("devices")
              ? "bottom-0 right-[15%]"
              : "right-0 -bottom-52"
          }`}
        />
      </div>
      <Products visibleSections={visibleSections} />
      <Features visibleSections={visibleSections} />
      {/* <App /> */}
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
    </div>
  );
}

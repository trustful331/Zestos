import React, { useEffect, useState } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsMicrosoftTeams } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export default function Features() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features"];
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
        const isVisible = visiblePercentage >= 40;

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
    <div className="container mt-28 features">
      <div className="grid grid-cols-2 gap-5 items-center">
        <div
          className={`transition-all relative duration-[800ms] transform ${
            visibleSections.includes("features")
              ? "bottom-0 rotate-0"
              : "-bottom-52 -rotate-45"
          }`}
        >
          <p className="text-green text-[16px] font-medium leading-[20px] mb-2">
            Why choose us
          </p>
          <h2 className="text-[36px] leading-[40px] font-bold lg:text-[50px] lg:leading-[64px]">
            Lorem ipsum Lorem ipsum ipsum
          </h2>
          <p className="text-[16px] leading-[28px] mb-4 mt-8">
            {" "}
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum
          </p>
          <div className="flex gap-5 items-center mt-8">
            <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-green">
              <CgWorkAlt size={34} className="text-white flex-shrink-0" />
            </div>
            <div>
              <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold mb-2">
                Fast working process
              </h6>
              <p className="text-[18px] text-[#232728]/70 font-normal">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-8">
            <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-yellow">
              <BsMicrosoftTeams
                size={28}
                className="text-white flex-shrink-0"
              />
            </div>
            <div>
              <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold mb-2">
                Dedicated teams
              </h6>
              <p className="text-[18px] text-[#232728]/70 font-normal">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-8">
            <div className="w-[55px] h-[55px] flex-shrink-0 flex items-center justify-center rounded-full bg-orange">
              <BiSupport size={30} className="text-white flex-shrink-0" />
            </div>
            <div>
              <h6 className="text-[20px] leading-[24px] text-[#232728] font-semibold mb-2">
                24/7 hours support
              </h6>
              <p className="text-[18px] text-[#232728]/70 font-normal">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div
          className={`transition-all relative duration-[800ms] transform ${
            visibleSections.includes("features")
              ? "bottom-0 rotate-0"
              : "-bottom-52 rotate-45"
          }`}
        >
          <img src="assets/images/creative.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}

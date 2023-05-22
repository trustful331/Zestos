import { CgWorkAlt } from "react-icons/cg";
import { BsMicrosoftTeams } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export default function Features({ visibleSections }) {
  return (
    <div className="overflow-hidden 2xl:px-0 px-[15px]">
      <div className="container 2xl:mt-28 features">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 items-center">
          <div
            className={`transition-all relative duration-[800ms] transform ${
              visibleSections.includes("features")
                ? "bottom-0 rotate-0"
                : "-bottom-52 xl:-rotate-45"
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
            <div className="flex sm:flex-row flex-col text-center sm:text-left gap-5 items-center mt-8">
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
            <div className="flex sm:flex-row flex-col text-center sm:text-left gap-5 items-center mt-8">
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
            <div className="flex sm:flex-row flex-col text-center sm:text-left gap-5 items-center mt-8">
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
            className={`transition-all relative duration-[800ms] transform lg:block hidden ${
              visibleSections.includes("features")
                ? "bottom-0 rotate-0"
                : "-bottom-52 xl:rotate-45"
            }`}
          >
            <img src="assets/images/creative.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

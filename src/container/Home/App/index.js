import { BsDoorOpenFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
import { SiFoursquarecityguide } from "react-icons/si";
import { FaAddressCard } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function App({ visibleSections }) {
  return (
    <section className="app-bg overflow-hidden">
      <div className="bg-gradient-to-r from-black/70 to-black/50 py-36">
        <div className="container lg:px-0 px-[15px]">
          <div className="flex flex-wrap lg:justify-around lg:gap-12 gap-5 lg:mb-28 mb-5">
            <div className="lg:w-3/12 w-full min-h-[200px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer hover:lg:scale-105 duration-[800ms] transform ${
                  visibleSections.includes("app-bg")
                    ? "rotate-0"
                    : "lg:-rotate-90"
                } origin-bottom-left border p-10 bg-white text-center`}
              >
                <BsDoorOpenFill size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Online Service Request
                </h4>
              </div>
            </div>
            <div className="lg:w-3/12 w-full min-h-[200px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer hover:lg:scale-105 duration-[800ms] transform ${
                  visibleSections.includes("app-bg") ? "top-0" : "lg:-top-32"
                } border relative p-10 bg-white text-center`}
              >
                <SlCalender size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Confirm Joining Dates
                </h4>
              </div>
            </div>
            <div className="lg:w-3/12 w-full min-h-[200px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer hover:lg:scale-105 duration-[800ms] transform ${
                  visibleSections.includes("app-bg")
                    ? "rotate-0"
                    : "lg:rotate-90"
                } origin-bottom-right border p-10 bg-white text-center`}
              >
                <MdPayments size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Confirm Joining Dates
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap lg:justify-around lg:gap-12 gap-5">
            <div className="lg:w-3/12 w-full min-h-[200px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer hover:lg:scale-105 duration-[800ms] transform ${
                  visibleSections.includes("app-bg")
                    ? "rotate-0"
                    : "lg:rotate-90"
                } origin-top-left border p-10 bg-white text-center`}
              >
                <SiFoursquarecityguide
                  size={80}
                  className="mx-auto text-green"
                />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Rent Receipts
                </h4>
              </div>
            </div>
            <div className="lg:w-3/12 w-full min-h-[200px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer hover:lg:scale-105 duration-[800ms] transform ${
                  visibleSections.includes("app-bg")
                    ? "bottom-0"
                    : "lg:-bottom-32"
                }  border relative p-10 bg-white text-center`}
              >
                <FaAddressCard size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Paperless KYC Verification
                </h4>
              </div>
            </div>
            <div className="lg:w-3/12 w-full min-h-[200px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer hover:lg:scale-105 duration-[800ms] transform ${
                  visibleSections.includes("app-bg")
                    ? "rotate-0"
                    : "lg:-rotate-90"
                } origin-top-right border p-10 bg-white text-center`}
              >
                <VscVerifiedFilled size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Digital Check-in
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

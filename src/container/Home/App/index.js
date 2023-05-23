import { BsDoorOpenFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdPayments } from "react-icons/md";
import { SiFoursquarecityguide } from "react-icons/si";
import { FaAddressCard } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function App() {
  return (
    <section className="overflow-hidden">
      <div className="container-fluid">
        <div className="grid md:grid-cols-12">
          <div className="grid md:grid-cols-3 border-t divide-x divide-y col-span-6">
            <div className="min-h-[300px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] p-10 text-center`}
              >
                <BsDoorOpenFill size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Online Service Request
                </h4>
              </div>
            </div>
            <div className="min-h-[300px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] p-10 text-center`}
              >
                <SlCalender size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Confirm Joining Dates
                </h4>
              </div>
            </div>
            <div className="min-h-[300px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] p-10 text-center`}
              >
                <MdPayments size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Confirm Joining Dates
                </h4>
              </div>
            </div>
            <div className="min-h-[300px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] p-10 text-center`}
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
            <div className="min-h-[300px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] p-10 text-center`}
              >
                <FaAddressCard size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Paperless KYC Verification
                </h4>
              </div>
            </div>
            <div className="min-h-[300px]">
              <div
                className={`rounded-[40px] h-full transition-all cursor-pointer flex flex-col items-center justify-center hover:lg:scale-105 duration-[800ms] p-10 text-center`}
              >
                <VscVerifiedFilled size={80} className="mx-auto text-green" />
                <h4 className="mt-6 text-[18px] font-semibold w-8/12 mx-auto">
                  Digital Check-in
                </h4>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <img
              src="assets/images/app.png"
              className="w-full h-full object-cover object-right-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

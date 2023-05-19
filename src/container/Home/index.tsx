import Banner from "./Banner";
import { BiBed } from "react-icons/bi";
import { TbBuildingEstate, TbBuildingSkyscraper } from "react-icons/tb";

export default function Home() {
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
        <div className="container mt-12">
          <h1 className="text-[86px] font-bold mt-[90px] mb-[80px] text-center">
            The Comfort of Your Home
          </h1>
          <p className="text-[18px] text-black/50 leading-[30px] w-[50vw] mx-auto text-center mb-14">
            Living in a new city is very challenging for everyone and notably,
            if you’re a young person it will be quite scary as well. Missing
            your comforts of home, the warmness, the emotions and it is
            difficult to adjust. Worry no more because Cozy Stay helps you
            locate the optimal coliving spaces that add comfort and solace to
            your home by mirroring the amenities you call your own.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="rounded-xl p-3 bg-white shadow-sm">
                <img
                  src="assets/images/demo.png"
                  className="rounded-xl w-full"
                />
              </div>
              <h4 className="text-[24px] font-semibold text-center mt-4">
                Title title title
              </h4>
            </div>
            <div>
              <div className="rounded-xl p-3 bg-white shadow-sm">
                <img
                  src="assets/images/demo.png"
                  className="rounded-xl w-full"
                />
              </div>
              <h4 className="text-[24px] font-semibold text-center mt-4">
                Title title title
              </h4>
            </div>
            <div>
              <div className="rounded-xl p-3 bg-white shadow-sm">
                <img
                  src="assets/images/demo.png"
                  className="rounded-xl w-full"
                />
              </div>
              <h4 className="text-[24px] font-semibold text-center mt-4">
                Title title title
              </h4>
            </div>
            <div>
              <div className="rounded-xl p-3 bg-white shadow-sm">
                <img
                  src="assets/images/demo.png"
                  className="rounded-xl w-full"
                />
              </div>
              <h4 className="text-[24px] font-semibold text-center mt-4">
                Title title title
              </h4>
            </div>
            <div>
              <div className="rounded-xl p-3 bg-white shadow-sm">
                <img
                  src="assets/images/demo.png"
                  className="rounded-xl w-full"
                />
              </div>
              <h4 className="text-[24px] font-semibold text-center mt-4">
                Title title title
              </h4>
            </div>
            <div>
              <div className="rounded-xl p-3 bg-white shadow-sm">
                <img
                  src="assets/images/demo.png"
                  className="rounded-xl w-full"
                />
              </div>
              <h4 className="text-[24px] font-semibold text-center mt-4">
                Title title title
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

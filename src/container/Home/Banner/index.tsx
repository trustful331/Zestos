import { FiArrowRight } from "react-icons/fi";
import BannerCarousel from "./bannercarousel";
export default function Banner() {
  return (
    <div className="md:px-0 container px-6">
      <div className="grid grid-cols-12 gap-5 py-[60px] items-center">
        <div className="col-span-8 h-full">
          <BannerCarousel />
        </div>
        <div className="col-span-4">
          <div className="relative group rounded-[10px] mb-[20px] cursor-pointer min-h-[170px] max-h-[200px] overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-r transition-all duration-200 from-[#279980cc] to-[#292d32cc] group-hover:z-10 opacity-0 group-hover:opacity-[1]" />
            <img
              alt="modern-student"
              className="object-contain object-center absolute inset-0 z-0 min-h-[170px] w-full"
              src="assets/images/Food.webp"
            />
            <div className="absolute top-[20px] left-[32px] right-[8px] text-[#232728] font-semibold text-[23px] leading-[30px] max-w-[200px] transition-all duration-200 opacity-1 z-10 group-hover:opacity-[0] group-hover:z-[0]">
              Modern Student Housing
            </div>
            <div className="absolute top-[10px] left-[13px] right-[8px] text-white transition-all duration-200 opacity-0 z-[0] group-hover:opacity-[1] group-hover:z-10 md:block hidden group-hover:block">
              New-age hostels with all the amenities &amp; vibrant living
              spaces.
            </div>
            <div className="bg-white rounded-full flex items-center justify-center absolute bottom-[15px] cursor-pointer w-[40px] h-[40px] left-[32px] z-20">
              <FiArrowRight size={22} className="text-[#232728]" />
            </div>
          </div>
          <div className="relative group rounded-[10px] mb-[20px] cursor-pointer min-h-[170px] max-h-[200px] overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-r transition-all duration-200 from-[#279980cc] to-[#292d32cc] group-hover:z-10 opacity-0 group-hover:opacity-[1]" />
            <img
              alt="modern-student"
              className="object-contain object-center absolute inset-0 z-0 min-h-[170px] w-full"
              src="assets/images/Food.webp"
            />
            <div className="absolute top-[20px] left-[32px] right-[8px] text-[#232728] font-semibold text-[23px] leading-[30px] max-w-[200px] transition-all duration-200 opacity-1 z-10 group-hover:opacity-[0] group-hover:z-[0]">
              Co-living for Professionals
            </div>
            <div className="absolute top-[10px] left-[13px] right-[8px] text-white transition-all duration-200 opacity-0 z-[0] group-hover:opacity-[1] group-hover:z-10 md:block hidden group-hover:block">
              New-age hostels with all the amenities &amp; vibrant living
              spaces.
            </div>
            <div className="bg-white rounded-full flex items-center justify-center absolute bottom-[15px] cursor-pointer w-[40px] h-[40px] left-[32px] z-20">
              <FiArrowRight size={22} className="text-[#232728]" />
            </div>
          </div>
          <div className="relative group rounded-[10px] mb-[20px] cursor-pointer min-h-[170px] max-h-[200px] overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-r transition-all duration-200 from-[#279980cc] to-[#292d32cc] group-hover:z-10 opacity-0 group-hover:opacity-[1]" />
            <img
              alt="modern-student"
              className="object-contain object-center absolute inset-0 z-0 min-h-[170px] w-full"
              src="assets/images/Food.webp"
            />
            <div className="absolute top-[20px] left-[32px] right-[8px] text-[#232728] font-semibold text-[23px] leading-[30px] max-w-[200px] transition-all duration-200 opacity-1 z-10 group-hover:opacity-[0] group-hover:z-[0]">
              Managed Apartments
            </div>
            <div className="absolute top-[10px] left-[13px] right-[8px] text-white transition-all duration-200 opacity-0 z-[0] group-hover:opacity-[1] group-hover:z-10 md:block hidden group-hover:block">
              New-age hostels with all the amenities &amp; vibrant living
              spaces.
            </div>
            <div className="bg-white rounded-full flex items-center justify-center absolute bottom-[15px] cursor-pointer w-[40px] h-[40px] left-[32px] z-20">
              <FiArrowRight size={22} className="text-[#232728]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { RiMapPin2Fill } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { GoDeviceMobile } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
// import ContactForm from "../contactform";
const Footer = () => (
  <footer>
    <div className="bg-green/20 py-[70px]">
      <div className={`container mx-auto md:px-0 px-6`}>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <h4 className="text-[20px] text-green font-semibold mb-4">
              Contact Us
            </h4>
            <ul>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <RiMapPin2Fill size={18} className="shrink-0 text-white" />
                  <p className="text-white text-[14px] leading-[20px]">
                    Level 12, Rolex Tower, Sheikh Zayed Road, Near Financial
                    Centre Metro Station, Dubai, UAE
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <GrMapLocation
                    size={18}
                    className="shrink-0 [&_path]:stroke-white"
                  />
                  <p className="text-white text-[14px] leading-[20px]">
                    Click for the Direction
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <GoDeviceMobile size={18} className="shrink-0 text-white" />
                  <p className="text-white text-[14px] leading-[20px]">
                    +971 56 408 6728
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <BsFillTelephoneFill
                    size={18}
                    className="shrink-0 text-white"
                  />
                  <p className="text-white text-[14px] leading-[20px]">
                    +971 4 2690673
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <FaPaperPlane size={18} className="shrink-0 text-white" />
                  <p className="text-white text-[14px] leading-[20px]">
                    sales@aaconsultancy.ae
                  </p>
                </div>
              </li>
            </ul>
            <h4 className="text-[20px] text-green font-semibold mb-4 mt-6">
              Working Hours
            </h4>
            <ul>
              <li className="mb-4">
                <div className="flex items-center gap-3">
                  <RiMapPin2Fill size={18} className="shrink-0 text-white" />
                  <div>
                    <p className="text-white text-[14px] leading-[20px]">
                      Monday-Friday : 8:30 – 17:30
                    </p>
                    <p className="text-white text-[14px] leading-[20px]">
                      Saturday : 8:30 – 12:30
                    </p>
                    <p className="text-white text-[14px] leading-[20px]">
                      Sunday : Closed
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-[20px] text-green font-semibold mb-4">
              Business Setup
            </h4>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 1
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 3
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 4
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 5
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 5
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-[20px] text-green font-semibold mb-4">
              Our Services
            </h4>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 1
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 3
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 4
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 5
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-white text-[14px] leading-[20px]">
                  Link 5
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-5">{/* <ContactForm /> */}</div>
        </div>
      </div>
    </div>
    <div className="bg-green py-[45px] text-center">
      <p className="text-[14px] text-white font-medium">
        Copyright © 2022. Website Designed by HelloPixels
      </p>
    </div>
  </footer>
);

export default Footer;

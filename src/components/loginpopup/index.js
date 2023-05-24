import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import OtpInput from "./otpinput";
import ButtonTo from "../Button";

function LoginPopup({ open, hidePopup }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={hidePopup} className="relative z-[9999]">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-[36rem] w-full relative rounded-2xl bg-white">
              <div
                className="h-[36px] w-[36px] rounded-full flex items-center cursor-pointer absolute -top-[17px] -right-[11px] justify-center bg-white shadow"
                onClick={hidePopup}
              >
                <FiX size={22} className="stroke-black" />
              </div>
              <div className="p-[32px]">
                <input
                  type="email"
                  placeholder="Enter Phone number"
                  className="h-[45px] rounded-[8px] border outline-0 border-[#D0D5DD] placeholder:text-[#D0D5DD] pllaceholder:font-normal px-3 flex items-center w-full mb-4"
                />
                <div className="mb-4 max-w-[300px] mx-auto">
                  <label className="text-sm font-medium font-Lato mb-1 inline-block">
                    Otp
                  </label>
                  <OtpInput />
                </div>
                <div className="mb-4 max-w-[300px] mx-auto">
                  <label className="text-sm font-medium font-Lato mb-1 inline-block">
                    Confirm Otp
                  </label>
                  <OtpInput />
                </div>
                <div className="leading-[16px] font-light text-black mt-5">
                  <div className="flex items-start">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="focus:ring-primary cursor-pointer focus:ring-2 bg-gray/90 min-w-[18px] min-h-[18px] text-primary bg-gray-100 rounded"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-[14px] font-normal text-black/50"
                    >
                      By clicking on the button I agree to the{" "}
                      <a
                        class="border-none outline-none font-medium underline text-green"
                        target="_blank"
                        href="#"
                      >
                        Terms &amp; Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <ButtonTo
                  text="Login"
                  className="bg-green rounded-lg text-white px-6 py-3.5 border shadow-lg flex items-center gap-3 w-full text-center justify-center mt-6"
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginPopup;

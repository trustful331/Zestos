import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";
// import ContactForm from "../contactform";

function AboutUsPopup({ open, openPopup, hidePopup }) {
  return (
    <>
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
              <Dialog.Panel className="mx-auto max-w-[36rem] w-full relative rounded-[8px] bg-white">
                <div
                  className="h-[46px] flex items-center cursor-pointer absolute top-5 right-5"
                  onClick={hidePopup}
                >
                  <FiX size={32} className="stroke-black" />
                </div>
                {/* <ContactForm /> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AboutUsPopup;

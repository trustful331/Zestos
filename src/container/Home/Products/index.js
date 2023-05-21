import React, { useEffect, useState } from "react";

export default function Products() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["comfort"];
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
        const isVisible = visiblePercentage >= 50;

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
      <div className="container mt-12 pb-[50px]">
        <h1 className="text-[86px] font-bold mt-[90px] mb-[80px] text-center">
          The Comfort of Your Home
        </h1>
        <p className="text-[18px] text-black/50 leading-[30px] w-[50vw] mx-auto text-center mb-24">
          Living in a new city is very challenging for everyone and notably, if
          you’re a young person it will be quite scary as well. Missing your
          comforts of home, the warmness, the emotions and it is difficult to
          adjust. Worry no more because Cozy Stay helps you locate the optimal
          coliving spaces that add comfort and solace to your home by mirroring
          the amenities you call your own.
        </p>
        <ul className="flex flex-wrap justify-center items-center container mx-auto transform comfort">
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_1.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 1
            </div>
          </li>
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_2.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 2
            </div>
          </li>
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_3.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 3
            </div>
          </li>
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_4.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 4
            </div>
          </li>
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_5.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 5
            </div>
          </li>
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_6.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 6
            </div>
          </li>
          <li
            className={`honeycomb-cell before:content-[''] transition-all duration-[800ms] transform after:content-[''] ${
              visibleSections.includes("comfort")
                ? "bottom-0 rotate-0"
                : "-bottom-52 -rotate-180"
            }`}
          >
            <img
              className="honeycomb-cell__image object-cover object-center"
              src="assets/images/product_7.jpg"
            />
            <div className="honeycomb-cell__title h-full flex flex-col justify-center break-words uppercase text-white  font-bold text-[1.75em] transition-[opacity] duration-[350ms]">
              Product 7
            </div>
          </li>
          <li className="honeycomb-cell honeycomb__placeholder"></li>
        </ul>
      </div>
    </div>
  );
}

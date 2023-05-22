export default function Products({ visibleSections }) {
  return (
    <div className="overflow-hidden">
      <div className="container mt-12 pb-[50px] comfort 2xl:px-0 px-[15px]">
        <h1 className="xl:text-[86px] lg:text-[66px] md:text-[56px] sm:text-[46px] text-[36px] font-bold mt-[90px] mb-[80px] text-center">
          The Comfort of Your Home
        </h1>
        <p className="xl:text-[18px] text-[16px] text-black/50 leading-[30px] xl:w-[50vw] mx-auto text-center mb-24">
          Living in a new city is very challenging for everyone and notably, if
          you’re a young person it will be quite scary as well. Missing your
          comforts of home, the warmness, the emotions and it is difficult to
          adjust. Worry no more because Cozy Stay helps you locate the optimal
          coliving spaces that add comfort and solace to your home by mirroring
          the amenities you call your own.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8">
          <div
            className={`transition-all duration-[800ms] relative ${
              visibleSections.includes("comfort")
                ? "top-0 left-0"
                : "xl:-top-52 xl:-left-52"
            }`}
          >
            <div className="rounded-xl p-3 bg-white shadow border">
              <img
                src="assets/images/product_1.webp"
                className="rounded-xl w-full"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Product 1
            </h4>
          </div>
          <div
            className={`transition-all duration-[800ms] relative ${
              visibleSections.includes("comfort") ? "top-0" : "xl:-top-52"
            }`}
          >
            <div className="rounded-xl p-3 bg-white shadow border">
              <img
                src="assets/images/product_2.webp"
                className="rounded-xl w-full"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Product 2
            </h4>
          </div>
          <div
            className={`transition-all duration-[800ms] relative ${
              visibleSections.includes("comfort")
                ? "top-0 right-0"
                : "xl:-top-52 xl:-right-52"
            }`}
          >
            <div className="rounded-xl p-3 bg-white shadow border">
              <img
                src="assets/images/product_3.webp"
                className="rounded-xl w-full"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Product 3
            </h4>
          </div>
          <div
            className={`transition-all duration-[800ms] relative ${
              visibleSections.includes("comfort")
                ? "bottom-0 left-0"
                : "xl:-bottom-52 xl:-left-52"
            }`}
          >
            <div className="rounded-xl p-3 bg-white shadow border">
              <img
                src="assets/images/product_4.webp"
                className="rounded-xl w-full"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Product 4
            </h4>
          </div>
          <div
            className={`transition-all duration-[800ms] relative ${
              visibleSections.includes("comfort") ? "bottom-0" : "xl:-bottom-52"
            }`}
          >
            <div className="rounded-xl p-3 bg-white shadow border">
              <img
                src="assets/images/product_5.webp"
                className="rounded-xl w-full"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Product 5
            </h4>
          </div>
          <div
            className={`transition-all duration-[800ms] relative ${
              visibleSections.includes("comfort")
                ? "bottom-0 right-0"
                : "xl:-bottom-52 xl:-right-52"
            }`}
          >
            <div className="rounded-xl p-3 bg-white shadow border">
              <img
                src="assets/images/product_6.webp"
                className="rounded-xl w-full"
              />
            </div>
            <h4 className="text-[24px] font-semibold text-center mt-4">
              Product 6
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

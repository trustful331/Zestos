export default function LiveLoveLife({ visibleSections }) {
  return (
    <section className="bg-green pt-[10vh] mt-28">
      <div className="container md:px-0 px-[15px]">
        <div className="md:w-10/12 mx-auto text-center">
          <h3 className="md:text-[4rem] text-[2rem] italic text-white leading-[5rem] font-bold mb-8">
            Live, Love & Laugh
          </h3>
          <p className="md:text-[20px] text-[16px] md:leading-[38px] leading-[28px] mb-4 text-black/80 font-medium ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-black rounded-full text-white px-16 py-2.5 border-0 shadow-lg flex items-center gap-3 mx-auto">
            Discover more
          </button>
          <img
            src="assets/images/live_life.png"
            className="w-8/12 mx-auto mt-[6vh]"
          />
        </div>
      </div>
    </section>
  );
}

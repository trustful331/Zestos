export default function App({ visibleSections }) {
  return (
    <section className="app-bg pt-[10vh]">
      <div className="container">
        <div className="w-10/12 mx-auto text-center">
          <h3 className="text-[5rem] tracking-[.2rem] font-italic text-white leading-[5rem] font-bold mb-8">
            Live, Love & Laugh
          </h3>
          <p className="text-[20px] leading-[38px] mb-4 text-black font-medium ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-black rounded-full text-white px-16 py-2.5 border shadow-lg flex items-center gap-3 mx-auto">
            Discover more
          </button>
          <img
            src="assets/images/live_life.png"
            className="w-8/12 mx-auto mt-[30vh]"
          />
        </div>
      </div>
    </section>
  );
}

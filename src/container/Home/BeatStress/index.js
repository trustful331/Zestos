export default function BeatStress({ visibleSections }) {
  return (
    <div className="container-fluid mt-28 beat-stress">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-5">
          <div className="h-[380px] flex items-center justify-center">
            <h3 className="text-[7rem] text-black/50 leading-[5rem] font-bold">
              beat the
              <br />
              stress
            </h3>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <img
                src="assets/images/user_1.jpg"
                className="w-full max-h-[280px] min-h-[280px] object-cover"
              />
              <img
                src="assets/images/user_2.jpg"
                className="w-full max-h-[280px] min-h-[280px] object-cover"
              />
              <img
                src="assets/images/user_3.jpg"
                className="w-full max-h-[280px] min-h-[280px] object-cover"
              />
              <img
                src="assets/images/user_4.jpg"
                className="w-full max-h-[280px] min-h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-7 h-full">
          <div className="flex flex-col h-full">
            <img
              src="assets/images/stress.jpg"
              className="w-full h-[560px] object-cover"
            />
            <div className="grow">
              <div className="h-full w-2/5 flex items-center justify-center mx-auto relative">
                <p className="text-[18px] text-black/70 font-normal z-10 relative">
                  Don't let your workload knock you down. Flush out the stress
                  with our fun amenities and community-based events specially
                  designed to relax and rejuvenate you. Just like a wise man
                  once said, 'relaxation can fuel success in unimaginable ways'.
                </p>
                <img
                  src="assets/images/beat_icon.png"
                  className="w-[180px] absolute -right-32 top-1/2 transform -translate-y-1/2 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

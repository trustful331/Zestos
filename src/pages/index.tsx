import Home from "@/container/Home";
import React, { useEffect, useState } from 'react';
export default function HomePage() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Home />
      <div className="relative mt-[200px]">
        <img src="/assets/images/device.png" className={`w-[24%] absolute transition-all duration-[800ms] ${scroll ? "bottom-0 left-[15%]" : "left-0 -bottom-52"}`} />
        <img src="/assets/images/device_bg.jpg" className="w-full h-[800px] object-cover" />
        <img src="/assets/images/device.png" className={`w-[24%] absolute transition-all duration-[800ms] ${scroll ? "bottom-0 right-[15%]" : "right-0 -bottom-52"}  `} />
      </div>
    </>
  );
}

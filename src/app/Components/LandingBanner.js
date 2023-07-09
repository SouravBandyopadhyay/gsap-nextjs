import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const LandingBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.from(bannerRef.current, {
      duration: 3,
      opacity: 0,
      y: 200,
    });
  }, []);

  return (
    <figure ref={bannerRef} className="flex flex-col items-center mt-10">
      <Image
        src="https://i.postimg.cc/tRnFtWsY/profile-pic.png"
        alt="Landing Banner"
        className="w-40 h-40 mx-auto rounded-full"
      />
      <figcaption className=" text-center text-3xl font-light mt-4">
        <p>Sourav Bandyopadhyay</p>
      </figcaption>
    </figure>
  );
};

export default LandingBanner;

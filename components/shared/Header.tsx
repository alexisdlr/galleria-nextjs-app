"use client"
import { useState, useEffect } from "react";
import { MotionHeader } from "../animated/MotionHeader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isSlideshowActive, setIsSlideshowActive] = useState<boolean>(false);
  const maxIndex: number = 16; // total number of artworks

  useEffect(() => {
    let slideshowTimer: NodeJS.Timeout ;

    if (isSlideshowActive) {
      slideshowTimer = setTimeout(() => {
        const nextIndex = currentIndex === maxIndex ? 1 : currentIndex + 1;
        router.push(`/artwork/${nextIndex}`);
        setCurrentIndex(nextIndex);
      }, 8000);
    }

    return () => clearTimeout(slideshowTimer);
  }, [isSlideshowActive, currentIndex]);

  const startSlideshow = () => {
    setIsSlideshowActive(true);
    router.push("/artwork/1");
    setCurrentIndex(1);
  };

  const stopSlideshow = () => {
    setIsSlideshowActive(false);
  };

  return (
    <MotionHeader
      animate={{ opacity: [0, 100], y: [-100, 0] }}
      transition={{ delay: 0.5 }}
      className="w-full flex justify-between items-center pb-6 border-b border-[#E5E5E5] max-h-[60px] 2xl:max-h-[80px]"
    >
      <Link href="/" className="lg:ml-2">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width={110}
          height={110}
          className="w-20 h-8 lg:w-auto lg:h-auto"
        />
      </Link>

      <button
        className="uppercase text-xs tracking-wider 2xl:text-xl"
        onClick={isSlideshowActive ? stopSlideshow : startSlideshow}
      >
        {isSlideshowActive ? "Stop slideshow" : "Start slideshow"}
      </button>
    </MotionHeader>
  );
}

export default Header;
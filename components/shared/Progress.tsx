"use client";
import { useEffect, useState } from "react";
import { Artwork } from "@/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MotionFooter } from "../animated/MotionFooter";

const Progress = ({
  artwork,
  gallery,
}: {
  artwork: Artwork;
  gallery: Artwork[];
}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDisabledPrev = currentIndex === 0;
  const isDisabledNext = currentIndex === gallery.length - 1;
  useEffect(() => {
    const index = gallery.findIndex((item) => item.id === artwork.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [artwork, gallery]);

  const progressPercentage = ((currentIndex + 1) / gallery.length) * 100;

  const goToPrevious = () => {
    const previousIndex =
      currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
    router.push(`/artwork/${gallery[previousIndex].id}`);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % gallery.length;
    setCurrentIndex(nextIndex);
    router.push(`/artwork/${gallery[nextIndex].id}`);
  };

  return (
    <MotionFooter 
    animate={{ opacity: [0, 1], y: [50, 0] }}
    transition={{ delay: 0.7 }}
    className="flex z-50 flex-col justify-between items-center w-full fixed bottom-0 left-0 px-2 lg:px-10 py-3 bg-white">
      <div className="w-full h-1 bg-gray-300 relative">
        <div
          className="absolute top-0 left-0 h-full bg-black"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between w-full mt-2 bg-white">
        <div >
          <h2 className="font-bold text-xs mb-1">{artwork.name}</h2>
          <p className="text-xs text-gray-500">{artwork.artist.name}</p>
        </div>
        <div className="flex gap-6 items-center ">
          <button
            disabled={isDisabledPrev}
            onClick={goToPrevious}
            className={`${isDisabledPrev && "opacity-50 cursor-not-allowed"}`}
          >
            <Image
              src="/assets/shared/icon-back-button.svg"
              alt="previous icon"
              width={20}
              height={20}
            />
          </button>
          <button
            disabled={isDisabledNext}
            className={`${isDisabledNext && "opacity-50 cursor-not-allowed"}`}
            onClick={goToNext}
          >
            <Image src="/assets/shared/icon-next-button.svg" alt="next icon" width={20} height={20} />
          </button>
        </div>
      </div>
    </MotionFooter>
  );
};

export default Progress;

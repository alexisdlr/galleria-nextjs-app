"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

const LightBox = ({ images }: { images: string[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="px-3 py-4 bg-black text-white uppercase text-xs tracking-widest flex gap-2 items-center absolute left-5 top-5 lg:top-auto lg:bottom-5 hover:bg-opacity-65 transition-all"
        onClick={() => setOpen(true)}
      >
        <img src="/assets/shared/icon-view-image.svg" alt="view image icon" />
        View image
      </button>
      <Lightbox
        plugins={[Fullscreen]}
        open={open}
        close={() => setOpen(false)}
        slides={images.map((image) => ({ src: image, caption: "Artwork" }))}
      />
    </>
  );
};

export default LightBox;

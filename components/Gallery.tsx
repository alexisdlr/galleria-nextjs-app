import { Artwork as ArtWorkType } from "@/types";
import { getGallery } from "@/actions/getGallery";
import MasonryLayout from "./MasonryLayout";
import { MotionDiv } from "./animated/MotionDiv";

const Gallery = async () => {
  const gallery: ArtWorkType[] = await getGallery({});

  return (
    <MotionDiv
      animate={{ opacity: [0, 1] }}
      className="mt-10"
    >
      <MasonryLayout gallery={gallery} />
    </MotionDiv>
  );
};

export default Gallery;

import { Artwork as ArtWorkType } from "@/types";
import { getGallery } from "@/lib/actions/getGallery";
import MasonryLayout from "./MasonryLayout";
import { MotionDiv } from "./animated/MotionDiv";

const Gallery = async () => {
  const gallery: ArtWorkType[] = await getGallery({});

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-10"
    >
      <MasonryLayout gallery={gallery} />
    </MotionDiv>
  );
};

export default Gallery;

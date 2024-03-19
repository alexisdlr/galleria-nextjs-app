import { Artwork as ArtWorkType } from "@/types";
import { getGallery } from "@/lib/actions/getGallery";
import MasonryLayout from "./MasonryLayout";

const Gallery = async () => {
  const gallery: ArtWorkType[] = await getGallery();

  return (
    <div className="mt-10">
      <MasonryLayout gallery={gallery} />
    </div>
  );
};

export default Gallery;

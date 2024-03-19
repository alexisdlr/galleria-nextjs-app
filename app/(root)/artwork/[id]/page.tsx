import LightBox from "@/components/shared/Lightbox";
import { getGallery } from "@/lib/actions/getGallery";
import Image from "next/image";

type SearchParamProps = {
  params: {
    id: string;
  };
  searchParams: URLSearchParams;
};

const ArtworkDetail = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const artwork = await getGallery({ id });

  if (!artwork) {
    return (
      <div className="flex w-full h-full my-20 items-center justify-center text-3xl">
        Artwork not found
      </div>
    );
  }
  const imgSrc = artwork?.images?.hero?.large.substring(1);
  const imgGallery = artwork?.images?.gallery.substring(1);
  return (
    <>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full relative ">
            <Image src={imgSrc} alt={artwork?.name} width={450} height={450} />
            <LightBox images={[imgGallery]} />
            <div className="absolute w-72 h-56 flex flex-col items-start justify-center bg-white -top-3 right-1 p-10">
              <h2 className="font-bold text-4xl">{artwork?.name}</h2>
              <h3 className="text-xs text-gray-500 my-3">
                {artwork?.artist?.name}
              </h3>
            </div>
          </div>
          <div className="h-full">
            <p>{artwork.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkDetail;

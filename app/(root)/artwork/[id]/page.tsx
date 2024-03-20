import LightBox from "@/components/shared/Lightbox";
import { getGallery } from "@/lib/actions/getGallery";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="h-full relative w-full">
            <Image
              src={artwork?.images?.hero.large}
              alt={artwork?.name}
              width={450}
              height={450}
            />
            <LightBox images={[artwork?.images?.gallery]} />
            <div className="absolute h-32 w-52 p-6 lg:h-56 flex flex-col items-start justify-center bg-white -bottom-10 -left-2 lg:-top-3 lg:-right-16 lg:p-10">
              <h2 className="font-bold lg:text-4xl">{artwork?.name}</h2>
              <h3 className="text-xs text-gray-500 my-3">
                {artwork?.artist?.name}
              </h3>
            </div>
            <div className="absolute -bottom-20 left-3 z-10 lg:-bottom-8 lg:-right-16">
              <Image
                src={artwork?.artist?.image}
                alt={artwork?.name}
                width={150}
                height={150}
                className="image"
              />
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-center gap-10 max-w-full lg:max-w-96 lg:ml-20 text-[#7D7D7D] relative mt-20 lg:mt-0">
            <span className="font-bold text-[#F3F3F3] text-8xl lg:text-[170px] absolute -top-14 left-6">
              {artwork.year}
            </span>
            <p className="text-sm z-10 leading-6">{artwork.description}</p>
            <Link
              href={artwork?.source}
              className="uppercase text-xs underline tracking-wider"
            >
              Go to source
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkDetail;

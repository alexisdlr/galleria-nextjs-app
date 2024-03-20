import LightBox from "@/components/shared/Lightbox";
import { getGallery } from "@/actions/getGallery";
import Image from "next/image";
import Link from "next/link";
import Progress from "@/components/shared/Progress";

type SearchParamProps = {
  params: {
    id: string;
  };
};

const ArtworkDetail = async ({
  params: { id },
}: SearchParamProps) => {
  const artwork = await getGallery({ id });
  const gallery = await getGallery({});
  if (!artwork) {
    return (
      <div className="flex w-full h-full my-20 items-center justify-center text-3xl">
        Artwork not found
      </div>
    );
  }
  const srcImg = artwork?.images?.hero?.large.substring(1);
  const galleryImg = artwork?.images?.gallery.substring(1);
  const artistImg = artwork?.artist?.image.substring(1);

  return (
    <>
      <div className="my-2 lg:my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div className="h-full relative">
            <Image src={srcImg} alt={artwork?.name} width={400} height={400} />
            <LightBox images={[galleryImg]}  />
            <div className=" absolute w-56 h-32 lg:w-72 lg:h-56 lg:flex flex-col items-start justify-center bg-white -bottom-10 -left-1 p-4 lg:bottom-auto lg:left-auto lg:-top-3 lg:-right-16 lg:p-10">
              <h2 className="font-bold text-2xl lg:text-4xl">
                {artwork?.name}
              </h2>
              <h3 className="text-xs text-gray-500 my-3">
                {artwork?.artist?.name}
              </h3>
            </div>
            <div className="absolute left-3 -bottom-28 lg:left-auto lg:-bottom-8 lg:-right-6">
              <Image
                src={artistImg}
                alt={artwork?.name}
                width={150}
                height={150}
                className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px]"
              />
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-center gap-10 w-ful lg:w-auto lg:max-w-96 lg:ml-20 mt-10 lg:mt-0 text-[#7D7D7D] relative">
            <span className="font-bold text-[#F3F3F3] text-[90px] lg:text-[170px] absolute left-20 xs:left-32 -top-16 lg:-top-14 lg:left-6">
              {artwork.year}
            </span>
            <p className="text-sm z-10 leading-6 ">{artwork.description}</p>
            <Link
              href={artwork?.source}
              target="_blank"
              className="uppercase text-xs underline tracking-wider lg:translate-y-12"
            >
              Go to source
            </Link>
          </div>
        </div>
      </div>
      <Progress artwork={artwork} gallery={gallery} />

    </>
  );
};

export default ArtworkDetail;

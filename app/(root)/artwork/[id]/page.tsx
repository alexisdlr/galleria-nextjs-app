import LightBox from "@/components/shared/Lightbox";
import { getGallery } from "@/actions/getGallery";
import Image from "next/image";
import Link from "next/link";
import Progress from "@/components/shared/Progress";
import { MotionDiv } from "@/components/animated/MotionDiv";
import NotFound from "@/components/NotFound";

type SearchParamProps = {
  params: {
    id: string;
  };
};

const ArtworkDetail = async ({ params: { id } }: SearchParamProps) => {
  const artwork = await getGallery({ id });
  const gallery = await getGallery({});
  if (!artwork) {
    return (
      <NotFound />
    );
  }
  const srcImg = artwork?.images?.hero?.large.substring(1);
  const galleryImg = artwork?.images?.gallery.substring(1);
  const artistImg = artwork?.artist?.image.substring(1);

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="my-2 lg:my-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 md:flex md:flex-col lg:grid md:justify-center md:items-center gap-20 mb-32 max-w-[1280px]">
          <div className="h-full relative md:w-full">
            <Image
              src={srcImg}
              alt={artwork?.name}
              width={400}
              height={400}
              className="2xl:w-[500px]"
            />
            <LightBox images={[galleryImg]} />
            <div className=" absolute w-56 h-32 lg:w-72 lg:h-56 lg:flex flex-col items-start justify-center bg-white -bottom-10 -left-1 p-4 md:bottom-auto md:left-auto md:w-72 md:h-48 md:p-8 md:right-[100px] md:-top-2 lg:-top-3 lg:-right-16 2xl:-top-2 2xl:-right-12 lg:p-10 2xl:p-20 2xl:w-96 2xl:h-60">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                {artwork?.name}
              </h2>
              <h3 className="text-xs text-gray-500 my-3 md:text-sm 2xl:text-sm">
                {artwork?.artist?.name}
              </h3>
            </div>
            <div className="absolute left-3 -bottom-28 md:left-auto md:top-48 md:right-40 lg:top-auto lg:-bottom-8 lg:-right-6">
              <Image
                src={artistImg}
                alt={artwork?.name}
                width={128}
                height={128}
                className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] lg:w-[128px] lg:h-[128px] 2xl:w-[200px] 2xl:h-[200px] "
              />
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-center gap-10 w-full lg:w-auto md:max-w-[400px] lg:max-w-96 lg:ml-20 mt-10 lg:mt-0 text-[#7D7D7D] relative 2xl:max-w-[500px] 2xl:ml-28">
            <span className="font-bold text-[#F3F3F3] text-[90px] md:text-[150px] lg:text-[170px] absolute left-20 -top-16 xs:left-32 md:-top-24 md:-left-24 lg:-top-14 lg:left-6 2xl:text-[250px]">
              {artwork.year}
            </span>
            <p className="text-sm z-10 leading-6 md:text-md md:mt-6 lg:mt-0 2xl:text-xl">
              {artwork.description}
            </p>
            <Link
              href={artwork?.source}
              target="_blank"
              className="uppercase text-xs underline tracking-wider lg:translate-y-12 2xl:text-xl"
            >
              Go to source
            </Link>
          </div>
        </div>
      </MotionDiv>
      <Progress artwork={artwork} gallery={gallery} />
    </>
  );
};

export default ArtworkDetail;

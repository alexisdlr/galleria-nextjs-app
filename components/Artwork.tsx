import { Artwork as ArtWorkType } from "@/types";
import Link from "next/link";

const Artwork = ({ artwork }: { artwork: ArtWorkType }) => {
  return (
    <Link
      href={`/artwork/${artwork.name.replace(/\s/g, "-").toLowerCase()}`}
      className={`grid shadow-2xl rounded-md w-full h-fit relative group`}
    >
      <div className="relative">
        <img
          src={artwork.images.thumbnail}
          alt={artwork.name}
          className="group-hover:opacity-65 transition-all"
        />
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <div className="absolute left-5 bottom-5 flex flex-col gap-1 text-white">
        <h3 className="text-xl font-bold break-words max-w-[220px]">
          {artwork.name}
        </h3>
        <p className="text-xs text-gray-300">{artwork.artist.name}</p>
      </div>
    </Link>
  );
};

export default Artwork;

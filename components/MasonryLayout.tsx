"use client"
import { Artwork as ArtType } from "@/types";
import Masonry from "react-masonry-css";
import Artwork from "./Artwork";

const MasonryLayout = ({ gallery }: { gallery: ArtType[] }) => {
  
  return (
    <Masonry
      breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {gallery?.map((item: ArtType) => (
        <Artwork key={`artwork ${item.name}`} artwork={item} />
      ))}
    </Masonry>
  );  
};

export default MasonryLayout;

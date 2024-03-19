export type Artist = {
  image: string;
  name: string;
};

export type Images = {
  thumbnail: string;
  hero: {
    small: string;
    large: string;
  };
  gallery: string;
};

export type Artwork = {
  id: number;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: Images;
};

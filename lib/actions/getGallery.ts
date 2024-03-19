import { Artwork } from "@/types";

type getGalleryProps = {
  id?: string;
};
export const getGallery = async ({ id }: getGalleryProps) => {
  try {
    const API_URL =
      process.env.NODE_ENV === "production"
        ? "https://galleria-nextjs-app.vercel.app/"
        : "http://localhost:3000/";
    const response = await fetch(`${API_URL}/data.json`);
    const data = await response.json();
    if (id) {
      return data.find((artwork: Artwork) => artwork.id === Number(id));
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

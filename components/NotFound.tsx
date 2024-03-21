import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex w-full h-full my-20 items-center justify-center text-3xl flex-col gap-10">
      <span>Artwork not found</span>
      <Link className="uppercase text-xl underline" href={"/"}>
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;

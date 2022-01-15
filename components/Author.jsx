import React from "react";
import Image from "next/image";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-30">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        alt={author.name}
        unoptimized
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-red-600 mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-gray-500 text-lg italic">{author.bio}</p>
  </div>
);

export default Author;

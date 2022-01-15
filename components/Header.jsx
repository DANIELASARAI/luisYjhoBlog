import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Image from "next/image";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-12 mb-8">
      <div className="border-b w-full inline-block border-green-400 py-8">
        <div className="md:float-left font-bold text-4xl text-red-600">
          <Link href="/">
            <span className="cursor-pointer inline caveat_large text-red-600 ">
              luis<p className="caveat_large text-green-600 inline">Y</p>jho
            </span>
          </Link>
          <a href="/" className="text-3xl inline text-yellow-600">
            {" "}
            Blog
          </a>
          <a
            href="https://www.instagram.com/luisyjhoenportugal/?hl=pt"
            className="inline-block ml-4"
          >
            {" "}
            <span>
              <Image src={instagram} width="30" height="30" priority />
            </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCNjVgF8mmNRnuSMeM_bp74A"
            className="inline-block ml-6"
          >
            {" "}
            <span>
              <Image src={youtube} width="30" height="30" priority />
            </span>
          </a>
        </div>

        <div className="hidden md:float-left lg:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="caveat_small md:float-right mt-2 align-middle text-red-600 hover:text-green-400 ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import Image from "next/Image";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-12 mb-8">
      <div className="border-b w-full inline-block border-yellow-600 py-8">
        <div className="md:float-left font-bold text-4xl text-red-600">
          <Link href="/">
            <span className="cursor-pointer inline caveat_large text-red-600 ">
              luis<p className="caveat_large text-green-600 inline">Y</p>jho
            </span>
          </Link>
          <p className="text-3xl inline text-yellow-600"> Blog</p>
        </div>

        <div className="hidden md:float-left md:contents">
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

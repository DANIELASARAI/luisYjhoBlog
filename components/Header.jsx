import React, { useState, useEffect } from "react";
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
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <div className="cursor-pointer font-bold text-4xl text-red-600">
              <span>luisYjho</span>
            </div>
            {/* <Image
              className="cursor-pointer font-bold text-4xl text-green-600"
              src="/../public/logo.png"
              alt="luisYjho logo"
              width={120}
              height={100}
            /> */}
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-red-600 hover:text-green-400 ml-4 font-semibold cursor-pointer">
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

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
    <div className="container mx-auto px-12 mb-6">
      <div className="border-b w-full inline-block border-sky-400">
        <div className="md:float-left block">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/../public/logo.png"
              alt="luisYjho logo"
              width={180}
              height={170}
            />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="caveat md:float-right mt-4  text-red-600 hover:text-green-400 ml-4  cursor-pointer">
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

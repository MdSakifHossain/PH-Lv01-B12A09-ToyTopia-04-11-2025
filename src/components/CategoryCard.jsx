import React from "react";
import { Link } from "react-router";
import { FaArrowUpLong } from "react-icons/fa6";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={category.href}
      className="border-4 border-zinc-600 px-6 py-6 text-base lg:text-xl font-medium select-none truncate
                transition-all duration-150 
                hover:scale-105 hover:border-violet-500 
                active:scale-95 
                flex items-center justify-between gap-3 
                group"
    >
      {category.display}
      <FaArrowUpLong
        stroke={2}
        className="text-xl text-violet-400 hidden rotate-45 transition-all duration-150 group-hover:block"
      />
    </Link>
  );
};

export default CategoryCard;

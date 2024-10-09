"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Card as AntCard } from "antd";

const Card = ({ product }) => {
  return (
    <Link href={`/details/${product.id}`} className="m-4">
      <AntCard
        hoverable
        style={{ width: 350 }}
        className="flex justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl transition-transform duration-300"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={320}
          className="h-48 w-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
        />
        <AntCard.Meta
          title={
            <h2 className="text-2xl font-bold text-gray-900 tracking-wider">
              {product.title}
            </h2>
          }
          description={
            <p className="text-xl text-gray-700 font-semibold">
              Price: <span className="text-pink-600">${product.price}</span>
            </p>
          }
          className="p-6"
        />
      </AntCard>
    </Link>
  );
};

export default Card;

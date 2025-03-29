// Next
import Image from "next/image";
// Next

// React
import React from "react";
// React

// Components
import Aside from "@/Components/Aside/Aside";
// Components

// Models
import { I_Product } from "@/Models/Internal/Products/ProductsInterface";
// Models

// Functions
import { queryJoiner } from "@/Services/__INIT__/queryJoiner";
import { getAllProductsService } from "@/Services/Products/Get/getAllProductsService";
import { T_SendingDataForGettingProducts } from "@/Models/SendingDataSchema/Products/ProductsSendingData";
// Functions

export const dynamic = "force-dynamic";

const page = async (ctx: { searchParams: Record<string, string> }) => {
  const productsReq = await getAllProductsService(
    ctx.searchParams as T_SendingDataForGettingProducts
  );

  const res = (await productsReq.json()) as I_Product[];
  return (
    <div className="container mx-auto mt-4 flex gap-4 h-full">
      <Aside searchParams={ctx.searchParams} />
      <main className="w-3/4  grid grid-cols-3 gap-4">
        {res.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <Image
              className=" h-40 rounded w-full object-contain"
              src={product.images[0]}
              alt={product.title}
              width={160}
              height={160}
            />
            <h3 className="mt-2 font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.price}$</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default page;

"use client";

// Next
import { usePathname, useRouter } from "next/navigation"; // Next
// Next

// React
import React, { useCallback, useEffect, useState } from "react";
// React

// CSS
import styles from "./Aside.module.css";
// CSS

// Functions
import { queryJoiner } from "@/Services/__INIT__/queryJoiner";
// Functions

// Models
import { T_SendingDataForGettingProducts } from "@/Models/SendingDataSchema/Products/ProductsSendingData";
import { I_Category } from "@/Models/Internal/Category/CategoriesSchema";
import { ValueOf } from "@/Services/__INIT__/services.commonType";
// Models

// Services
import { getAllCategoriesService } from "@/Services/Categories/Get/getAllCategoriesService";
import PendingAndErrorManager from "../PendingAndErrorManager/PendingAndErrorManager";
import { useUnMount } from "@/Hooks/useUnMount";
import { useDebounce } from "@/Hooks/useDebounce";
// Services

type T_AsideProps = {
  searchParams: Record<string, string>;
};

const Aside: React.FunctionComponent<T_AsideProps> = ({ searchParams }) => {
  const router = useRouter();

  const [filterData, setFilterData] = useState<T_SendingDataForGettingProducts>(
    {
      price_min: searchParams.price_min || "",
      title: searchParams.title || "",
      price_max: searchParams.price_max || "",
      categoryId: searchParams.categoryId || "",
    }
  );

  const [categories, setCategories] = useState<{
    categoryData: I_Category[];
    status: "PENDING" | "DONE" | "ERROR";
  }>({ categoryData: [], status: "PENDING" });

  const onDataFilterChange = useCallback(
    (
      _key: keyof typeof filterData,
      value: ValueOf<typeof filterData, keyof typeof filterData>
    ) => {
      setFilterData((prevState) => ({
        ...prevState,
        [_key]: value,
      }));
    },
    []
  );

  const dataGetter = useCallback(async () => {
    setCategories({
      categoryData: [],
      status: "PENDING",
    });
    try {
      const req = await getAllCategoriesService();
      const res = await req.json();
      setCategories({
        categoryData: res,
        status: "DONE",
      });
    } catch (err) {
      setCategories({
        categoryData: [],
        status: "ERROR",
      });
      console.log(err);
    }
  }, []);

  useDebounce(100, dataGetter);

  return (
    <aside
      className={`${styles.asideContainer} w-1/4 bg-white p-6 rounded shadow-md sticky top-0 h-max`}
    >
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Category */}

      <PendingAndErrorManager
        isDone={categories.status === "DONE"}
        isError={categories.status === "ERROR"}
        isPending={categories.status === "PENDING"}
        onError={dataGetter}
        showAfterDone={
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <ul className="space-y-2 text-gray-700">
              {categories.categoryData.map((cat) => (
                <li
                  key={cat.id}
                  onClick={(e) => {
                    if (String(filterData.categoryId) === String(cat.id)) {
                      onDataFilterChange("categoryId", "");
                      return;
                    }
                    onDataFilterChange("categoryId", String(cat.id));
                  }}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={String(cat.id) === filterData.categoryId}
                  />
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      {/* Category */}

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">PriceMin</h3>

        <div className="w-full flex flex-row items-center justify-between">
          <input
            type="range"
            min={0}
            max={500}
            onChange={(e) => {
              onDataFilterChange("price_min", e.target.value);
            }}
          />
          <span>{String(filterData.price_min)}</span>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">PriceMax</h3>

        <div className="w-full flex flex-row items-center justify-between">
          <input
            type="range"
            min={0}
            max={500}
            onChange={(e) => {
              onDataFilterChange("price_max", e.target.value);
            }}
          />
          <span>{String(filterData.price_max)}</span>
        </div>
      </div>
      {/* Price Range */}

      {/* Apply Filter Button */}
      <button
        className="bg-black text-white w-full py-2 rounded"
        onClick={() => {
          const newPath = `/?${queryJoiner(filterData)}`;
          router.replace(newPath);
          console.log(searchParams);
        }}
      >
        Apply Filter
      </button>
    </aside>
  );
};

export default Aside;

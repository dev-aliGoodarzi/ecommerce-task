"use client";

// Next
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
// Next

// React
import React, { useCallback, useState } from "react";
// React

// CSS
import styles from "./HeaderSearchInput.module.css";
// CSS

// Hooks
import { useDebounce } from "@/Hooks/useDebounce";
// Hooks

// Functions
import { queryJoiner } from "@/Services/__INIT__/queryJoiner";
// Functions

const HeaderSearchInput = () => {
  const searchParams = useSearchParams();

  console.clear();
  console.log(searchParams);
  const [title, setTitle] = useState<string>(searchParams?.get("title") || "");

  const router = useRouter();

  const urlChange = useCallback(() => {
    let newPath = "";
    const { title: titleParam, ...others } = Object.fromEntries(
      searchParams.entries()
    );
    if (title === "") {
      newPath = `/?${queryJoiner(others)}`;
    } else {
      newPath = `/?${queryJoiner({ ...others, title })}`;
    }
    router.replace(newPath);
  }, [searchParams, title, router]);

  useDebounce(500, urlChange);

  return (
    <div className={`${styles.headerSearchInput} w-1/3`}>
      <input
        type="text"
        placeholder="Search for products..."
        className="border p-2 rounded w-full"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
    </div>
  );
};

export default HeaderSearchInput;

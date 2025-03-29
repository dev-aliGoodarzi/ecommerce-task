import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 text-center mt-6">
      <h2 className="text-lg font-bold">
        Stay Up to Date with Our Latest Offers
      </h2>
      <input
        type="text"
        placeholder="Enter your email"
        className="mt-2 p-2 rounded"
      />
      <button className="bg-white text-black p-2 rounded ml-2">
        Subscribe
      </button>
    </footer>
  );
};

export default Footer;

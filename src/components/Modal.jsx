import React, { useEffect, useState } from "react";
import LoadSpin from "./LoadSpin";

export default function Modal({ open, onClose, children }) {
  const [isLoading, setIsLoading] = useState(true); //loading spin

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        className="bg-black/60 flex justify-center items-center z-10 fixed inset-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="  bg-white lg:w-[40vw] h-[40vh] rounded-md flex items-center"
        >
          {isLoading && <LoadSpin />}
          {!isLoading && children}
        </div>
      </div>
    </>
  );
}

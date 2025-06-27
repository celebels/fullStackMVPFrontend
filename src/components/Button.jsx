import React from "react";

export default function Button({ fullButton, desc, onClick }) {
  return (
    <>
      {fullButton ? (
        <button
          type="submit"
          onClick={onClick}
          className="text-sm  text-center full-gradient py-[11px] px-8  rounded-md font-bold cursor-pointer"
        >
          <p className="text-sm text-white ">{desc}</p>
        </button>
      ) : (
        <button
          type="submit"
          onClick={onClick}
          className="text-center self-start  rounded-md font-bold cursor-pointer hover:bg-gradient-to-l full-gradient"
        >
          <div className="bg-white rounded-sm px-4 py-2 ">
            <p className="text-sm text-gradient ">
              {desc}
            </p>
          </div>
        </button>
      )}
    </>
  );
}

/*
{fullButton && (
       
      )}


*/

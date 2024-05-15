import React from "react";
import frame from "../../public/frame.png";
import correct from "../../public/correct.png";
export const Correct = () => {
  return (
    <div>
      <div className=" relative flex items-center justify-center">
        <img src={frame.src} alt="" />
        <div className=" absolute p-2 rounded-3xl left-[10px] bg-white flex justify-center items-center">
          <img src={correct.src} />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import aab from "../../assets/aa.png";
function Banner({ image, title, titleSecond }) {
  return (
    <div className="w-auto h-auto flex justify-start items-center relative">
      <div className="bg-black opacity-60 w-full h-full absolute" />
      <img
        className="w-full max-sm:h-[300px] object-cover"
        src={image}
        alt=""
      />
      {titleSecond === "null" ? (
        <div className="absolute bg-[#343280] opacity-70 w-full h-full top-0" />
      ) : (
        <div className="absolute text-white w-full px-36 max-lg:px-24 max-md:px-5">
          {title ? (
            <p className="text-center text-7xl text-white font-bold max-md:text-5xl">
              {title}
            </p>
          ) : (
            <p className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-xl font-normal mb-14 max-md:pt-6">
              Sektörde, Türkiye’nin bir numaralı,
              <br />
              <span className="text-5xl  max-md:text-3xl max-sm:text-xl font-light max-md:pb-6">
                dünyanın sayılı boru tedarik şirketi
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Banner;

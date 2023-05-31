import React, { useEffect, useLayoutEffect, useState } from "react";
import BannerImg from "../../assets/ozayaz/homebanner.png";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function NotFound() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="w-auto h-auto flex justify-start items-center relative">
        <div className="bg-black opacity-70 w-full h-full absolute" />
        <img
          className="w-full max-sm:h-[300px] object-cover"
          src={BannerImg}
          alt=""
        />

        <div className="absolute text-white w-full px-36 max-lg:px-24 max-md:px-12">
          <p className="text-9xl max-xl:text-6xl max-md:text-4xl max-sm:text-2xl font-semibold mb-14 max-md:pt-6 ">
            404
            <br />
            <span className="text-6xl  max-xl:text-3xl  max-md:text-2xl max-sm:text-xl font-light max-md:pb-6">
              Üzgünüz, aradığınız sayfa bulunamadı.
            </span>
            <br />
            <span className="text-3xl  max-md:text-2xl max-sm:text-xl font-light max-md:pb-6 cursor-pointer underline">
              <Link to="/">Ana sayfaya dön.</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;

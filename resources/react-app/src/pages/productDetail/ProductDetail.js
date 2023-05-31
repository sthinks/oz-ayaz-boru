import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Banner from "../../components/banner/Banner";
import productBanner from "../../assets/ozayaz/productdetail.png";
import axiosClient from "../../utils/axiosClient";
import Loading from "../../components/loading/Loading";
import { AiOutlineDownload } from "react-icons/ai";
import "./product.css";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const slug = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterImage, setFilterImage] = useState();
  const [modal, setModal] = useState(false);
  const closeScreen = useRef();
  const getProductHandler = async () => {
    await axiosClient
      .get(`/product-detail/${slug.slug}`)
      .then(function (response) {
        setData(response.data);
        setLoading(true);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductHandler();
  }, []);
  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target.className ===
        "absolute w-full h-full bg-black opacity-30  py-12"
      ) {
        setModal(false);
      } else if (e.target.className === "slick-list") {
        setModal(false);
      } else if (
        e.target.className ===
        "absolute flex justify-center items-center w-full z-50 top-[100px]"
      ) {
        setModal(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const filterProduct = (value) => {
    setModal(true);
    setFilterImage(data.image);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return !loading ? (
    <Loading />
  ) : (
    <>
      {modal && (
        <div className="absolute w-full h-full top-0 left-0 z-40">
          <div className="absolute w-full h-full bg-black opacity-30  py-12" />
        </div>
      )}
      <>
        <div className="w-auto h-auto flex justify-start items-center relative">
          <img
            className="w-full h-[900px] max-sm:h-[300px] object-cover"
            src={productBanner}
            alt=""
          />
          <div className="absolute bg-[#343280] opacity-90 w-full h-full top-0" />
          <div className="w-full px-60 max absolute top-60 flex justify-center items-start max-xl:px-32 max-lg:px-14 max-md:px-3 max-sm:top-20">
            {data.image_detail ? (
              <div className="w-2/6 max-md:hidden">
                <img
                  className="absolute w-[35%] left-[5%] h-[1000px]  object-cover max-md:hidden"
                  src={data?.image_detail}
                  alt="Ürün detay"
                />
              </div>
            ) : (
              <div className="w-2/6 max-md:hidden">
                <img
                  className="absolute w-[35%] left-[5%] h-[1000px]  object-cover max-md:hidden"
                  src={data?.image}
                  alt="Ürün detay"
                />
              </div>
            )}

            <div className="w-4/6 flex justify-end items-end flex-col max-md:w-full">
              <p className="text-6xl  font-bold text-white w-[50%] max-2xl:w-[65%]  max-xl:w-[70%] max-lg:w-[80%] max-sm:w-full text-right max-sm:text-center max-sm:text-4xl">
                {data?.title}
              </p>
              <p className="text-3xl font-normal text-white w-[50%] max-2xl:w-[65%] max-xl:w-[70%] max-lg:w-[80%] max-sm:w-full text-right max-sm:text-center mt-4 max-sm:hidden">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center max-md:my-10 my-10">
          <div className="w-full px-24 max-xl:px-24 max-lg:px-8 max-sm:px-1">
            <div className="flex justify-center items-center w-full">
              <div className="w-2/4 max-md:hidden"></div>
              <div className="w-2/4 max-md:w-full max-md:px-6 max-sm:px-2">
                <p className="mb-4 text-4xl font-bold opacity-60">
                  {data?.title}
                </p>
                <p className="sm:hidden my-2 text-lg font-medium opacity-70">
                  {data?.description}
                </p>
                {data?.process && (
                  <p
                    className="my-2 text-lg font-medium opacity-70"
                    dangerouslySetInnerHTML={{ __html: data?.process }}
                  />
                )}
                {data?.technical_info ? (
                  <p
                    className="my-2 text-lg font-medium opacity-70"
                    dangerouslySetInnerHTML={{ __html: data?.technical_info }}
                  />
                ) : (
                  <p className="my-2 text-lg font-medium opacity-70">
                    İçerikler yakında girilecek.
                  </p>
                )}
                <div className="w-full mt-12">
                  <a
                    className="bg-black flex justify-between items-center px-3 py-4"
                    href={data?.pdf[0].download_link}
                    target="blank"
                  >
                    <p className="text-white text-base font-semibold">
                      Ebat listesini görmek için tıklayınız!
                    </p>
                    <AiOutlineDownload className="text-white text-3xl" />
                  </a>
                </div>
                <div className="md:hidden flex justify-center items-center mt-12">
                  <img src={data?.image} alt="Detay resim" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ProductDetail;

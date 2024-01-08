import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Banner from "../../components/banner/Banner";
import productBanner from "../../assets/product.png";
import axiosClient from "../../utils/axiosClient";
import Slider from "react-slick";
import ProductImg from "../../assets/ozayaz/aboutus.png";
import Loading from "../../components/loading/Loading";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterImage, setFilterImage] = useState();
  const [yellow, setYellow] = useState();
  const [modal, setModal] = useState(false);
  const closeScreen = useRef();
  const getProductHandler = async () => {
    await axiosClient
      .get(`/products`)
      .then(function (response) {
        setData(response.data);
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductHandler();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.target.className === "absolute w-full h-full bg-white py-12") {
        setModal(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const filterProduct = (value) => {
    const result = data?.filter((item) => item.id === value);
    setModal(true);
    setFilterImage(result[0].image);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return !loading ? (
    <Loading />
  ) : (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <link rel="canonical" href="https://ozayazboru.com.tr/urunler" />
        <meta name="description" content="Öz Ayaz Boru" />
        <meta name="description" content="Öz Ayaz Boru Ürünler" />
        {data?.map((item, i) => (
          <meta key={i} name="description" content={item.title} />
        ))}
      </Helmet>
      <Banner image={ProductImg} title="Ürünler" />
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center px-48 relative w-full top-[-150px] max-lg:top-[-80px] max-md:top-0 max-md:my-10 max-xl:px-14 max-md:px-2 max-xl:relative">
          <div className="w-full grid grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-16 px-48 max-2xl:px-14 max-md:px-6">
            {data?.map((item, i) => (
              <div
                className="cursor-pointer h-auto bg-white flex justify-start items-center flex-col shadow-ems hover:scale-[1.08] ease-in transition delay-150 max-md:hover:scale-[1]"
                onClick={() => navigate(`/ürünler/${item.slug}`)}
                onMouseEnter={() => setYellow(item.id)}
                onMouseLeave={() => setYellow()}
              >
                <div className="w-full relative flex justify-center items-center">
                  <img
                    className="w-full max-md:h-56"
                    src={item.image[0]}
                    alt="ürün"
                  />
                  <p
                    className={
                      yellow !== item.id
                        ? "absolute z-50 text-2xl text-white font-bold text-center"
                        : "hidden"
                    }
                  >
                    {item.title}
                  </p>
                  <div
                    className={
                      yellow === item.id
                        ? "hidden"
                        : "absolute bg-[#343280] opacity-70 w-full h-full z-40 top-0"
                    }
                  />
                </div>

                <div className="px-5 pt-8 pb-10">
                  <p className="text-lg font-medium mt-4 opacity-50">
                    {item.description.slice(0, 150)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

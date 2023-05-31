import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import BlogDetailImg from "../../assets/ozayaz/aboutus.png";
import axiosClient from "../../utils/axiosClient";
function BlogDetail() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const slug = useParams();
  const getBlogHandler = async () => {
    await axiosClient
      .get(`/blog-announcement/${slug.slug}`)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setLoading(true);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogHandler();
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-auto h-auto flex justify-start items-center relative">
        <img
          className="w-full max-sm:h-[300px] object-cover"
          src={BlogDetailImg}
          alt=""
        />
        <div className="absolute bg-[#343280] opacity-70 w-full h-full top-0" />
        <div className="w-full px-60 max absolute top-24 flex justify-center items-start max-xl:px-32 max-md:px-8">
          <div className="w-2/6 max-md:hidden">
            <img
              className="absolute w-[35%] left-[5%]  object-cover max-md:hidden"
              src={data?.image}
              alt="Ürün detay"
            />
          </div>
          <div className="w-4/6 flex justify-end max-sm:w-full">
            <p className="text-5xl  font-bold text-white w-[39%] max-xl:w-[70%] max-sm:w-full text-right max-sm:text-center">
              Blog & Haberler
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center max-md:my-10 my-10">
        <div className="w-full px-24 max-xl:px-24 max-lg:px-8 max-sm:px-1">
          <div className="flex justify-center items-center w-full">
            <div className="w-2/4 max-md:hidden"></div>
            <div className="w-2/4 max-md:w-full max-md:px-6">
              <p className="mb-4 text-4xl font-bold opacity-60">
                {data?.title}
              </p>
              <p
                className="my-2 text-lg font-medium opacity-70"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              />
              <div className="md:hidden flex justify-center items-center">
                <img src={data?.image} alt="Detay resim" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;

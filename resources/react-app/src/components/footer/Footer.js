import React, { useEffect, useState } from 'react'
import Logo from '../../assets/header/logo.png'
import axiosClient from '../../utils/axiosClient'
const Footer = () => {
  const [data, setData] = useState()
  const getProductHandler = async () => {
    await axiosClient
      .get(`/products`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getProductHandler()
  }, [])
  return (
    <footer className="py-20 h-auto bg-[#343280]">
      <div className="w-full px-48  max-xl:px-3 grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
        <div className="w-full h-60 flex justify-center items-start">
          <ul className="text-white max-md:w-full">
            <li className="mb-5 text-2xl font-bold">Hakkımızda</li>
            <li>
              <a href="/hakkimizda">Biz Kimiz?</a>
            </li>
            <li>
              <a href="/hakkimizda">Misyon</a>
            </li>
            <li>
              <a href="/hakkimizda">Vizyon</a>
            </li>
            <li>
              <a href="/hakkimizda">Üretim Tesisimiz</a>
            </li>
            <li>
              <a href="/hakkimizda">Kalite Anlayışımız</a>
            </li>
          </ul>
        </div>
        <div className="w-full h-60 flex justify-center items-start">
          <ul className="text-white max-md:w-full">
            <li className="mb-5 text-2xl font-bold">Ürünler</li>
            <li>
              <a href="/ürünler/mekanik-tesisat-borulari">
                Mekanik Tesisat Boruları
              </a>
            </li>
            <li>
              <a href="/ürünler/konstruksiyon-borulari">
                Konstrüksiyon Boruları
              </a>
            </li>
            <li>
              <a href="/ürünler/kazan-borulari">Kazan Boruları</a>
            </li>
            <li>
              <a href="/ürünler/kare-ve-kutu-profiller">
                Kare ve Kutu Profiller
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full h-60 flex justify-center items-start">
          <ul className="text-white max-md:w-full">
            <li className="mb-5 text-2xl font-bold">KVKK</li>
            <li>Kvkk</li>
          </ul>
        </div>
        <div className="w-full h-60 flex justify-center items-start">
          <ul className="text-white max-md:w-full">
            <li className="mb-5 text-2xl font-bold">Blog & Haberler</li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/blog">Haberler</a>
            </li>
          </ul>
        </div>
        <div className="w-full h-60 flex justify-center items-start">
          <ul className="text-white max-md:w-full">
            <li className="mb-5 text-2xl font-bold">İletişim</li>
            <li>
              <a href="/iletisim">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

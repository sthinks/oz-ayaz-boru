import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import pImg from '../../assets/fırın.png'
import fırın from '../../assets/fırın2.png'
import Kurumsal from '../../assets/home-copryt.png'
import ReactPlayer from 'react-player'
import axiosClient from '../../utils/axiosClient'
import BannerImg from '../../assets/ozayaz/homebanner.png'
import Loading from '../../components/loading/Loading'
import aboutus from '../../assets/ozayaz/wearehow.png'
import misyon from '../../assets/ozayaz/misyonblack.png'
import vizyon from '../../assets/ozayaz/vizyonblack.png'
import factory from '../../assets/ozayaz/factory.png'
import kalite from '../../assets/ozayaz/kalite.png'
import homeboru from '../../assets/ozayaz/homeboru.png'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  const [blog, setBlog] = useState([])
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [yellow, setYellow] = useState()
  const getRefHandler = async () => {
    await axiosClient
      .get(`/blog-announcement`)
      .then(function (response) {
        setBlog(response.data)
        if (response.data) {
          setTimeout(setLoading(false), 1000)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const getProductHandler = async () => {
    await axiosClient
      .get(`/products`)
      .then(function (response) {
        setProduct(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getRefHandler()
    getProductHandler()
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="w-auto h-auto flex justify-start items-center relative">
        <div className="bg-black opacity-70 w-full h-full absolute" />
        <img
          className="w-full max-sm:h-[300px] object-cover"
          src={BannerImg}
          alt=""
        />

        <div className="absolute text-white w-full px-36 max-lg:px-24 max-md:px-12">
          <p className="text-6xl max-xl:text-4xl max-md:text-3xl max-sm:text-xl font-semibold mb-14 max-md:pt-6 ">
            Sektörde, Türkiye’nin bir numaralı,
            <br />
            <span className="text-6xl  max-md:text-3xl max-sm:text-xl font-light max-md:pb-6">
              dünyanın sayılı boru tedarik şirketi
            </span>
          </p>
        </div>
      </div>
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center px-36 relative w-full top-[-200px] max-lg:top-[-80px] max-md:top-0 max-md:my-10 max-xl:px-14 max-md:px-2 max-xl:relative">
          <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
            {product?.map((item, i) => (
              <div
                key={i}
                className="relative cursor-pointer h-auto bg-white flex justify-between items-center flex-col shadow-ems hover:scale-[1.08] transition delay-150 ease-in"
                onClick={() => navigate(`/ürünler/${item.slug}`)}
                onMouseEnter={() => setYellow(item.id)}
                onMouseLeave={() => setYellow()}
              >
                <div className="relative w-full">
                  <img className="w-full" src={item.image[0]} alt="ürün" />
                  <div
                    className={
                      yellow !== item.id
                        ? 'absolute bg-[#343280] opacity-70 w-full h-full top-0'
                        : 'hidden'
                    }
                  />
                </div>

                <div className="px-5 pt-8 pb-2 w-full h-full flex justify-between items-start flex-col">
                  <div>
                    <p className="text-xl font-extrabold opacity-60">
                      {item.title}
                    </p>
                    <p className="text-lg font-medium mt-4 opacity-50 mb-10">
                      {item.description.slice(0, 150)}
                    </p>
                  </div>

                  <p className="my-2 text-base font-extrabold opacity-50">
                    Ebat listesini görmek için tıklayınız!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center flex-col">
        <p className="text-6xl font-light">KURUMSAL</p>
        <div className="mt-5 w-full h-auto relative flex justify-center items-center bg-[#F6F6F6]">
          <div className="z-50 flex flex-wrap justify-center items-center px-4 py-28 gap-10 max-2xl:px-12 max-xl:px-2 max-xl:py-24  max-md:py-4  max-md:gap-10 max-xl:grid-cols-3 max-sm:grid-cols-1 max-sm:py-12">
            <div className="flex justify-start items-center flex-col w-64 h-64">
              <div className="flex justify-center items-center flex-col">
                <img src={aboutus} alt="Biz kimiz?" />
                <p className="my-5 text-2xl font-bold opacity-60">Biz Kimiz?</p>
              </div>
              <p className="my-2 text-base font-normal text-center">
                2021 yılında %100 yerli sermaye ile kurulan Özayaz Boru, hem
                Türkiye'de hem de yurt dışında bulunduğu sektörde en büyük
                tedarikçiler arasında yer almayı hedeflemektedir.
              </p>
            </div>
            <div className="flex justify-start items-center flex-col w-64 h-64">
              <div className="flex justify-center items-center flex-col">
                <img src={misyon} alt="Biz kimiz?" />
                <p className="my-5 text-2xl font-bold opacity-60">Misyon</p>
              </div>

              <p className="my-2 text-base font-normal text-center">
                Rekabetçi ve sürdürülebilir büyüme potansiyeli olan “üretim
                gücünü” stratejik portföyü ile doğru şekilde yönetmek
              </p>
            </div>
            <div className="flex justify-start items-center flex-col w-64 h-64">
              <div className="flex justify-center items-center flex-col">
                <img src={vizyon} alt="Biz kimiz?" />
                <p className="my-5 text-2xl font-bold opacity-60">Vizyon</p>
              </div>

              <p className="my-2 text-base font-normal text-center">
                Sektörde, Türkiye’nin bir numaralı, dünyanın sayılı boru tedarik
                şirketi olmak
              </p>
            </div>
            <div className="flex justify-start items-center flex-col w-64 h-64">
              <div className="flex justify-center items-center flex-col">
                <img src={factory} alt="Biz kimiz?" />
                <p className="my-5 text-2xl font-bold opacity-60">
                  Üretim Tesisimiz
                </p>
              </div>

              <p className="my-2 text-base font-normal text-center">
                12.000 m2'si kapalı olmak üzere toplamda 20.000 m2 alan üzerine
                kurulu üretim tesisimiz ile hizmetinizdeyiz.
              </p>
            </div>
            <div className="flex justify-start items-center flex-col w-64 h-64">
              <div className="flex justify-center items-center flex-col">
                <img src={kalite} alt="Biz kimiz?" />
                <p className="my-5 text-2xl font-bold opacity-60">
                  Kalite Anlayışımız
                </p>
              </div>

              <p className="my-2 text-base font-normal text-center">
                Kalite ve standardizasyon bizim için çok önemlidir. Bu yüzden
                nitelikli ve eğitimli ekibimiz tarafından, üretim hattımızdan
                çıkan her ürün gerekli tüm analiz ve testler yapılarak
                titizlikle kontrol edilir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[500px]  my-24 relative flex justify-center items-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${homeboru})` }}
      >
        <div className="absolute w-full h-full bg-black opacity-60 top-0 z-40" />
        <p className="text-2xl text-white font-normal z-50 text-center">
          Sektörde, Türkiye’nin bir numaralı,
          <br />
          <span className="font-light">
            dünyanın sayılı boru tedarik şirketi
          </span>
        </p>
      </div>
      <div className="w-full flex justify-start items-center flex-col mb-20">
        <p className="text-6xl font-light text-center">BLOG & HABERLER</p>

        <div className="w-full grid grid-cols-3 max-lg:grid-cols-1 px-48 max-xl:px-24  max-md:px-5 gap-14 max-2xl:gap-8 max-xl:gap-2">
          {blog?.map((item, i) => (
            <div className="mt-12 max-lg:mt-8">
              <img className="w-full" src={item.image} alt="blog ve haberler" />
              <div className="bg-[#F6F6F6] h-72 max-xl:h-80 max-lg:h-60 p-9 max-2xl:p-5 flex justify-between items-start flex-col max-sm:h-auto">
                <div>
                  <p className="my-2 text-lg font-bold opacity-60">
                    {item.title}
                  </p>
                  <p className="my-2 text-base font-normal opacity-50">
                    {item.description.slice(0, 150)}
                  </p>
                </div>

                <a
                  className="my-2 hover:underline ease-in"
                  href={`/blog/${item.slug}`}
                >
                  Devamını Görüntüle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

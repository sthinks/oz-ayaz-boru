import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import AboutBanner from "../../assets/ozayaz/aboutus.png";
import Banner from "../../components/banner/Banner";
import axiosClient from "../../utils/axiosClient";
import { GrClose } from "react-icons/gr";
import Loading from "../../components/loading/Loading";
import Bizkim from "../../assets/ozayaz/weare.png";
import Misyon from "../../assets/ozayaz/misyon.png";
import Tesis from "../../assets/ozayaz/factory.png";
import Kalite from "../../assets/ozayaz/kalite.png";
import Vizyon from "../../assets/ozayaz/vizyon.png";
import FactorySlider from "../../components/factorySlider/FactorySlider";
import { PiCertificateLight } from "react-icons/pi";
function About() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clickImage, setClickImage] = useState();

  const imageRef = useRef();
  //Fake Loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target.className === "bg-black opacity-70 w-full h-full absolute z-40"
      ) {
        setModal(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  useEffect(() => {
    if (loading === true) {
      window.scrollTo(0, 0);
    }
  }, [loading]);
  return !loading ? (
    <Loading />
  ) : (
    <>
      <Banner image={AboutBanner} title="Hakkımızda" />
      <div className="w-full flex justify-center  my-20 max-sm:mt-5 flex-col">
        <div className="w-full flex justify-center items-center flex-col py-10 bg-[#F6F6F6]">
          <img src={Bizkim} alt="Biz kimiz?" />

          <p className="py-1 text-lg font-medium text-center opacity-50  px-60 max-lg:px-24 max-sm:px-4">
            2021 yılında %100 yerli sermaye ile kurulan Özayaz Boru, hem
            Türkiye'de hem de yurt dışında bulunduğu sektörde en büyük
            tedarikçiler arasında yer almayı hedeflemektedir.
          </p>
        </div>
        <div className="w-full flex justify-between items-center my-8 max-sm:flex-col">
          <div className="w-[49%] max-sm:w-full bg-[#343280] h-80 p-8 flex justify-end items-center max-sm:p-2">
            <div className="flex justify-around items-end flex-col h-full max-sm:w-full max-sm:items-center max-sm:justify-center">
              <div>
                <img src={Vizyon} alt="Vizyon" />
                <p className="my-2 text-2xl font-bold text-white">Vizyon</p>
              </div>

              <p className="text-white font-normal text-lg max-sm:text-center">
                Sektörde, Türkiye’nin bir numaralı,
                <br />
                <span>dünyanın sayılı boru tedarik şirketi olmak</span>
              </p>
            </div>
          </div>
          <div className="w-[49%] max-sm:w-full bg-[#343280] h-80 p-8  flex justify-start items-center max-sm:mt-2  max-sm:p-2">
            <div className="flex justify-around items-start flex-col h-full max-sm:w-full max-sm:items-center max-sm:justify-center">
              <div>
                <img src={Misyon} alt="Misyon" />
                <p className="my-2 text-2xl font-bold text-white">Misyon</p>
              </div>

              <p className="text-white font-normal text-lg max-sm:text-center">
                <span>Rekabetçi ve sürdürülebilir büyüme</span>
                <br />
                <span>potansiyeli olan “üretim gücünü” stratejik </span>
                <br />
                <span>portföyü ile doğru şekilde yönetmek</span>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex justify-center items-center flex-col mt-16">
          <img src={Tesis} alt="Üretim tesismiz" />
          <p className="my-2 text-2xl font-bold opacity-60">Üretim Tesisimiz</p>
          <p className="py-1 text-lg font-medium text-center opacity-50  px-60 max-lg:px-24 max-sm:px-4">
            12.000 m2'si kapalı olmak üzere toplamda 20.000 m2 alan üzerine
            kurulu üretim tesisimiz ile hizmetinizdeyiz.
          </p>
        </div>
        <FactorySlider />
        <div className="w-full bg-[#F6F6F6] flex justify-center items-center flex-col mt-16 py-10">
          <img src={Kalite} alt="Üretim tesismiz" />
          <p className="my-2 text-2xl font-bold opacity-60">
            Kalite Anlayışımız
          </p>
        </div>
        <div className="w-full bg-white flex justify-center items-center flex-col mt-16">
          <p className="py-1 text-lg font-medium text-center opacity-50  px-72 max-lg:px-24 max-sm:px-4">
            Kalite ve standardizasyon bizim için çok önemlidir. Bu yüzden
            nitelikli ve eğitimli ekibimiz tarafından, üretim hattımızdan çıkan
            her ürün gerekli tüm analiz ve testler yapılarak titizlikle kontrol
            edilir.
          </p>
        </div>
      </div>
      {modal && (
        <div
          className="w-full h-full fixed top-0 left-0 z-30 flex justify-center items-center"
          ref={imageRef}
        >
          <button
            className="bg-white absolute top-10 right-4 z-50 p-2 rounded-4xl max-md:hidden"
            onClick={() => setModal(!modal)}
          >
            <GrClose className="text-2xl text-black" />
          </button>
          <img
            className="w-auto h-[90%] max-md:h-[70%] z-50"
            src={clickImage}
            alt="Üretim resmi"
          />
          <div className="bg-black opacity-70 w-full h-full absolute z-40" />
        </div>
      )}
      <div className="w-full bg-[#F6F6F6] flex justify-center items-center flex-col mt-16 py-10">
        <PiCertificateLight className="text-8xl max-md:text-7xl opacity-70" />
        <p className="my-2 text-2xl font-bold opacity-60">Sertifikalarımız</p>
      </div>
      <div className="w-full bg-white flex justify-center items-center mt-16 max-md:flex-col py-5">
        <div
          className="w-1/6 max-xl:w-2/6 max-md:w-full h-auto px-2 flex flex-col justify-center items-center"
          onClick={() => {
            setModal(true);
            setClickImage(
              "https://ozayazboru.com.tr/documents/TS_EN_ISO_9001_2015_Sertifika.jpg"
            );
          }}
        >
          <p className="text-2xl font-semibold opacity-70 py-5">TR</p>
          <img
            className="w-full h-full shadow-xl cursor-pointer"
            src="https://ozayazboru.com.tr/documents/TS_EN_ISO_9001_2015_Sertifika.jpg"
            alt="Certificate"
          />
        </div>
        <div
          className="w-1/6 max-xl:w-2/6 max-md:w-full h-auto px-2 flex flex-col justify-center items-center"
          onClick={() => {
            setModal(true);
            setClickImage(
              "https://ozayazboru.com.tr/documents/TS_EN_ISO_9001_2015_Certificate_.jpg"
            );
          }}
        >
          <p className="text-2xl font-semibold opacity-70 py-5 ">ENG</p>
          <img
            className="w-full h-full shadow-xl cursor-pointer"
            src="https://ozayazboru.com.tr/documents/TS_EN_ISO_9001_2015_Certificate_.jpg"
            alt="Certificate"
          />
        </div>
      </div>
    </>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import AboutBanner from "../../assets/ozayaz/aboutus.png";
import Banner from "../../components/banner/Banner";
import axiosClient from "../../utils/axiosClient";
import Loading from "../../components/loading/Loading";
import Bizkim from "../../assets/ozayaz/weare.png";
import Misyon from "../../assets/ozayaz/misyon.png";
import Tesis from "../../assets/ozayaz/factory.png";
import Kalite from "../../assets/ozayaz/kalite.png";
import Vizyon from "../../assets/ozayaz/vizyon.png";
import FactorySlider from "../../components/factorySlider/FactorySlider";
function About() {
  const [loading, setLoading] = useState(false);
  //Fake Loading
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
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
    </>
  );
}

export default About;

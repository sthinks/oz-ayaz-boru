import React, { useEffect, useLayoutEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import { useFormik } from "formik";
import axiosClient from "../../utils/axiosClient";
import { ToastContainer, toast } from "react-toastify";
import ContactImg from "../../assets/ozayaz/contactbanner.png";
import formimg from "../../assets/ozayaz/contactformimg.png";
import { ImLocation, ImPhone } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { IoIosSearch } from "react-icons/io";
import * as Yup from "yup";
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet";
function Contact() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const notify = () => toast("Form başarıyla gönderildi.");
  const notifyError = () => toast("Form gönderilirken hata oluştu.");
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().min(2).required("Zorunlu alan"),
      lastname: Yup.string().min(2).required("Zorunlu alan"),
      message: Yup.string(5).required("Zorunlu alan"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await axiosClient.post("/contact", values);
        if (result.data.message === "Success") {
          notify();
          resetForm();
        }
      } catch (error) {
        console.log(error);
        notifyError();
      }
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return !loading ? (
    <Loading />
  ) : (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <link rel="canonical" href="https://ozayazboru.com.tr/iletisim" />
        <meta name="description" content="Öz Ayaz Boru" />
        <meta name="description" content="Öz Ayaz Boru İletisim" />
      </Helmet>
      <div className="w-auto h-auto flex justify-start items-center relative">
        <div className="bg-black opacity-60 w-full h-full absolute" />
        <img
          className="w-full max-sm:h-[300px] object-cover"
          src={ContactImg}
          alt=""
        />
        <div className="absolute text-white w-full px-36 max-lg:px-24 max-md:px-12 top-[22%] max-md:top-[45%]">
          <p className="text-center text-7xl text-white font-bold max-md:text-5xl">
            İletişim
          </p>
        </div>
      </div>
      <ToastContainer />
      <div
        className="mt-24 flex justify-center items-center w-full max-md:mt-6 px-48 max-xl:px-24 relative top-[-650px] mb-[-620px] max-2xl:top-[-40
        
        0px] max-xl:top-[-350px] max-lg:top-[10px] max-xl:mb-[-300px] max-lg:mb-12 max-md:px-2 "
      >
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-10">
          {/* <div className="w-full h-full">
            <img className="w-full h-full" src={formimg} alt="İletişim" />
          </div> */}
          {/* <div className="w-full h-full bg-white p-10 shadow-lg max-md:p-4">
            <div className="w-full h-full  flex justify-between flex-col">
              <p className="my-3 text-5xl font-semibold text-right">
                Bize Ulaşın!
              </p>
              <div>
                <form
                  className="flex justify-center items-center flex-col relative"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    className={
                      formik.touched.firstname && formik.errors.firstname
                        ? "bg-white py-2 p-2 shadow-lg w-full outline-none max-sm:w-full border-2 border-red-400"
                        : "bg-white py-2 p-2 shadow-lg w-full outline-none max-sm:w-full"
                    }
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Ad:"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                  <input
                    className={
                      formik.touched.lastname && formik.errors.lastname
                        ? "bg-white mt-2 py-2 p-2 shadow-lg w-full outline-none max-sm:w-full border-2 border-red-400"
                        : "bg-white mt-2 py-2 p-2 shadow-lg w-full outline-none max-sm:w-full"
                    }
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Soyad:"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />

                  <textarea
                    className={
                      formik.touched.message && formik.errors.message
                        ? "resize-none pt-12 h-36 bg-white mt-2 py-2 p-2 shadow-lg w-full outline-none max-sm:w-full border-2 border-red-400"
                        : "resize-none pt-12 h-36 bg-white mt-2 py-2 p-2 shadow-lg w-full outline-none max-sm:w-full"
                    }
                    id="message"
                    name="message"
                    type="message"
                    placeholder="Mesaj:"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                  />
                  <div className="w-full flex justify-end items-center mt-5">
                    <button
                      className="bg-black px-5 py-2 text-white"
                      type="submit"
                    >
                      Gönder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
          <div className="w-full h-full flex justify-center items-center shadow-lg bg-white">
            <div className="flex justify-start items-start flex-col max-lg:px-4 px-8">
              <p className="my-3 text-5xl font-semibold text-left">İletişim</p>
              <div className="flex justify-center items-start mt-2">
                <ImLocation className="text-2xl mr-3" />
                <div>
                  <p className=" opacity-50 text-lg font-bold">Adres:</p>
                  <p className="my-2 opacity-50 font-normal text-lg">
                    Reis mahallesi O.S.B 5. Sokak 31/2 Konya Akşehir.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-start mt-2">
                <ImPhone className="text-2xl mr-3" />
                <div>
                  <p className=" opacity-40 text-lg font-bold">Telefon:</p>
                  <p className="my-2 opacity-50 font-normal text-lg">
                    <a href="tel:03325011992">0 332 501 19 92</a> <br />
                    <a href="tel:03325011993">0 332 501 19 93</a> <br />
                    <a href="tel:03325011994">0 332 501 19 94</a>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-start mt-2">
                <FiMail className="text-2xl mr-3" />
                <div>
                  <p className=" opacity-40 text-lg font-bold">E-mail:</p>
                  <p className="my-2 opacity-50 font-normal text-lg">
                    <a href="mailto:eturpcuoglu@ozayazboru.com.tr">
                      eturpcuoglu@ozayazboru.com.tr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-[520px] flex justify-center items-center"
            onMouseEnter={() => setModal(true)}
            onMouseLeave={() => setModal(false)}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20463.87546390476!2d31.614901249472144!3d38.30012171759446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d091e81111a371%3A0x72342220ccf42d3b!2zw5Z6IEF5YXogxLDDpyBWZSBEacWfIFRpY2FyZXQgU2FuYXlpIEFub25pbSDFnmlya2V0aQ!5e0!3m2!1str!2str!4v1685082168111!5m2!1str!2str"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <IoIosSearch
              className={
                modal
                  ? "hidden"
                  : "absolute scale-x-[-1] text-white text-7xl z-50"
              }
            />
            <div
              className={
                modal
                  ? "hidden"
                  : "bg-black absolute w-full h-full opacity-70 top-0 z-40"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

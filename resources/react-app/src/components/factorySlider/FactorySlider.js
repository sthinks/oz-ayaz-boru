import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import axiosClient from '../../utils/axiosClient'
import { useEffect } from 'react'
import './factorySlider.css'
import { GrClose } from 'react-icons/gr'
function FactorySlider() {
  const [image, setImage] = useState([])
  const [modal, setModal] = useState(false)
  const [clickImage, setClickImage] = useState()
  const imageRef = useRef()
  const getImageHandler = async () => {
    await axiosClient
      .get(`/factory`)
      .then(function (response) {
        console.log(response.data)
        setImage(response.data[0].image)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getImageHandler()
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
        },
      },
    ],
  }
  const imageHandler = (item) => {
    setClickImage(item)
  }
  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target.className === 'bg-black opacity-70 w-full h-full absolute z-40'
      ) {
        setModal(false)
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  return (
    image && (
      <>
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
              className="w-[80%] h-[80%] object-cover z-50"
              src={clickImage}
              alt="Üretim resmi"
            />
            <div className="bg-black opacity-70 w-full h-full absolute z-40" />
          </div>
        )}

        <div className="w-full h-full px-32 my-10 max-md:px-24 max-sm:px-4">
          {image && (
            <Slider {...settings}>
              {image?.map((item, i) => (
                <img
                  className="w-96 h-96 object-cover mx-3 cursor-pointer"
                  onDoubleClick={() => {
                    setModal(!modal)
                    imageHandler(item)
                  }}
                  src={item}
                  key={i}
                  alt="Üretim resimleri"
                />
              ))}
            </Slider>
          )}
        </div>
      </>
    )
  )
}

export default FactorySlider

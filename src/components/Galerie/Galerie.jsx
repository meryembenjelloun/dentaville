import React from 'react'
import './Galerie.css'
import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination,Navigation} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";

const slidesData = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Galerie = () => {
  return (
    <main>
      <div className="galery">
        <Swiper
          modules={[Pagination,Navigation]}
          pagination={{ clickable: true }}
          navigation={true}       // active les flèches
          spaceBetween={20}       // espace entre les slides
          slidesPerView={2}       // 3 images visibles à la fois
          loop={true} 
          breakpoints={{
            0: {          // écran petit (mobile)
              slidesPerView: 1,
            },
            800: {        // écran moyen (tablette)
              slidesPerView: 1,
            },
            1000:{
              slidesPerView: 2,
            },
           
          }}
        >
          {slidesData.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

export default Galerie




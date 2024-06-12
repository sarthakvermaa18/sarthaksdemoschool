import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <div>
      <Swiper
        style={{height:"386px"}}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./Sliderimage/Schholone.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Sliderimage/Schooltwo.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Sliderimage/Schoolthreee.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      <NavLink to="/admisson-procedure" className="Admission-open-slider pt-4 text-dark text-decoration-none">
        <p>Admission Open for Session 2024-25</p>
      </NavLink>
    </div>
  );
}

export default Slider;

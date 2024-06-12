import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination} from 'swiper/modules';
const Facilities = () => {
  return (
    <div className='pt-5'>
        <div >
           <h3 className='p-5 text-center'>OUR FACILITIES</h3>
        </div>
    <Swiper 
         spaceBetween={20}
         pagination={{
            clickable: true,
          }}
         autoplay={{
           delay: 5500,
           disableOnInteraction: false,
         }}
         modules={[Autoplay,Pagination]}
         className="mySwiper gap-1"
         style={{width:'90%'}}
         breakpoints={{
           0: {
             slidesPerView: 1,
           },
           520: {
             slidesPerView: 2,
           },
           950: {
             slidesPerView: 2,
           },
           1150: {
             slidesPerView: 3,
           },
         }}
       >
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="Basket-Ball.jpg"  alt="" />
            <div className='position-absolute bg-warning  text-center align-items-center Hover_slider1'>Basket-Ball</div>
         </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="Chemesty.jpg" alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Chemesty</div>
        </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="football.jpg" alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Football</div>
         </SwiperSlide>
    
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="computer.jpg" alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1' >Computer</div>
         </SwiperSlide>
        
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="dance.jpg"  alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1' >Dance</div>
        </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="music.jpg"  alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Music</div>
        </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="Ncc.jpg"  alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Ncc</div>
        </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="rifil-shitting.jpg"  alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Rifil-Shitting</div>
        </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="simming.jpg"  alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Swimming</div>
        </SwiperSlide>
         <SwiperSlide  className='d-flex flex-wrap mb-5 position-relative Hover_slider'>
           <img width='360px'style={{ height:'220px'}} src="yoga.jpg"   alt="" />
            <div className=' position-absolute bg-warning  text-center align-items-center Hover_slider1'>Yoga</div>
         </SwiperSlide>

       </Swiper>
    </div>
  )
}

export default Facilities;
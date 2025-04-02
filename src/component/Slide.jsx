import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation,Pagination } from 'swiper/modules';

const Slide=()=> {
    return (
        <>
        <div className="slide">
            <Swiper navigation={true} pagination={true}
            loop={true}
            breakpoints={{
                0: {
                    centeredSlides: true,
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                1024: {
                  centeredSlides: false,
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
             modules={[Navigation,Pagination]} className="mySwiper">
                <SwiperSlide><img src="/img/event_01.jpg" alt="이벤트사진" /></SwiperSlide>
                <SwiperSlide><img src="/img/event_02.jpg" alt="이벤트사진" /></SwiperSlide>
                <SwiperSlide><img src="/img/event_03.png" alt="이벤트사진" /></SwiperSlide>
                <SwiperSlide><img src="/img/event_04.jpg" alt="이벤트사진" /></SwiperSlide>
                <SwiperSlide><img src="/img/event_05.png" alt="이벤트사진" /></SwiperSlide>
                <SwiperSlide><img src="/img/event_06.png" alt="이벤트사진" /></SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default Slide
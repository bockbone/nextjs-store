import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function MyCarousel() {
  return (
    <div className="max-w-screen-mediumlg mx-auto">
      <div className="mx-5 xl:mx-0 my-20">
        <Swiper spaceBetween={30} pagination={{ clickable: true }}>
          <SwiperSlide>
            <img className="rounded-xl" src="/slide-one.jpg" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="rounded-xl" src="/slide-two.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MyCarousel;

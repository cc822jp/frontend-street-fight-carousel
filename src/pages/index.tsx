import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="m-4">Carousel</h1>
      <Swiper>
        <SwiperSlide>
          <Image src="/slide1.png" alt="slide1" width={1600} height={900} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide2.png" alt="slide2" width={1600} height={900} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide3.png" alt="slide3" width={1600} height={900} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide4.png" alt="slide4" width={1600} height={900} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

const SliderOffices = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const params = {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // effect: "fade",
      // crossFade: true,
      slidesPerView: 1,
      autoHeight: true,
      allowTouchMove: true,
      loop: true,
      // navigation: {
      //   nextEl: nextRef.current,
      //   prevEl: prevRef.current,
      // },
      // pagination: {
      //   el: ".pagination",
      //   clickable: true,
      //   bulletClass: "block w-2 h-2 rounded-full bg-white/20",
      //   bulletActiveClass: "bg-pink-400",
      // },
      keyboard: true,
      // on: {
      //   init(swiper) {
      //     updateProgress(swiper.realIndex);
      //   },
      //   slideChange(swiper) {
      //     updateProgress(swiper.realIndex);
      //   },
      // },
    };
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
};

export default SliderOffices;

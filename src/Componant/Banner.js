import React from "react";
// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Banner.css";

// import required module
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper";

import psycologist1 from '../../src/Componant/Images/phycologist-1.jpg'
import psycologist2 from '../../src/Componant/Images/psycologist-2.jpg'
import psycologist3 from '../../src/Componant/Images/psycologist-3.jpg'
import psycologist4 from '../../src/Componant/Images/psycologist-4.jpg'
import psycologist5 from '../../src/Componant/Images/psycologist-5.jpg'
import psycologist6 from '../../src/Componant/Images/psycologist-6.jpg'
import psycologist7 from '../../src/Componant/Images/psycologist-7.jpg'
import psycologist8 from '../../src/Componant/Images/psycologist-8.jpg'
import psycologist9 from '../../src/Componant/Images/psycologist-9.jpg'
import psycologist10 from '../../src/Componant/Images/psycologist-10.jpg'
const Banner = () => {
    return (
        <div className=" banner mb-10">
            <div className="px-12 lg:pb-16 py-10 pt-2  bg-base-100 border-b border-neutral hero-overlay bg-opacity-50">
                <h1
                    className="lg:text-4xl md:text-3xl text-2xl lg:mt-10 lg:mb-12 my-6 font-header font-bold text-center"
                >
                    Our Special Psycologist!
                </h1>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        "@0.25": {
                            slidesPerView: 2,
                            spaceBetween: -100,
                        },
                        "@0.75": {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        "@1.25": {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        "@1.75": {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/english-for-career-development'}><img className="" src={psycologist1} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/medical-admission-course'}><img className="" src={psycologist2} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/varsity-admission-course'}><img className="" src={psycologist3} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/bank-job'}><img className="" src={psycologist4} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/corporate-job'}><img className="" src={psycologist5} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/improve-english-communcation-skills'}><img className="" src={psycologist6} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/chinese-for-beginners'}><img className="" src={psycologist7} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/developer-job'}><img className="" src={psycologist8} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'course/grammar-and-punctuation'}><img className="" src={psycologist9} alt="image" /></Link>
                    </SwiperSlide>
                    <SwiperSlide className="card mb-8 shadow-xl">
                        <Link to={'/course/freelancer-job'}><img className="" src={psycologist10} alt="image" /></Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}; SwiperCore.use([Autoplay]);

export default Banner;
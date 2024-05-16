import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-10 lg:px-16">
      <section className="my-10">
        <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}></SectionTitle>
      </section>
      <section>
        {" "}
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-full" src={img1} alt="" />
            <p className="text-lg lg:text-2xl font-bold text-white -mt-16  text-center  shadow-md">
              Salad
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img2} alt="" />
            <p className="text-lg lg:text-2xl font-bold text-white -mt-16  text-center  shadow-md">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img3} alt="" />
            <p className="text-lg lg:text-2xl font-bold text-white -mt-16  text-center  shadow-md">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img4} alt="" />
            <p className="text-lg lg:text-2xl font-bold text-white -mt-16  text-center  shadow-md">
              Desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img5} alt="" />
            <p className="text-lg lg:text-2xl font-bold text-white -mt-16  text-center  shadow-md">
              Salad
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;

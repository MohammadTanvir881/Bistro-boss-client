import SectionTitle from "../../../Componnents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="my-10">
      <section>
        <SectionTitle
          subHeading={`---What Our Clients Say---`}
          heading={`TESTIMONIALS`}
        ></SectionTitle>
      </section>
      {/* swiper rating section */}
      <section className="my-10">
        <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
          {review.map((rev) => (
            <SwiperSlide key={rev._id}>
              <div className="flex flex-col text-center justify-center items-center space-y-5 lg:px-36">
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
                <h1 className="text-7xl"><FaQuoteLeft /></h1>
                <p>{rev.details}</p>
                <h2 className="text-xl text-orange-500">{rev.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;

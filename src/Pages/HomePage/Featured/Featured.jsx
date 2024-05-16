
import img from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="my-16 featured bg-fixed py-16">
      <section>
      <div className=" text-center lg:w-3/12 mx-auto">
            <h1 className="text-yellow-500">---Check it out---</h1>
            <h1 className="text-3xl text-gray-200 font-semibold pb-2 my-4 border-y-4">FROM OUR MENU</h1>
        </div>
      </section>
      <section className=" flex flex-col md:flex-row gap-10 px-5  lg:px-28 justify-center my-16 items-center">
        {/* img section */}
        <div>
          <img className="rounded-lg" src={img} alt="" />
        </div>
        {/* info section */}
        <div className="text-white">
          <p>
            March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn btn-outline text-white mt-5 border-0 border-b-4 border-black">Order Now</button>
        </div>
      </section>
    </div>
  );
};

export default Featured;

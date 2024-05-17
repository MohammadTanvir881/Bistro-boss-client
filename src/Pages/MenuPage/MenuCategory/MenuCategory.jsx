import { Link } from "react-router-dom";

const MenuCategory = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      <section className="mt-10 mb-5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-16">
        {items?.map((items) => (
          <div key={items._id}>
            <div className="flex gap-5">
              <img
                style={{ borderRadius: "0px 200px 200px 200px" }}
                className="h-[104px] w-[118px]"
                src={items.image}
                alt=""
              />
              <div>
                <h2 className="text-xl font-medium">
                  {items.name} ------------
                </h2>
                <h2>{items.recipe}</h2>
              </div>
              <p className="font-bold text-yellow-500">${items.price}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="text-center">
        <Link to={`/shop`}>
          {" "}
          <button className="btn btn-outline text-black mt-5 border-0 border-b-4 border-black">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

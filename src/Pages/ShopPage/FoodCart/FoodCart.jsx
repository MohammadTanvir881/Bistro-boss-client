

const FoodCart = ({items}) => {
    return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       { items.map(item=> <div key={item._id} className="card  bg-base-100 shadow-xl rounded-none">
       <figure><img src={item.image} alt="Shoes" /></figure>
       <p className="bg-black text-white font-semibold absolute px-2 py-1 right-0 m-2 rounded">${item.price}</p>
       <div className="card-body text-center">
         <h2 className=" text-xl font-bold">{item.name}</h2>
         <p>{item.recipe}</p>
         <div className="card-actions justify-center">
           <button className="btn btn-outline border-0 border-b-4 uppercase">add to cart</button>
         </div>
       </div>
     </div>)}
   </div>
    );
};

export default FoodCart;
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import MenuItem from "./MenuItem/MenuItem";
import Testimonials from "./Testimonials/Testimonials";


const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <MenuItem></MenuItem>
           <Featured></Featured>
           <Testimonials></Testimonials>

        </div>
    );
};

export default HomePage;
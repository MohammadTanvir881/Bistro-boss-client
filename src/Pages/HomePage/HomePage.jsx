import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import MenuItem from "./MenuItem/MenuItem";
import Testimonials from "./Testimonials/Testimonials";
import Cover from "../../SharedComponents/Cover/Cover";
import img from "../../assets/home/chef-service.jpg"


const HomePage = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <div className="my-16">
           <Cover img={img} title="Bistro Boss" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." ></Cover>
           </div>
           <MenuItem></MenuItem>
           <Featured></Featured>
           <Testimonials></Testimonials>

        </div>
    );
};

export default HomePage;
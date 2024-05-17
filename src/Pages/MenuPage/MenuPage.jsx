import { Helmet } from "react-helmet";
import Cover from "../../SharedComponents/Cover/Cover";
import img from "../../assets/menu/banner3.jpg"
import img2 from "../../assets/menu/dessert-bg.jpeg"
import img3 from "../../assets/menu/pizza-bg.jpg"
import img4 from "../../assets/menu/salad-bg.jpg"
import img5 from "../../assets/menu/soup-bg.jpg"
// import SectionTitle from "../../Componnents/SectionTitle/SectionTitle"
import MenuItem from "../HomePage/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";


const MenuPage = () => {
    const [menu]= useMenu();
    const desserts = menu.filter(items => items.category ==="dessert");
    const pizza = menu.filter(items=>items.category==="pizza")
    const salad = menu.filter(items=>items.category==="salad")
    const soup = menu.filter(items=>items.category==="soup")
    window.scrollTo(0,0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* cover 1 */}
            <Cover title="OUR MENU" subTitle="Would you like to try a dish?" img={img}></Cover>
            <div className="my-10">
            <MenuItem ></MenuItem>
            </div>
            {/* cover 2 */}
            <Cover title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={img2}></Cover>
            <div className="my-10">
                <MenuCategory items={desserts}></MenuCategory>
            </div>
            {/* cover 3 */}
            <Cover title="PIZZA" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={img3}></Cover>
            <div className="my-10">
                <MenuCategory items={pizza}></MenuCategory>
          
            </div>
            {/* cover 4 */}
            <Cover title="SALADS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={img4}></Cover>
            <div className="my-10">
            <MenuCategory items={salad}></MenuCategory>
            </div>
            {/* cover 5 */}
            <Cover title="SOUPS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={img5}></Cover>
            <div className="my-10">
            <MenuCategory items={soup}></MenuCategory>
            </div>
            
        </div>
    );
};

export default MenuPage;
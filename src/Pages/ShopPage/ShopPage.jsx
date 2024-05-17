import useMenu from "../../Hooks/useMenu";
import Cover from "../../SharedComponents/Cover/Cover";
import coverImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCart from "./FoodCart/FoodCart";
import { Helmet } from "react-helmet";

const ShopPage = () => {
    const [menu]= useMenu();
    const desserts = menu.filter(items => items.category ==="dessert");
    const pizza = menu.filter(items=>items.category==="pizza")
    const salad = menu.filter(items=>items.category==="salad")
    const soup = menu.filter(items=>items.category==="soup")
    const drinks = menu.filter(items=>items.category==="drinks")

    // console.log(desserts,pizza,salad,soup)
    window.scrollTo(0,0)
   
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Shop</title>
        </Helmet>
      <Cover
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
        img={coverImage}
      ></Cover>
      <div className="my-16 px-2 lg:px-40 text-center ">
        <Tabs>
        <div className="mb-8">
        <TabList >
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
        </div>

          <TabPanel>
            <FoodCart items={salad}></FoodCart>
          </TabPanel>
          <TabPanel>
          <FoodCart items={pizza}></FoodCart>
          </TabPanel>
          <TabPanel>
          <FoodCart items={soup}></FoodCart>
          </TabPanel>
          <TabPanel>
          <FoodCart items={desserts}></FoodCart>
          </TabPanel>
          <TabPanel>
          <FoodCart items={drinks}></FoodCart>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopPage;

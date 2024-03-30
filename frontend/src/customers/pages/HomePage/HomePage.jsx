import React, { useEffect } from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import { mens_kurta } from "../../data/mens_kurta";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  findAllProducts,
  findProducts,
  findProductsByCategory,
} from "../../../State/Product/Action";
import CategoryData from "../../components/Category/CategoryData";

const HomePage = () => {
  // const { products } = useSelector((store) => store);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(findProductsByCategory("jeans"));
  // }, []);

  // const data = products.products;
  // console.log("Jeans  ", data);

  return (
    <div className="">
      <MainCarousel />
      <h1 className="font-bold text-3xl capitalize pt-10 text-center w-full">
        Recent Products
      </h1>
      <div className=" space-y-10  py-20 flex flex-col justify-center px-5 lg:px-10">
        <CategoryData categoryName="mens_kurta" />
        <CategoryData categoryName="jeans" />
        <CategoryData categoryName="t-shirts" />
        <CategoryData categoryName="watches" />
        {/* <CategoryData categoryName="shirts" /> */}
        {/* <CategoryData categoryName="watches" /> */}
        {/* <HomeSectionCarousel
          categoryName={"mens_kurta"}
          sectionName={"Men's Kurta"}
        /> */}
        {/* <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's  Dress"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's  Dress"} /> */}
      </div>
    </div>
  );
};

export default HomePage;

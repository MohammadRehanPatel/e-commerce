import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findProductsByCategory } from "../../../State/Product/Action";
import { api } from "../../../config/apiConfig";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const CategoryData = ({ categoryName }) => {
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataForCategory = async () => {
      try {
        const { data } = await api.get(
          `/api/products/category/${categoryName}`
        );
        setCategoryData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForCategory();
  }, [categoryName]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let sortedCategory = categoryData.sort((d1, d2) =>
    d1.createdAt < d2.createdAt ? 1 : d1.createdAt > d2.createdAt ? -1 : 0
  );

  console.log(sortedCategory);
  const third = categoryData[0]?.category?.name;
  const second = categoryData[0]?.category?.parentCategory?.name;
  const first = categoryData[0]?.category?.parentCategory?.parentCategory?.name;

  const handleCategoriesPage = () => {
    navigate(`${first}/${second}/${third}`);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl uppercase font-extrabold text-gray-800 p-5">
          {categoryName?.replace("_", " ")}
        </h2>

        <a
          onClick={handleCategoriesPage}
          className="bg-purple-600 text-white hover:bg-purple-600 hover:text-black flex items-center gap-2.5 rounded-full px-4 py-2.5 transition-colors duration-300"
        >
          <span className="capitalize">
            Explore More {categoryName?.replace("_", " ")}
          </span>
          <ArrowCircleRight />
        </a>
      </div>
      <div className="flex">
        {sortedCategory?.slice(0, 4).map((item) => (
          //
          <div className="flex gap-2 w-full">
            <div
              className="relative group space-y-2 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full m-2 transition-all cursor-pointer hover:shadow-lg"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-80 transition-all duration-500 group-hover:scale-110">
                <img
                  className="object-cover object-left-top w-full h-full shadow-lg transition-all duration-500 group-hover:scale-110"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <h3 className="text-lg font-medium capitalize text-gray-800">
                  {item.brand}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;

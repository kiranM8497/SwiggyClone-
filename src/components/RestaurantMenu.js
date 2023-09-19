import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./Restaurantcategory";
import {
  MENU_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";
import RestaurantCategory from "./Restaurantcategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, menuItems] = useRestaurantMenu(
    MENU_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="w-[100%]">
      <div className=" w-[100%] mb-2 border border-solid bg-white shadow-lg">
        <div className=" w-[60%] mx-[20%] ">
          <h1 className=" font-bold font-serif mt-7 text-2xl">
            {resInfo?.name}
          </h1>
          <p className="text-lg font-serif">{resInfo?.cuisines.join(", ")}</p>
          <div className=" mt-2 ">
            <p className="pb-2">
              ℹ️ Based on distance, an additional delivery fee will apply
            </p>
            <h2>🌟 {resInfo?.avgRating}</h2>
          </div>
        </div>
      </div>
      <div className=" w-[100%] mx-[20%]">
        <div className="flex">
          <h3 className="font-semibold text-lg mb-2">Recommended</h3>
          <p className="ml-2 mt-0.5 font-semibold">
            ({menuItems?.length} ITEMS)
          </p>
        </div>
      </div>
      <div className="60% mx-[20%]  ">
        <div className="flex">
          <ul>
            {menuItems.map((item) => (
              <div key={item?.id}>
                <div className="w-full">
                  <div className="w-full border-gray-100 border-t-2 border-b-2 flex hover:bg-gray-300 px-4 py-8">
                    <div className="w-9/12">
                      <p className=" font-medium mt-2">{item?.name}</p>
                      <p className="item-cost font-normal">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                          : " "}
                      </p>
                      <div className="text-s font-light my-4">
                        {item?.description}
                      </div>
                    </div>
                    <div className="w-3/12 flex justify-between">
                      <img
                        src={IMG_CDN_URL + item.imageId}
                        alt=""
                        className="w-34 relative"
                      />
                      <div className="flex pt-9 ">
                        <button className=" w-auto rounded-lg text-black-400 w-22 m-2 px-4 justify-center text-center h-10 bg-gray-200 hover:bg-green-400 ">
                          ADD+
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

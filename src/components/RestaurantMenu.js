import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {
  MENU_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //later
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
    <div className="menu">
      <img
        className="restaurant-img"
        src={IMG_CDN_URL + resInfo?.cloudinaryImageId}
        alt={resInfo?.name}
      />
      <h1>{resInfo?.name}</h1>
      <h2>{resInfo?.cuisines.join(", ")}</h2>
      {/* <h3>{costForTwoMessage}</h3>
      <h2>{avgRating}</h2> */}
      <div className="menu-title-wrap">
        <h3>Recommended</h3>
        <p className="menu-count">{menuItems?.length} ITEMS</p>
      </div>
      <h3>
        <ul>
          {menuItems.map((item) => (
            <div key={item?.id}>
              <div className="menu-items-details">
                <h3 className="item-name">{item?.name}</h3>
                <p className="item-cost">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
              </div>
              <div>
                <div className="items-description">{item?.description}</div>
              </div>
            </div>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default RestaurantMenu;

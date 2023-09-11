import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  //later
  // const [restaurant, menuItems] = useRestaurant(
  //   swiggy_menu_api_URL,
  //   resId,
  //   RESTAURANT_TYPE_KEY,
  //   MENU_ITEM_TYPE_KEY
  // );

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const { name, avgRating, costForTwoMessage, cuisines, id } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>{avgRating}</h2>
      <h3>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}- {"  Rs."}
              {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default RestaurantMenu;

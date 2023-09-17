import {
  CDN_URL,
  MENU_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";

const RestraurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla,
}) => {
  const deliveryTime = sla?.deliveryTime || "N/A"; // Use a default value if deliveryTime is not available
  return (
    <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-100  min-h-[550px] max-h-[550px] flex flex-col hover:bg-gray-300  ">
      <div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food"
          className="rounded-md "
        />
      </div>
      <div className="m-6 ">
        <h4 className="font-bold py-4 text-lg">{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestraurantCard;

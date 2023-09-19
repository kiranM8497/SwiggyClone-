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
  aggregatedDiscountInfoV3,
}) => {
  const deliveryTime = sla?.deliveryTime || "N/A"; // Use a default value if deliveryTime is not available
  return (
    <div className="m-4 px-4 pt-2 pb-3 w-[250px] rounded-xl bg-gray-100 min-h-[550px] max-h-[650px] flex flex-col hover:bg-gray-300  ">
      <div className="w-[220px] max-h-[250px] relative pt-1">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food"
          className="rounded-md h-[100%] "
        />
        <div className="absolute bottom-1 ">
          <h2 className="text-xl font-extrabold text-red-950 hover:text-slate-100">
            {aggregatedDiscountInfoV3?.header}
            {aggregatedDiscountInfoV3?.subHeader}
          </h2>
        </div>
      </div>
      <div className="m-6 ">
        <h4 className="font-bold py-2.5 text-lg">{name}</h4>
        <h4 className="font-semibold py-1.1">{cuisines.join(", ")}</h4>
        <h4 className=" pr-0.5 py-0.5 text-lg">🌟 {avgRating} </h4>
        <h4 className="font-serif text-xl font-normal">{costForTwo}</h4>
        <h4 className="font-semibold pt-2">⌛{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export const withPromotedComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestraurantCard;

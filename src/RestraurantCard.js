import { CDN_URL } from "./utils/constant";


const RestraurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData;

  const deliveryTime = sla?.deliveryTime || "N/A"; // Use a default value if deliveryTime is not available
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={CDN_URL + resData.cloudinaryImageId}
        alt="food"
        className="res-logo"
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};


export default RestraurantCard;
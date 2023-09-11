import RestraurantCard from "../RestraurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
const Body = () => {
  //State variable using hooks
  const [listOfRestraurants, setListOfRestraurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    const restaurants =
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants;

    //const restaurants = useRestaurant();

    if (restaurants && Array.isArray(restaurants)) {
      // Extract the 'info' property from each restaurant object
      const restaurantData = restaurants.map((restaurant) => restaurant.info);

      console.log(restaurantData);
      // Now, set the state variable 'listOfRestraurants' with the extracted data
      setListOfRestraurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    }
  };

  // console.log("Body rendered")

  //checking online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h2>
          Looks like you're Offline..Please check Internet Connection ...!!
        </h2>
      </div>
    );
  }

  //check if the list is empty (data is not yet fecthed ) if that is the case
  // load shimmer otherwise load data
  return listOfRestraurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for food..."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              // console.log(searchText);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestraurants.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestraurants(
              listOfRestraurants.filter((res) => res.avgRating > 4)
            );
          }}
        >
          Top Rated Restraurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <RestraurantCard key={restaurant?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

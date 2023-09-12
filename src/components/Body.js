import RestraurantCard from "./RestraurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import { Link } from "react-router-dom";
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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      //  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const restaurantData = await checkJsonData(json);

    setListOfRestraurants(restaurantData);
    setFilteredRestaurants(restaurantData);
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
          <Link to={"/restaurant/" + restaurant?.info.id}>
            <RestraurantCard {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

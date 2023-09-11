import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true"
    );

    const json = await data.json();

    setRestaurants(
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurants;
};

export default useRestaurant;

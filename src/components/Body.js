import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";
import ScrollToBottomDetector from "./ScrollDetector";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered mate!");

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleScrollToBottom = async () => {
    const response = await fetch("");
  };

  const fetchAPI = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9816358&lng=76.2998842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resJ = await res.json();
    console.log(resJ);
    setListOfRestaurant(
      resJ?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      resJ?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    return resJ;
  };

  return listOfRestaurants.length === 0 ? (
    <>
      <Search list={searchText} />
      <Shimmer />
    </>
  ) : (
    <>
      <div className="body">
        <Search
          list={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          onClick={() => {
            const filteredStuff = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredStuff);
          }}
          onSecondBtnClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        />
        {searchText === "" ? (
          <div className="res-container">
            {/* <ScrollToBottomDetector onScrollToBottom={handleScrollToBottom} /> */}
            {listOfRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="res-container">
            {/* <ScrollToBottomDetector onScrollToBottom={handleScrollToBottom} /> */}
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;

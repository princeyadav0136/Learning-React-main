import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5695867&lng=77.3825185&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1>You are offline!! 😑</h1>
  }

  const {loggedInUser, setUserName} = useContext(UserContext)
  
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <input type="text" className="p-2 mx-2 border border-solid border-black" value = {searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }}></input>
          <button className="px-4 bg-green-100 rounded-lg" onClick={() => {
            const filteredData = listOfRestaurant?.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredList(filteredData)
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredData = listOfRestaurant?.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredList(filteredData)
          }}
        >
          Top Rated Restaurant
        </button>
        <label className="px-2 text-xl">UserName: </label>
        <input type="text" className="p-2 border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList?.map((resData) => (
          <Link key={resData?.info?.id} to ={"/restaurants/" + resData?.info?.id} ><RestaurantCard  resData={resData} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

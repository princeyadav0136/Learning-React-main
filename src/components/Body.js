import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";



const Body = () => {

    const [restaurantList, setRestaurantList] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredData = restaurantList.filter(
                        (res) => res.data.avgRating >4
                    );
                    setRestaurantList(filteredData);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {restaurantList.map((resData) => <RestaurantCard key={resData.data.id} resData={resData} />)}
            </div>

        </div>
    )
}

export default Body;
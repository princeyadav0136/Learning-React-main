import { CDN_URL } from "../utils/constant";


const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId,name,cuisines,avgRating,sla,areaName} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt= "res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;
import { CDN_URL } from "../utils/constant";


const RestaurantCard = ({resData}) => {
    
    const {cloudinaryImageId,name,cuisines,avgRating,sla,areaName, avgRatingString} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt= "res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="res-name">{name}</div>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            {avgRating ? <h4>{avgRating} Stars</h4> : <h4>{avgRatingString}</h4>}
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;
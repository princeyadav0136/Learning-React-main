import { CDN_URL } from "../utils/constant";


const RestaurantCard = ({resData}) => {
    
    const {cloudinaryImageId,name,cuisines,avgRating,sla,areaName, avgRatingString} = resData?.info;
    return (
        <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-400">
            <img className="rounded-lg" alt= "res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="font-bold py-4 text-lg">{name}</div>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            {avgRating ? <h4>{avgRating} Stars</h4> : <h4>{avgRatingString}</h4>}
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;
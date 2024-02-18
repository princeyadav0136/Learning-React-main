import { CDN_URL } from "../utils/constant";


const RestaurantCard = ({resData}) => {
    
    const {cloudinaryImageId,name,cuisines,avgRating,sla,areaName, avgRatingString, aggregatedDiscountInfoV3} = resData?.info;
    return (
        <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-400">
            <div>
            <div className="absolute">
                {aggregatedDiscountInfoV3 ? <h4 className="uppercase p-2 bg-white shadow-lg m-auto">{aggregatedDiscountInfoV3.header}  {aggregatedDiscountInfoV3.subHeader}</h4> : <></>}
            </div>
            <img className="rounded-lg" alt= "res-logo" src={CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="font-bold pt-4 text-lg">{name}</div>
            <div className="flex font-bold text-lg">{avgRating ? <h4>⭐{avgRating }</h4> : <h4>⭐{avgRatingString }</h4>} &bull; {sla.slaString}</div>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>   
        </div>
    )
}

export default RestaurantCard;
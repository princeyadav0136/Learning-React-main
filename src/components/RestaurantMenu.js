import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constant';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        console.log(jsonData)
        setResInfo(jsonData)
    }

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => <li key = {item.card.info.id}>
                {item.card.info.name} -{"Rs "} {item.card.info.price/100}
            </li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu;
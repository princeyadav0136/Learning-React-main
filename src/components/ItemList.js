import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ itemList }) => {
  return (
    <div>
      {itemList.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span className=" text-2xl">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
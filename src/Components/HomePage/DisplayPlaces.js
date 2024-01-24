import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DisplayPlaces=({places})=>{
    const navigate=useNavigate();
    console.log("display")
    function handleClick(itemId){
        console.log(`Item with ID ${itemId} clicked`);
        navigate(`/item/${itemId}`);
      }
    return (<div className="place-container">
        {
            places && places.map((item)=>(
              <div className="card" key={item.id} onClick={()=>handleClick(item.id)}>
              <img src={item.images[0]} alt="Image"/>
              <div className="address">{item.address}</div>
              <div className="price">{item.price.priceItems[0].amount} {item.price.currency}</div>
              <div className="rating">{item.rating}star</div>
              <div className="review-count">({item.reviewsCount} reviews)</div>
            </div>
            ))
        }
    </div>)
}

export default DisplayPlaces;


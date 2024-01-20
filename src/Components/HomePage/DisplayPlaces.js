import { useEffect, useState } from "react";

const DisplayPlaces=({places})=>{
    console.log("display")
    return (<div className="place-container">
        <h1>places....</h1>
        {
            places && places.map((item)=>(
              <div className="card" id={item.id}>
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


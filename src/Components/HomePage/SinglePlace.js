import React from "react";
import { useParams } from "react-router-dom";
import "../../Images/SinglePlace.css"
const SinglePlace=({places})=>{
    const { id } = useParams();
    console.log("LL")
    const filteredPlaces = places.filter((item) => item.id === id);
    console.log(filteredPlaces,filteredPlaces[0].images[0])
    return (
      <div>
          <h1>Place Details</h1><hr/>
          {/* Render the item details here */}
        <div class="singlePic">
          <div class="singlePic1 picc">
            <img src={filteredPlaces[0].images[0]}/>
          </div>
          <div class="singlePic2345">
            <div class="singlePic23 picc">
              <img src={filteredPlaces[0].images[1]}/>
              <img src={filteredPlaces[0].images[2]}/>
            </div>
            <div class="singlePic45 picc">
                <img src={filteredPlaces[0].images[3]}/>
                <img src={filteredPlaces[0].images[4]}/>
            </div>
          </div>
        </div>
        <div class="placeName">
              <div className="placeTitle">
                <h2>Farm stay in {filteredPlaces[0].address}</h2>
                <div>Price: {filteredPlaces[0].price.priceItems[0].amount}{filteredPlaces[0].price.currency}
              </div>
              </div>
              <div><p>{filteredPlaces[0].persons} guests . {filteredPlaces[0].bedrooms} bedrooms . {filteredPlaces[0].beds} beds . {filteredPlaces[0].bathrooms} bathrooms</p></div>
              <div className="ee"><p>{filteredPlaces[0].rating} Star: {filteredPlaces[0].reviewsCount} reviews </p></div>
        </div>
        <div class="linB"></div>
        <div>
          <div><h5>Host:</h5></div>
          <div class="hostDetails">
                  <div class="hostImage"><img src={filteredPlaces[0].hostThumbnail} /></div>
                  <div class="hostName">{filteredPlaces[0].name}</div>
          </div>
        </div>
        <div className="linB"></div>
        <div>
          <div><h5>What this place offers</h5></div>
          <div>
            <ul>
              {
                filteredPlaces[0].previewAmenities.map((x)=>(
                  <li>{x}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="linB"></div>
      </div>
      )
}

export default SinglePlace;
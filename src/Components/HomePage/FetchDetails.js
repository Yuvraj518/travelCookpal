import axios from "axios"
import { useEffect, useState } from "react";
const initialDetails={
    location: 'Paris',
    checkin: '2024-09-16',
    checkout: '2024-09-17',
    adults: '1',
    children: '0',
    infants: '0',
    pets: '0',
    page: '1',
    currency: 'USD'
  };
const FetchDetails=({ setPlaces, setIsAnimating })=>{
    const [details,setDetails]=useState(initialDetails);
    useEffect(()=>{play()},[])
    console.log("counterApp")
    async function play(e){
        
        setIsAnimating(true);                                      // call animation
        setTimeout(()=>setIsAnimating(false),5000)
        
        if(e){e.preventDefault();}                                // fetching details
        console.log("ram",details.location,details.currency)
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-location',
            params: {
              location: details.location,
              checkin: details.checkin,
              checkout: details.checkout,
              adults: details.adults,
              children:details.children,
              infants:details.infants,
              pets: details.pets,
              page: details.page,
              currency: details.currency
            },
            headers: {
              'X-RapidAPI-Key': '1396b2640amsh17de8d65a3fa13ep1a8348jsnc9f4617f74cc',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
        try{
            alert("API Month limit exceed")
            // const response=await axios.request(options)
            // console.log(response.data)
            // if(response.data.error){console.log(response.data.message)}
            // else{console.log(response.data.results); setPlaces(response.data.results)}
        }
        catch(error){
            alert(error.response.data.message)
        }

    }
    function updateData(e){
        console.log("updatingData")
        setDetails({...details,[e.target.name]:e.target.value})
    }
    return (<div>
        <div>
        <form onSubmit={play} method="GET">
          <div className="formParts">
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" onChange={updateData} value={details.location} /><br />

            <label for="checkin">Check-in Date:</label>
            <input type="date" id="checkin" name="checkin" onChange={updateData} value={details.checkin} /><br />

            <label for="checkout">Check-out Date:</label>
            <input type="date" id="checkout" name="checkout" onChange={updateData} value={details.checkout} /><br />

            <label for="adults">Adults:</label>
            <input type="number" id="adults" name="adults" onChange={updateData} value={details.adults} /><br />
            <input type="submit" value="Search" /> </div>


          <div className="formParts formExtraPart">
            <label for="children">Children:</label>
            <input type="number" id="children" name="children" onChange={updateData} value={details.children} /><br />

            <label for="infants">Infants:</label>
            <input type="number" id="infants" name="infants" onChange={updateData} value={details.infants} /><br />

            <label for="pets">Pets:</label>
            <input type="number" id="pets" name="pets" onChange={updateData} value={details.pets} /><br />

            <label for="page">Page:</label>
            <input type="number" id="page" name="page" onChange={updateData} value={details.page} /><br />

            <label for="currency">Currency:</label>
            <select id="currency" onChange={updateData} name="currency" value={details.currency}>
              <option value="USD" >USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select><br />
          </div>
        </form>
        <div className="extra">Add Extra Information</div><hr/>
        </div>
    </div>
    )
}

export default FetchDetails;
import React from "react";
import Button from "./Components/Buttons"

const App=()=>{
    return <div className="app">
        <h1>Ram</h1>
        <p>Hello I am from rampur</p>
        <Button fruitName="apple" co="red"/>
        <Button fruitName="banana" co="yellow"/>
    </div>;
}

export default App
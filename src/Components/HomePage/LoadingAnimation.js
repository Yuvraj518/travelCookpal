import { useState } from "react";

const LoadingAnimation=({isAnimating})=>{
  console.log("rec",isAnimating);
  return (<div>
       <div className={`loading-animation ${isAnimating ? 'active' : ''}`} />
  </div>)
}

export default LoadingAnimation;












// const [isAnimating, setIsAnimating] = useState(false);
//   console.log("rec",isAnimating);
//   const startAnimation = () => {
//     setIsAnimating(true);
//     setTimeout(()=>setIsAnimating(false),5000)
//   };
//   return (<div>
//        <button onClick={startAnimation}>Start Animation</button>
//        <div className={`loading-animation ${isAnimating ? 'active' : ''}`} />
//   </div>)
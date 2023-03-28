import React from "react";
import ReactDOM from "react-dom/client";
import { ResurantData1 as RD } from '../config';
const ResurantList = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    return (
        <div className="card">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <h4>{cuisines?.join(", ")}</h4>
            <p>{avgRating} stars</p>
        </div>

    )
}
const Content = () => (
    <div className="resturantList">
        {
            RD.map((resturant) => {
                return <ResurantList {...resturant.data} key={resturant.data.id} />
            })
        }
    </div>)
export default Content
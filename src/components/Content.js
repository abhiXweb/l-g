import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ResurantData } from '../config';
import Shimmer from '../components/Shimmer';
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

const Content = () => {
    const [resturantData, setResturantData] = useState();
    const [filteredResData, setFilteredResData] = useState();
    const [query, setQuery] = useState("");
    function xSearch(event) {
        setQuery(event.target.value); // Setting the Value
    }

    useEffect(() => {
        // Get Resturants
        fetchResutrant();
    }, []);

    async function fetchResutrant() {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING');
            const response = data.json();
            response.then(res => (
                setResturantData(res?.data?.cards[2]?.data?.data?.cards),
                setFilteredResData(res?.data?.cards[2]?.data?.data?.cards)
            ))
        } catch (error) {
            console.log(error);
        }
    }


    function filterResturantData(query, resturantData) {
        let smallQuery = query.toLowerCase();
        const filterData = resturantData.filter((restaurant) =>
            restaurant.data.name.toLowerCase().includes(smallQuery)
        );
        return filterData;
    }

    return (
        (
            <>
                <div className="searchBar">
                    <input className="searchInput" type="text" name="q" value={query} onChange={xSearch} />
                    <input className="searchBtn" type="submit" name="search" value="Search" onClick={() => {
                        const data = filterResturantData(query, filteredResData);
                        setResturantData(data);
                    }} />
                </div>
                <div className="resturantList">
                    {
                        (resturantData == undefined) ? <>
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                        </> :
                            resturantData.map((resturant) => {
                                return <ResurantList {...resturant.data} key={resturant.data.id} />
                            })
                    }
                </div>
            </>
        )
    )
}
export default Content
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResFood from "./ResFood";

const ResDetails = () => {
  const [resName, setResName] = useState("");
  const [resDetails, setResDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    let res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=${params.id}`
    );
    let resJ = await res.json();
    console.log(resJ);
    setResName(resJ?.data?.cards[0]?.card?.card?.info?.name);
    setResDetails(
      resJ?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  // useEffect();
  console.log("restaurant name--->", resName);
  console.log("restaurant details--->", resDetails);
  return (
    <div>
      <h1>{resName}</h1>
      <div>
        {resDetails.map((items) => (
          <ResFood id={items.card.info.id} menu={items.card.info} />
        ))}
      </div>
    </div>
  );
};

export default ResDetails;

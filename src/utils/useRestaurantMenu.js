import { useState, useEffect } from "react";
import { REST_DETAILS } from "./constants";

const useRestaurantMenu = (id) => {
  const [resName, setResName] = useState("");
  const [resDetails, setResDetails] = useState([]);
  const entireDetails = { resName, resDetails };

  console.log("URL---->", REST_DETAILS + id);
  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    let res = await fetch(REST_DETAILS + id);
    let resJ = await res.json();
    console.log("resJJJJJJJJJJ------->", resJ);
    setResName(resJ?.data?.cards[0]?.card?.card?.info?.name);
    setResDetails(
      resJ?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return entireDetails;
};

export default useRestaurantMenu;

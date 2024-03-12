import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import ResFood from "./ResFood";

const ResDetails = () => {
  const params = useParams();

  const { id } = params;
  const resMenu = useRestaurantMenu(id);
  const { resName, resDetails } = resMenu;

  console.log("from hooook---->", resMenu);
  console.log("restaurant name--->", resName);
  console.log("restaurant details--->", resDetails);
  return (
    <div>
      <h1>{resName}</h1>
      <div>
        {resDetails.map((items) => (
          <ResFood id={items?.card?.info?.id} menu={items?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default ResDetails;

import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, costForTwo } = resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime} minutes</h5>
      <h5>{costForTwo / 100}</h5>
    </div>
  );
};

export default RestaurantCard;

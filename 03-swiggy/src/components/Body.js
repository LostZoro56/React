import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">top rated restaurant</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

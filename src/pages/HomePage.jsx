import React from "react";
import useGetRestaurantsQuery from "../queries/useGetRestaurantsQuery";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data: restaurants } = useGetRestaurantsQuery();
  const navigate = useNavigate();

  const goToRestaurant = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <div>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.category}</p>
          </div>
          <button onClick={() => goToRestaurant(restaurant.id)}>
            주문하러 가기
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

import useGetRestaurantDetailQuery from "../queries/useGetRestaurantDetailQuery";
import restaurantService from "../services/restaurantService";

const useRestaurant = (id) => {
  const { data } = useGetRestaurantDetailQuery(id);
  const { coupons, menuItems, restaurantInfo } =
    restaurantService.splitRestaurant(data);
  return {
    coupons,
    menuItems,
    restaurantInfo,
  };
};

export default useRestaurant;

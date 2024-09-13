import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "./queryKey.keys";
import api from "../services/api";

const useGetRestaurantDetailQuery = (id) => {
  return useSuspenseQuery({
    queryKey: queryKey.default.restaurant(id),
    queryFn: () => api.getRestaurant(id),
  });
};

export default useGetRestaurantDetailQuery;

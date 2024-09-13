import { useSuspenseQuery } from "@tanstack/react-query";
import api from "../services/api";
import queryKey from "./queryKey.keys";

const useGetMenuDetailQuery = (menuId) => {
  return useSuspenseQuery({
    queryKey: queryKey.default.menu(menuId),
    queryFn: () => api.getMenuDetail(menuId),
  });
};

export default useGetMenuDetailQuery;

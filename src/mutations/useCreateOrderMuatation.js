import { useMutation } from "@tanstack/react-query";
import api from "../services/api";

const useCreateOrderMutation = () => {
  return useMutation({
    mutationFn: (order) => api.createOrder(order),
  });
};

export default useCreateOrderMutation;

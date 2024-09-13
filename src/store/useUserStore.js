import { create } from "zustand";
import userService from "../services/userService";

const useUserStore = create((set, get) => ({
  user: null,
  coupons: [],
  setUser: (user) => {
    set({
      user,
    });
  },
  downloadCoupon: (coupon) => {
    const { coupons } = get();
    if (userService.isCouponExist(coupons, coupon)) return;

    set({
      coupons: userService.addCoupon(coupons, coupon),
    });
  },
}));

export default useUserStore;

import userService from "../services/userService";
import useUserStore from "../store/useUserStore";

const useUser = () => {
  const { coupons, downloadCoupon } = useUserStore();

  const isCouponExist = (coupon) => {
    return userService.isCouponExist(coupons, coupon);
  };

  return { coupons, downloadCoupon, isCouponExist };
};

export default useUser;

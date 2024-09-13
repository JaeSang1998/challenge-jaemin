import React from "react";
import { Link, useParams } from "react-router-dom";

import useRestaurant from "../hooks/useRestaurant";
import useUser from "../hooks/useUser";

const RestaurantPage = () => {
  const { id } = useParams();
  const { coupons, menuItems, restaurantInfo } = useRestaurant(id);
  const { downloadCoupon, isCouponExist } = useUser();

  return (
    <div>
      <h3>정보</h3>
      <section>
        <div>{restaurantInfo.name}</div>
        <div>{restaurantInfo.deliveryTime}</div>
        <div>{restaurantInfo.deliveryFee}</div>
        <div>{restaurantInfo.openingHours}</div>
      </section>
      <h3>쿠폰</h3>
      <section>
        {coupons.map((coupon) => (
          <div key={coupon.id}>
            <div>{coupon.title}</div>
            <div>{coupon.description}</div>
            {!isCouponExist(coupon) ? (
              <button onClick={() => downloadCoupon(coupon)}>다운로드</button>
            ) : undefined}
          </div>
        ))}
      </section>
      <h3>메뉴</h3>
      <section>
        {menuItems.map((menu) => {
          return (
            <div key={menu.id}>
              <Link to={`/menus/${menu.id}`}>
                <span>{menu.name}</span> <span>{menu.price}</span>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RestaurantPage;

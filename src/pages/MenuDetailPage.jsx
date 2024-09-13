import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetMenuDetailQuery from "../queries/useGetMenuDetailQuery";
import useCart from "../hooks/useCart";

const MenuDetailPage = () => {
  const { menuId } = useParams();
  const { data: menuInfo } = useGetMenuDetailQuery(menuId);
  const [quantity, setQuantity] = useState(0);

  const { addMenuToCart } = useCart();

  const handleAddToCart = () => {
    addMenuToCart(menuInfo, quantity);
    setQuantity(0);
  };

  return (
    <div>
      <p>{menuInfo.name}</p>
      <p>{menuInfo.price}</p>
      <p>{menuInfo.description}</p>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={() => handleAddToCart()}>추가하기</button>
      <Link to={"/order"}>주문하러 가기</Link>
    </div>
  );
};

export default MenuDetailPage;

import cartService from "../services/cartService";
import useCartStore from "../store/useCartStore";

const useCart = () => {
  const { cart, addMenuToCart, clearCart } = useCartStore();
  const handleAddCart = (menu, quantity) => {
    if (cartService.checkRestaurantDiff(cart, menu)) {
      clearCart();
    }
    addMenuToCart(menu, quantity);
  };

  return {
    cart,
    restaurantId: cart.length > 0 ? cart[0].restaurantId : null,
    addMenuToCart: handleAddCart,
  };
};

export default useCart;

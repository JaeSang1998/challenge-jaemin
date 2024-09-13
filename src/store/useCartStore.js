import { create } from "zustand";
import cartService from "../services/cartService";

const INITIAL_STATE = {
  cart: [],
};

const useCartStore = create((set, get) => ({
  cart: [],
  addMenuToCart: (menu, quantity) => {
    const { cart } = get();
    if (cartService.isExistCart(cart, menu)) {
      set({
        cart: cartService.updateCart({ cart, menu, quantity }),
      });
      return;
    }

    set({ cart: cartService.addMenuToCart({ cart, menu, quantity }) });
  },
  clearCart: () => {
    set(INITIAL_STATE);
  },
}));

export default useCartStore;

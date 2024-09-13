const BASE_URL = "http://localhost:4001";

const getRestaurants = async () => {
  const respose = await fetch(`${BASE_URL}/restaurants`);
  const data = await respose.json();
  return data;
};

const getRestaurant = async (id) => {
  const response = await fetch(
    `${BASE_URL}/restaurants/${id}?_embed=menuItems&_embed=coupons`
  );
  const data = await response.json();
  return data;
};

const getMenuDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/menuItems/${id}`);
  const data = await response.json();
  return data;
};

const createOrder = async (order) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
};

const api = {
  getRestaurants,
  getRestaurant,
  getMenuDetail,
  createOrder,
};

export default api;

const queryKey = {
  default: {
    restaurants: ["restaurants"],
    restaurant: (id) => ["restaurant", id],
    menu: (id) => ["menu", id],
  },
};

export default queryKey;

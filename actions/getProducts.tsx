import axios from "axios";

const getProducts = async () => {
  const res = await axios.get(`api/products`);
  return res.data;
};

export default getProducts;

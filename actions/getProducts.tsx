import axios from "axios";

const getProducts = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return res.data;
};

export default getProducts;

import axios from "axios";

const getSingleProduct = async (id: string) => {
  const res = await axios.get(`api/products/${id}`);
  return res.data;
};

export default getSingleProduct;

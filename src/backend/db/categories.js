import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    title: "AIR JORDAN LOW SE",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/a576a457-055e-40ff-911d-f148529e97e2/air-jordan-low-se-shoes-KKFsH5.png",
    price: " ₹ 10 295.00",
    categoryName: "MEN'S SHOES",
  },
  {
    _id: uuid(),
    title: "Air Jordan 1 Mid SE",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_au…322820/air-jordan-1-mid-se-older-shoes-BF21nm.png",
    price: "₹ 8 695.00",
    categoryName: "Older Kids' Shoes",
  },
  {
    _id: uuid(),
    title: "Air Jordan 1 Low",
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_au…1e-54a5911654eb/air-jordan-1-low-shoes-459b4T.png",
    price: "₹ 8 295.00",
    categoryName: "Women's Shoes",
  },
];

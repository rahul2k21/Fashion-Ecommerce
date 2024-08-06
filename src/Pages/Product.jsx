import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {useParams} from "react-router-dom";
import Breadcrupms from "../components/Breadcrupms/Breadcrupms";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../components/RelatedProducts/RelatedProduct";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrupms product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct/>
    </div>
  );
}

export default Product;

import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const ProductosItem = ({
  id,
  title,
  price,
  image,
  category,
  cantidad
}) => {

  const value = useContext(DataContext);
  const addCart = value.addCart

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <div className="product_img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="product_footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="button">
        <button className="btn" onClick={() =>addCart(id)}>Add to cart</button>
        <div>
          <Link to={`/product/${id}`} className="btn">
            Vista
          </Link>
        </div>
      </div>
    </div>
  );
};

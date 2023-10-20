import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total

  const toogleFalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "cart-elements show" : "cart-elements";
  const show2 = menu ? "cart-element show" : "cart-element";

  const subtract = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCart([...cart]);
    });
  };

  const add = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCart([...cart]);
    });
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to remove this product?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart_close" onClick={toogleFalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Your cart</h2>
        <div className="cart_center">
          {cart.length === 0 ? (
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem,",
              }}
            >
              {" "}
              Carrito Vacio
            </h2>
          ) : (
            <>
              {cart.map((product) => (
                <div className="cart_item" key={product.id}>
                  <img src={product.image} alt="" />
                  <div>
                    <h3>{product.title}</h3>
                    <p className="price">${product.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => add(product.id)}
                    ></box-icon>
                    <p className="amount">{product.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => subtract(product.id)}
                    ></box-icon>
                  </div>
                  <div
                    className="remove_item"
                    onClick={() => removeProduct(product.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="cart_footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
};

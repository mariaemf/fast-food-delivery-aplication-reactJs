import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/product_01.1.jpg";

const CartItem = () => {
  return (
    <>
      <ListGroupItem>
        <div className="cart__item-info">
          <img src={productImg} alt="product-img" />

          <div className="cart__product-info">
            <div>
              <h6>Burger</h6>
              <p>
                2x <span>$24.00</span>
              </p>

              <div>
                <span>
                  <i class="ri-add-line"></i>
                </span>
                <span>2</span>
                <span>
                  <i class="ri-subtract-line"></i>
                </span>
              </div>
            </div>

            <span>
              <i class="ri-close-line"></i>
            </span>
          </div>
        </div>
      </ListGroupItem>
    </>
  );
};

export default CartItem;

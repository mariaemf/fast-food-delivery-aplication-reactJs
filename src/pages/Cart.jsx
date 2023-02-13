import React from "react";
import CommonSection from "../components/UI/commom-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../Styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions, CartActions } from "../store/shopping-cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title="Cart">
        <CommonSection title="your Cart" />
        <section>
          <Container>
            <Row>
              <Col lg="12">
                {cartItems.length === 0 ? (
                  <h5 className="text-center">Your cart is empty</h5>
                ) : (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item} />
                      ))}
                    </tbody>
                  </table>
                )}
                <div>
                  <h6>
                    Subtotal: <span> ${totalAmount}</span>
                  </h6>
                  <p>Taxes and shipping will calculate at checkout </p>
                  <div>
                    <button className="addToCart__btn"></button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}x</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-5-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;

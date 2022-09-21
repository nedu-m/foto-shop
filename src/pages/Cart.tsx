import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Cart.scss";


function Cart() {
  //get cartItems from context
  const { cartItems, allImages } = useContext(AppContext);

  //map over cartItems with image url and display in cart
  const cartItemsDisplay = cartItems.map((item) => {
    //find image in allImages state
    const image = allImages.find((image: { id: string }) => image.id === item);
    //return image
    return (
      <div key={image.id}>
        <img src={image.url} alt="Pic" />
      </div>
    );
  });

  //delete

  //return cart items with the price tag of $5.99 for each image
  return (
    <div className="cart">
      <h1 className="cart__title">Cart</h1>
      <div className="cart__items">{cartItemsDisplay}</div>
      <div className="cart__total">
        <h2>Total: ${(cartItems.length * 5.99).toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;

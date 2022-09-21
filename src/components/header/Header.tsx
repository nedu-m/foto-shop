import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FcPaid } from "react-icons/fc";
import "./header.scss";

//when user clicks on title, redirect to home page and cart page on /cart route
export default function Header() {
  const { cartItems } = useContext(AppContext);

  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1>Foto-shop</h1>
      </Link>
      <Link to="/cart">
        <div>
          <FcPaid className="" />
          <span className="">{cartItems.length}</span>
        </div>
      </Link>
    </header>
  );
}

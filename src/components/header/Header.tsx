import { Link } from "react-router-dom";
import "./header.scss";
import { FcPaid } from "react-icons/fc";

//when user clicks on title, redirect to home page and cart page on /cart route
export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1>Foto-shop</h1>
      </Link>
      <Link to="/cart">
        <FcPaid />
      </Link>
    </header>
  );
}

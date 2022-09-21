import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { IconContext } from "react-icons/lib";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BsFillCartCheckFill, BsCartPlusFill } from "react-icons/bs";

import "./Image.scss";

type ImageProps = {
  id: string;
  url: string;
  alt: string;
  isFavorite?: boolean;
};

const Image = ({ id, url, alt }: ImageProps) => {
  const { toggleFavorite, addToCart } = useContext(AppContext);

  const [isFavorite, setIsFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);

  //toggle favorite
  function handleClick() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    toggleFavorite(id);
  }

  //toggle cart
  function handleCartClick() {
    setInCart((prevInCart) => !prevInCart);
    addToCart(id);
  }

  return (
    <div className="image">
      <IconContext.Provider value={{ size: "2em", color: "#4db838" }}>
        <div className="image__header">
          <div className="image__header__favorite">
            {/*if image is favorite, show filled heart icon, else show empty heart icon*/}
            {isFavorite ? (
              <FcLike onClick={handleClick} />
            ) : (
              <FcLikePlaceholder onClick={handleClick} />
            )}
          </div>

          <div className="image__header__cart">
            {/*if image is in cart, show filled cart icon, else show empty cart icon*/}
            {inCart ? (
              <BsFillCartCheckFill onClick={handleCartClick} />
            ) : (
              <BsCartPlusFill onClick={handleCartClick} />
            )}
          </div>
        </div>
      </IconContext.Provider>

      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;

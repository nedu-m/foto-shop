import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { IconContext } from "react-icons/lib";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BsFillCartCheckFill, BsCartPlusFill } from "react-icons/bs";

import "./Image.scss";

type ImageProps = {
  id: number;
  url: string;
  alt: string;
  isFavorite?: boolean;
};

const Image = ({ id, url, alt }: ImageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="image">
      <IconContext.Provider value={{ size: "2em", color: "#4db838" }}>
        <div className="image__header">
          <div className="image__header__favorite">
            {isFavorite ? (
              <FcLike onClick={toggleFavorite} />
            ) : (
              <FcLikePlaceholder onClick={toggleFavorite} />
            )}
          </div>
          <div className="image__header__cart">
            {isInCart ? (
              <BsFillCartCheckFill onClick={() => setIsInCart(!isInCart)} />
            ) : (
              <BsCartPlusFill onClick={() => setIsInCart(!isInCart)} />
            )}
          </div>
        </div>
      </IconContext.Provider>

      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;

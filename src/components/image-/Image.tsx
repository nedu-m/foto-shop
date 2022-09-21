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
  const { toggleFavorite } = useContext(AppContext);

  const [isFavorite, setIsFavorite] = useState(false);

  //toggle favorite
  function handleClick() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    toggleFavorite(id);
  }

  return (
    <div className="image">
      <IconContext.Provider value={{ size: "2em", color: "#4db838" }}>
        <div className="image__header">
          {isFavorite ? (
            <FcLike onClick={handleClick} />
          ) : (
            <FcLikePlaceholder onClick={handleClick} />
          )}
        </div>
      </IconContext.Provider>

      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;

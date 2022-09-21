import { useState } from "react";
import "./Image.scss";

type ImageProps = {
  id: number;
  url: string;
  alt: string;
  isFavorite?: boolean;
};

const Image = ({ id, url, alt }: ImageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  //console log id on toggle
  return (
    <div className="image" key={id} onClick={toggleFavorite}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;

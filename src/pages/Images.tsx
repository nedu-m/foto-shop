import { AppContext } from "../context/AppContext";
import Image from "../components/image-/Image";
import { useContext } from "react";
import "../styles/Pages/Images.scss";

//set image type
type Image = {
  id: number;
  name: string;
  url: string;
  isFavorite: boolean;
};

function Images() {
  //get images from context
  const { allImages } = useContext(AppContext);

  return (
    <>
      <div className="image-grid">
        {/* map images and pass the Image type */}
        {allImages.map((image: Image) => (
          <Image
            key={image.id}
            id={image.id}
            url={image.url}
            alt={image.name}
            isFavorite={image.isFavorite}
          />
        ))}
      </div>
    </>
  );
}

export default Images;

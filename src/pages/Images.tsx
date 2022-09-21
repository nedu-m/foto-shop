import { AppContext } from "../context/AppContext";
import Image from "../components/image-/Image";
import { useContext } from "react";
import "../styles/Pages/Images.scss";

//set image type
type Image = {
  id: number;
  name: string;
  url: string;
};

//set images to allImages from context
function Images() {
  const { allImages } = useContext(AppContext);
  return (
    <div className="image-grid">
      {allImages.map((image: Image) => (
        <Image key={image.id} id={image.id} url={image.url} alt={image.name} />
      ))}
    </div>
  );
}

export default Images;

//get allImages from context and map over them
import { AppContext } from "../context/AppContext";
// import Image from "../components/image/Image";
import { useContext } from "react";
import "../styles/Pages/Images.scss";

//set image type
type Image = {
  id: number;
  name: string;
  url: string;
};

//set images to allImages from context
const Images = () => {
  const { allImages } = useContext(AppContext);
  return (
    <div className="images">
      {allImages.map((image: Image) => (
        <div className="image" key={image.id}>
          <img src={image.url} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default Images;

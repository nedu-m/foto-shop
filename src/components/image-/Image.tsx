import "./Image.scss";

type ImageProps = {
  id: number;
  url: string;
  alt: string;
};

const Image = ({ id, url, alt }: ImageProps) => {
  return (
    <div className="image" key={id}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;

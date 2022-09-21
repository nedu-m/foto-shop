import { createContext, useState, useEffect } from "react";

//create context
const AppContext = createContext({
  allImages: [],
  toggleFavorite: (imageId: string) => {},
});

function AppProvider({ children }: { children: React.ReactNode }) {
  const [allImages, setAllImages] = useState([]);

  function toggleFavorite(imageId: string) {
    setAllImages((prevImages: any) => {
      const updatedImages = prevImages.map((image: any) => {
        if (image.id === imageId) {
          return { ...image, isFavorite: !image.isFavorite };
        }
        return image;
      });
      return updatedImages;
    });
  }

  /*
  fetch images from api https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json
  and set them to allImages state
 */
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllImages(data));
  }, []);

  return (
    <AppContext.Provider value={{ allImages, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

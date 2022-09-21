import { createContext, useState, useEffect } from "react";

//create context
const AppContext = createContext({
  allImages: [],
  toggleFavorite: (imageId: string) => {},
  cartItems: [],
  addToCart: (imageId: string) => {},
});

function AppProvider({ children }: { children: React.ReactNode }) {
  const [allImages, setAllImages] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(imageId: string) {
    setAllImages((prevImages: any) => {
      //find image
      const updatedImages = prevImages.map((image: any) => {
        //if image is found, toggle favorite
        if (image.id === imageId) {
          console.log(imageId);
          console.log(!image.isFavorite);
          //return new image with updated favorite
          return { ...image, isFavorite: !image.isFavorite };
        }
        return image;
      });
      return updatedImages;
    });
  }

  function addToCart(imageId: string) {
    setCartItems((prevItems: any) => {
      const updatedItems = prevItems.map((item: any) => {
        if (item.id === imageId) {
          return { ...item, inCart: !item.inCart };
        }
        return item;
      });
      return updatedItems;
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
    <AppContext.Provider
      value={{ allImages, toggleFavorite, cartItems, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

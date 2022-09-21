import { createContext, useState, useEffect } from "react";

//create app content and set the types
const AppContext = createContext<AppContextType>({
  allImages: [],
  toggleFavorite: (imageId: string) => {},
  cartItems: [],
  addToCart: (newItem: string) => {},
});

//set types for context provider
interface AppContextProviderProps {
  children: React.ReactNode;
}
//set types for context
interface AppContextType {
  allImages: any;
  toggleFavorite: (imageId: string) => void;
  cartItems: string[];
  addToCart: (newItem: string) => void;
}

function AppProvider({ children }: AppContextProviderProps) {
  //set state for all images
  const [allImages, setAllImages] = useState([]);

  //declare cartItems state and set it type to array of strings
  const [cartItems, setCartItems] = useState<string[]>([]);

  function toggleFavorite(imageId: string) {
    setAllImages((prevImages: any) => {
      //find image
      const updatedImages = prevImages.map((image: any) => {
        //if image is found, toggle favorite
        if (image.id === imageId) {
          //return new image with updated favorite
          return { ...image, isFavorite: !image.isFavorite };
        }
        return image;
      });
      return updatedImages;
    });
  }

  function addToCart(newItem: string) {
    setCartItems((prevItems) => {
      //check if item is already in cart
      if (prevItems.includes(newItem)) {
        //if item is already in cart, remove item from cart
        return prevItems.filter((item) => item !== newItem);
      } else {
        //if item is not in cart, add item to cart
        return [...prevItems, newItem];
      }
    });
  }

  //fetch images from api and set them to allImages state
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllImages(data));
  }, []);

  //return context provider and set the value types
  return (
    <AppContext.Provider
      value={{
        allImages,
        toggleFavorite,
        cartItems,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

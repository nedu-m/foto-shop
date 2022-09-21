import { createContext, useState, useEffect } from "react";

//create context
const AppContext = createContext({
  allImages: [],
  setAllImages: () => {},
});

function AppProvider({ children }: { children: React.ReactNode }) {
  const [allImages, setAllImages] = useState([]);

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

  console.log(allImages);

  return (
    <AppContext.Provider value={{ allImages, setAllImages }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

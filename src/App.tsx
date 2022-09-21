import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Images from "./pages/Images";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Images />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

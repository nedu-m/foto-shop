import "./App.scss";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Images from "./pages/Images";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Images />
    </div>
  );
}

export default App;

import "./App.css";
import Navigationbar from "./Navigator";
import ShowProducts from "./ShowProducts";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const itemArray = new Array(8).fill(0);

function App() {
  const [cart, setCart] = useState(0);

  const addItem = (index) => {
    setCart(cart + 1);
    itemArray[index] = 1;
  };

  const removeItem = (index) => {
    setCart(cart - 1);
    itemArray[index] = itemArray[index] - 1;
    
  };
  return (
    <div className="container-fluid">
      <Navigationbar cart={cart} />

      {/* Header section */}
      <div>
        <header className="bg-dark py-5">
          <div className="container">
            <div className="text-center text-white">
              <h1 className="fw-bolder">Shop in style</h1>
              <p className="fw-normal text-white-50 mb-0">
                With this shop hompeage template
              </p>
            </div>
          </div>
        </header>
      </div>


      <ShowProducts
        cart={cart}
        addItem={addItem}
        removeItem={removeItem}
        itemArray={itemArray}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([
    { name: "Burger", price: 3, quantity: 2 },
    { name: "Sundae", price: 4, quantity: 1 },
  ]);

  return (
    <div className="App">
      <button
        onClick={() => {
          const newElement = { name: "Patatoes", price: 2, quantity: 6 };

          setBasket([...basket, newElement]);
        }}
      >
        Ajouter au panier
      </button>
      <ul>
        {basket.map((element) => (
          <li>
            {element.name} ({element.quantity * element.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

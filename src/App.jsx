import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState("tv");
  const [selectedColors, setSelectedColors] = useState(["black", "white"]);

  const onSelectedProductChange = ({ target }) =>
    setSelectedProduct(target.value);
  const onSelectedColorsChange = ({ target }) => {
    const newSelectedColors = [...target.selectedOptions].map(
      (option) => option.value,
    );
    setSelectedColors(newSelectedColors);
  };
  return (
    <div className="App">
      <select value={selectedProduct} onChange={onSelectedProductChange}>
        <option value="tv">Television</option>
        <option value="smartphone">Smartphone</option>
        <option value="laptop">Laptop</option>
      </select>
      <select multiple value={selectedColors} onChange={onSelectedColorsChange}>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="silver">Silver</option>
      </select>
    </div>
  );
}

export default App;

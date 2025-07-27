import Select from "react-select";
import "./App.css";

const products = [
  { value: "tv", label: "Television" },
  { value: "smartphone", label: "Smartphone" },
  { value: "laptop", label: "Laptop" },
];
const colors = [
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "silver", label: "Silver" },
];
function App() {
  return (
    <div className="App">
      <Select options={products} defaultValue={products[0]} />
      <Select isMulti options={colors} defaultValue={colors.slice(0, 2)} />
    </div>
  );
}

export default App;

import { useContext } from "react";
import { DataContext } from "./App";

const FactBox = () => {
  const factData = useContext(DataContext);
  return (
    <div>
      <div style={{ marginTop: "24px", border: "4px dotted", padding: "8px" }}>
        {factData.data}
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(factData.data);
        }}
      >
        Copy to clipboard
      </button>
    </div>
  );
};
export default FactBox;

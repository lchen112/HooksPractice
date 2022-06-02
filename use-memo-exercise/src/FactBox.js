import { useContext } from "react";
import { DataContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon style={{ marginLeft: "12px" }} icon={faClipboard} />
      </button>
    </div>
  );
};
export default FactBox;

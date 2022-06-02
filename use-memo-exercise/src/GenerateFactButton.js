import { memo } from "react";
import "./GenerateFactButton.css";

const GenerateFactButton = (props) => {
  const { incrementCount } = props;
  return (
    <button className="Generate-button" onClick={() => incrementCount()}>
      Generate Random Fact
    </button>
  );
};

export default memo(GenerateFactButton);

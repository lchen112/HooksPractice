import { memo } from "react";
import "./Child.css";

const Child = (props) => {
  const { incrementCount } = props;
  return (
    <button className="Generate-button" onClick={() => incrementCount()}>
      Generate Random Fact
    </button>
  );
};

export default memo(Child);

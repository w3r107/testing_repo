import React, { useState } from "react";
import PropTypes from "prop-types";

const DisplayArrayNumbers = ({ numbers }: { numbers: number[] }) => {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isResetPossible, setIsResetPossible] = useState(false);

  const handleClick = () => {
    if (isResetPossible) {
      console.log("first");
      setIndex(0);
      setShowAll(false);
      setIsResetPossible(false);
      return;
    }
    if (index < numbers.length - 1) {
      setIndex(index + 1);
    } else {
      setShowAll(true);
      setIsResetPossible(true);
    }
  };

  return (
    <div>
      {showAll ? <div>{numbers.join(", ")}</div> : <div>{numbers[index]}</div>}
      <button onClick={handleClick}>{showAll ? "Reset" : "Next"}</button>
    </div>
  );
};

export default DisplayArrayNumbers;

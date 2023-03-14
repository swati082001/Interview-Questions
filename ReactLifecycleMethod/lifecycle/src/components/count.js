import React, { useEffect } from "react";

const Count = ({ number }) => {
  useEffect(() => {
    console.log("Functional Component : Mounting phase");

    return () => {
      console.log("Functional Component : Unmountng phase");
    };
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default Count;

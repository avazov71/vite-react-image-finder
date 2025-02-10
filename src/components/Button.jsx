import React from "react";

const Button = ({ handleLoadMore }) => {
  return (
    <div>
      <button onClick={handleLoadMore} className="Button">
        Load More
      </button>
    </div>
  );
};

export default Button;

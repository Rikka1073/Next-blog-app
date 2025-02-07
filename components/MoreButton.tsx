import React from "react";

const MoreButton = ({ onclick, text, page, limit }) => {
  return (
    <div className="flex justify-center">
      <button onClick={onclick} className={`btn btn-wide ${page === limit ? "btn-disabled" : ""}`}>
        {text}
      </button>
    </div>
  );
};

export default MoreButton;

import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="f3 mt1">
      <p>
        {"This magic brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className=" form center pa4 shadow-5 br3 ">
          <input
            className="f3 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow link pa2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">DescriptionBox</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          inventore cum esse, cumque dicta laudantium nostrum suscipit ullam
          consequatur, ipsa aspernatur minus. Distinctio sed iure rem at,
          dolorem, qui ea aperiam ullam rerum sunt debitis ex dolores odit modi
          reprehenderit quo. Odit harum impedit, rem tenetur in delectus error
          quam?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          labore, nostrum dolor officiis voluptate, nihil repellendus vitae
          distinctio quae maiores dolore expedita ab corrupti. Recusandae modi
          maxime aliquam eveniet nemo.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;

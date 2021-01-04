import React, { createRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./image.scss";

export const Image = ({ src, alt = "#", fluid, size = {}, className }) => {
  const imageClassName = cn("g-image", { "g-image_fluid": fluid }, className);
  const imageProps = {
    src,
    alt,
    fluid,
    className: imageClassName
  };

  const calculateSizeProps = () => {
    if (fluid) {
      const style = {};

      if (size.width) style.maxWidth = size.width;

      if (size.height) style.maxHeight = size.height;

      return { style };
    }

    return size;
  };
  const sizeProps = calculateSizeProps();

  return <img {...imageProps} {...sizeProps} />;
};

Image.propType = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

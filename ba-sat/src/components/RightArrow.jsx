import React from "react";
import { ReactComponent as RightArrowSVG } from "../../src/assets/icons/right-arrow.svg";

/**
 * RightArrow Component
 *
 * A reusable component wrapping the RightArrow SVG icon.
 * Includes dynamic positioning based on the `arrowPosition` prop.
 *
 * @component
 * @param {Object} props - The props for the RightArrow component.
 * @param {string} [props.arrowPosition="right"] - The position of the arrow ('left' or 'right').
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {Object} [props.style] - Inline styles for customizing the appearance.
 *
 * @returns {JSX.Element} The rendered RightArrow SVG component.
 */
const RightArrow = ({ arrowPosition = "right", className = "", style = {} }) => {
  // Assigns the correct CSS class to position the arrow (left or right)
  const arrowClass =
    arrowPosition === "left"
      ? "order-first transform scale-x-[-1]"
      : "";

  return (
    <RightArrowSVG
      className={`right-arrow svgFill ${arrowClass} ${className}`}
      style={style}
    />
  );
};

export default RightArrow;

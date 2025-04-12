import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "./RightArrow";
import "./UXButton.css";

/**
 * UXButton Component
 *
 * A customizable and accessible button component with an optional arrow icon.
 * Supports internal navigation (`react-router` links), external links, and smooth scrolling for hash links.
 *
 * @component
 * @param {Object} props - The properties of the UXButton component.
 * @param {string} props.text - The button text.
 * @param {string} [props.to] - The destination URL or anchor link (`#id`). If omitted, the button acts as a normal button.
 * @param {string} [props.arrowPosition="right"] - The arrow position (`"left"` or `"right"`).
 * @param {boolean} [props.useGlassyBox=false] - If true, applies a glassy effect (`glassBox` class).
 *
 * @returns {JSX.Element} A button element with smooth scrolling, internal navigation, or external linking.
 *
 * @example
 * <UXButton text="Learn More" to="/about" />
 * <UXButton text="Go to Section" to="#features" />
 * <UXButton text="Visit Website" to="https://example.com" />
 */
const UXButton = ({
  text,
  arrowPosition = "right",
  useGlassyBox = false,
  to,
  onClick,
}) => {
  const glassyClass = useGlassyBox ? "glassBox py-6" : "";

  /**
   * Handles navigation behavior for internal links and smooth scrolling for hash links.
   */
  const handleNavigation = (event) => {
    if (to?.startsWith("#")) {
      event.preventDefault();
      const targetElement = document.getElementById(to.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (!to?.startsWith("http")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (onClick) {
      onClick(event); 
    }
  };

  return to?.startsWith("http") ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`ux-button px-6 py-4 flex justify-between h-full items-center rounded-xl gap-2 transform ${glassyClass}`}
    >
      {text}
      <RightArrow arrowPosition={arrowPosition} />
    </a>
  ) : (
    <Link
      to={to}
      onClick={handleNavigation}
      aria-label={`Navigiere zu ${text}`}
      role="link"
      className={`ux-button px-6 py-4 flex justify-between h-full items-center rounded-xl gap-2 transform ${glassyClass}`}>
      {text}
      <RightArrow arrowPosition={arrowPosition} />
    </Link>
  );
};

export default UXButton;

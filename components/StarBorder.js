import { useState, useEffect } from "react";
import "../css/StarBorder.css";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the animated elements on the client to avoid hydration mismatch
  const renderGradients = () => {
    if (!isClient) {
      return null;
    }

    return (
      <>
        <div
          className="border-gradient-bottom"
          style={{
            backgroundImage: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div
          className="border-gradient-top"
          style={{
            backgroundImage: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
      </>
    );
  };

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      {renderGradients()}
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;

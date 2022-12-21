import * as React from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
}

const Portal = ({ children }: Props) => {
  const portalRoot = document.getElementsByTagName("body")[0];
  const element = React.useRef(document.createElement("div"));

  React.useEffect(() => {
    const { current } = element;
    portalRoot!.appendChild(current);

    return () => {
      portalRoot!.removeChild(current);
    };
  }, []);

  return createPortal(children, element.current);
};

export default Portal;

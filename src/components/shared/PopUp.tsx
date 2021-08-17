import './PopUp.scss';

import React from "react";
import { createPortal } from "react-dom";
import Button from "../shared/Button";
import closeIcon from "@iconify/icons-mdi/close";

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const PopUp: React.FC<PopUpProps> = (props) => {
  const portalContainer = document.getElementById('root');
  
  return createPortal(
    <React.Fragment>
      {props.isOpen ? (
        <div className="popup-container">
          <div className="popup-background" />
          <div className="popup">
            {props.title ? (
              <div className="popup-title">{props.title}</div>
            ) : null}
            <div className="popup-close">
              <Button className="close" icon={closeIcon} onClick={props.onClose} variant="close"/>
            </div>
            <div className="popup-children">{props.children}</div>
          </div>
        </div>
      ) : null}
    </React.Fragment>,
    portalContainer ? portalContainer : document.createElement("div")
  );
};

export default PopUp;

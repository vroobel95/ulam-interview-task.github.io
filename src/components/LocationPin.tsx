import "./LocationPin.scss";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { useState } from "react";

interface LocationPinProps {
  lat: number;
  lng: number;
  color: string;
  text: string;
}

const LocationPin: React.FC<LocationPinProps> = (props) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handlePinClicked = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="pin" onClick={handlePinClicked}>
      {isTextVisible ? <div className="pin-text">{props.text}</div> : null}
      <Icon
        icon={locationIcon}
        className="pin-icon"
        height={40}
        color={props.color}
      />
    </div>
  );
};

export default LocationPin;

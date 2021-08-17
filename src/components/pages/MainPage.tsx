import "./MainPage.scss";

import React, { useState } from "react";
import Dropzone from "../shared/Dropzone";
import Map from "../Map";
import PopUp from "../shared/PopUp";
import ChooseColumnForm from "../forms/ChooseColumnForm";
import ChooseColumnFormModel from "../../models/ChooseColumnFormModel";
import { parse } from "papaparse";
import LocationPinModel from "../../models/LocationPinModel";
import LocationPinHelper from "../../helpers/LocationPinHelper";

const MainPage: React.FC = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [locations, setLocations] = useState<LocationPinModel[]>([]);

  const handleDropFile = async (files: File[]) => {
    const texts = await files[0].text();
    const parsedTexts = parse(texts, { header: false });
    if (localStorage.length > 0) {
        localStorage.removeItem("FILE_DATA");
    }
    setIsOpenPopup(true);
    localStorage.setItem("FILE_DATA", JSON.stringify(parsedTexts));
  };

  const handleGetColumns = (model: ChooseColumnFormModel) => {
    try {
      let filesCache = [];
      const data = localStorage.getItem("FILE_DATA");

      if (data) {
        filesCache = JSON.parse(data).data as string[][];
        setLocations(LocationPinHelper.getLocations(filesCache, model));
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="main-page">
      <div className="title">{"Check the map"}</div>
      <Dropzone onDrop={handleDropFile} />
      <Map
        locations={locations}
        onLocationsLoaded={() => setIsOpenPopup(false)}
      />
      <PopUp isOpen={isOpenPopup} onClose={() => setIsOpenPopup(false)}>
        <ChooseColumnForm onSubmit={handleGetColumns} />
      </PopUp>
    </div>
  );
};

export default MainPage;

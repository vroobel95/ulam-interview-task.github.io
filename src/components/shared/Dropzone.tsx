import "./Dropzone.scss";

import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

interface DropzoneProps {
  onDrop: (files: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const handleOnDropzoneAccepted = async (files: File[]) => {
    props.onDrop(files);
  };
  
  return (
    <div className="dropzone-wrapper">
      <DropzoneArea
        showFileNames={true}
        showPreviewsInDropzone={false}
        acceptedFiles={[".csv"]}
        dropzoneText={"Drag and drop an CSV here or click"}
        onDrop={handleOnDropzoneAccepted}
      />
    </div>
  );
};

export default Dropzone;

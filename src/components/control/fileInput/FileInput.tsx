import React, {ChangeEvent, FC} from 'react'
import {FileInputType} from "./fileinput-type";
const FileInput:FC<FileInputType> = ( { handleInputChange } ) => {
  return (
    <div className="file-input-container">
      <input
        type="file"
        id="file-input"
        className="file-input"
        name={"file"}
        onChange={(e:ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />
      <label htmlFor="file-input" className="file-input-label">
        Choose File
      </label>
    </div>
  );
};

export default FileInput;
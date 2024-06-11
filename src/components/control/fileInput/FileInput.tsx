import React, { FC } from 'react'
const FileInput:FC = () => {
  return (
    <div className="file-input-container">
      <input
        type="file"
        id="file-input"
        className="file-input"
      />
      <label htmlFor="file-input" className="file-input-label">
        Choose File
      </label>
    </div>
  );
};

export default FileInput;
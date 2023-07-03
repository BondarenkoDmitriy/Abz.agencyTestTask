import React from 'react';
import './uploadImgButton.scss';

export const UploadImgButton: React.FC = () => {
  return (
    <>
      <label
        htmlFor="uploadImgInput"
        className="uploadImgInput--lable"
      >
        <p className="uploadImgInput__button">Upload</p>
        <p className="uploadImgInput__field">Upload your photo</p>
        <input
          type="file"
          accept="jpeg/jpg"
          id="uploadImgInput"
          className="input"
        />
      </label>
    </>
  );
};

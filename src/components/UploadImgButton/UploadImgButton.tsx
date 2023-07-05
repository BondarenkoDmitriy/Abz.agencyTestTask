/* eslint-disable no-alert */
import React, { useState } from 'react';
import './uploadImgButton.scss';
import cn from 'classnames';
import { FormValues } from '../../types/formTypes';

interface Props {
  onInputChange: (fieldName: keyof FormValues, value: File | null) => void;
}

export const UploadImgButton: React.FC<Props> = ({ onInputChange }) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      // Checking the photo size
      const img = new Image();

      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width < 70 || img.height < 70) {
          alert('Minimum size of photo should be 70x70px');

          return;
        }
        // Checking the file format

        if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
          alert('The photo format must be jpeg/jpg');

          return;
        }
        // Checking the file size

        if (file.size > 5 * 1024 * 1024) {
          alert('The photo size must not exceed 5 MB');

          return;
        }

        onInputChange('photo', file); // Updating the value of the photo field in formData
        setFileName(file.name);
        setIsFileSelected(true);
      };
    }
  };

  const uploadImgFieldClasses = cn('uploadImgInput__field', {
    'file-selected': isFileSelected,
  });

  return (
    <>
      <label htmlFor="uploadImgInput" className="uploadImgInput--label">
        <p className="uploadImgInput__button">Upload</p>
        <p className={uploadImgFieldClasses}>{fileName}</p>
        <input
          type="file"
          accept="image/jpeg, image/jpg"
          id="uploadImgInput"
          className="input"
          onChange={handleFileChange}
          required
        />
      </label>
    </>
  );
};

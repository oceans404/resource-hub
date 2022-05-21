import React, { useState } from 'react';
import Uploader from '../components/Uploader';
import '../index.css';
function UploadPage(props) {
  const { account } = props;

  const [showUploader, setShowUploader] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState(null);

  const updateUploadedFiles = (files) => {
    setShowUploader(false);
    setUploadedFiles(files);
  };
  return (
    <div>
      Account: {account}
      {showUploader ? (
        <Uploader updateUploadedFiles={updateUploadedFiles} />
      ) : (
        <div>
          <h1>Add metadata</h1>
          {Object.values(uploadedFiles).map((file, i) => (
            <li key={`file-${i}`}>{file.fileName}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadPage;

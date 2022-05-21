import React, { useState, useEffect } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { create } from 'ipfs-http-client';
import { convertIpfsUrl } from '../utils';

const ipfsApi = 'https://ipfs.infura.io:5001/api/v0';

function UploaderComp(props) {
  const { updateUploadedFiles } = props;
  const [uploadedFiles, setUploadedFiles] = useState({});

  useEffect(() => {
    if (!!Object.values(uploadedFiles).length) {
      updateUploadedFiles(uploadedFiles);
    }
  }, [uploadedFiles]);

  const getUploadParams = ({ file, meta }) => {
    const body = new FormData();
    body.append('file', file);
    return { url: 'https://httpbin.org/post', body };
  };

  const handleChangeStatus = async ({ meta, file }, status) => {
    if (status === 'done') {
      console.log(status, meta, file);
    }
  };

  const handleSubmitStorj = async (files) => {
    const [singleFile] = files;
    const body = new FormData();
    console.log(singleFile);
    body.append('file', singleFile.file);

    await fetch('https://demo.storj-ipfs.com/api/v0/add', {
      method: 'POST',
      body,
      mode: 'cors',
    }).then((fileData) => console.log(fileData));
  };

  const handleSubmit = async (files) => {
    const fileData = {};
    const client = create(ipfsApi);
    for (const singleFile of files) {
      const body = new FormData();
      body.append('file', singleFile.file);

      const added = await client.add(singleFile.file);
      const url = convertIpfsUrl(added.path);

      const fileName = singleFile.meta.name;

      fileData[fileName] = { url, fileName };
    }
    console.log('final data');
    console.log(fileData);
    setUploadedFiles(fileData);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      submitButtonContent='Add metadata'
    />
  );
}

export default UploaderComp;

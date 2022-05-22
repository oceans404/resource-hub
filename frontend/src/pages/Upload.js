import React, { useState, useEffect } from 'react';
import Uploader from '../components/Uploader';
import BasicForm from '../components/Form';
import '../index.css';
function UploadPage(props) {
  const { account } = props;

  const [showUploader, setShowUploader] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [userTags, setUserTags] = useState(null);

  useEffect(() => {
    if (userTags) {
      const payload = {
        account,
        files: Object.values(uploadedFiles),
        userTags,
      };
      alert(JSON.stringify(payload, null, 2));
    }
  }, [userTags]);

  const updateUploadedFiles = (files) => {
    setShowUploader(false);
    setUploadedFiles(files);
  };

  const hackathonTag = 'activate';

  const submitUserTags = ({ tags }) => {
    const cleanTags = tags
      .map((t) => t.name.trim())
      .filter((t) => t.length > 1);
    const dedupedTags = [...new Set([...cleanTags, hackathonTag])];
    setUserTags(dedupedTags);
  };

  return (
    <div>
      {showUploader ? (
        <Uploader updateUploadedFiles={updateUploadedFiles} />
      ) : (
        <div>
          <div>
            <h1 className='text-lg font-semibold mb-5'>File Metadata</h1>
            <h2 className='font-semibold'>
              Owner:{' '}
              {account ? (
                `${account.slice(0, 5)}...${account.slice(38)}`
              ) : (
                <span className='text-red-700'>connect your wallet, anon!</span>
              )}
            </h2>
            <h2 className='font-semibold'>File names</h2>
            {Object.values(uploadedFiles).map((file, i) => (
              <li key={`file-${i}`}>{file.fileName}</li>
            ))}
          </div>

          <div className='my-5'>
            <h1 className='text-lg font-semibold mb-5'>
              Add a tag so your files can be indexed by The Graph
            </h1>
            <BasicForm submitUserTags={submitUserTags} canSubmit={!!account} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPage;

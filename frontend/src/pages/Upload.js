import React, { useState, useEffect } from 'react';
import Uploader from '../components/Uploader';
import BasicForm from '../components/Form';
import '../index.css';
const contractABI = require('../contract-abi.json');

const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const alchemyKey = process.env.REACT_APP_ALCHEMY_API_KEY;
const web3 = createAlchemyWeb3(
  `https://polygon-mumbai.g.alchemy.com/v2/${alchemyKey}`
);
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
      //   alert(JSON.stringify(payload, null, 2));
      completeTransaction(payload);
    }
  }, [userTags]);

  //

  const completeTransaction = async (payload) => {
    const contractAddress = '0xe92e2c072c0e9a7be958643ac5171fdda9cb7b3e';

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    const tag = payload.userTags[0];
    const title = payload.files[0].fileName;
    const link = payload.files[0].url;

    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods.publish(tag, title, link).encodeABI(), //make call to NFT smart contract
    };

    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      alert(`https://mumbai.polygonscan.com/tx/${txHash}`);
      return {
        success: true,
        status:
          '✅ Check out your transaction on Etherscan: https://mumbai.polygonscan.com/tx/' +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: '😥 Something went wrong: ' + error.message,
      };
    }
  };

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

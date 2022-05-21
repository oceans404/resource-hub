export const convertIpfsUrl = (hash, toStorage) => {
  const storjLink = `https://demo.storj-ipfs.com/ipfs/${hash}`;
  const infuraLink = `https://ipfs.infura.io/ipfs/${hash}`;
  return toStorage ? storjLink : infuraLink;
};

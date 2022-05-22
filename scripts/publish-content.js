// Update with contract address after running deploy.js
const CONTRACT_ADDRESS = "0xebc499c6558C5B843292C208654D25dD1B4C0af5";

class Metadata {
    constructor(_label, _title, _link) {
        this.label = _label;
        this.title = _title;
        this.link = _link;
    }
}

/*
Command to deploy this contract:
npx hardhat run scripts/deploy.js --network ethereum

TODO: support batching
*/
async function publishToEthSmartContract(metadata) {
    console.log(CONTRACT_ADDRESS);
    const Content = await hre.ethers.getContractAt("Content", CONTRACT_ADDRESS);
    const content = await Content;

    let response = await content.publish(metadata.label, metadata.title, metadata.link);

    await response.wait();

    let metadata = await content.metadata();
    console.log(metadata);
}

async function batchPublishToEthSmartContract(metadataList) {
    for (let i = 0; i < metadataList.length; i++) {
        await publishToEthSmartContract(metadataList[i]);
    }
}

async function publishToEthSmartContract(label, title, link) {
    await publishToEthSmartContract(Metadata(label, title, link));
}

let label = "ETHAmsterdam";
let title = "4-26-22";
let link = "google.com";
// TODO move this to wherever the form is
let output = publishToEthSmartContract(label, title, link)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

console.log(output);
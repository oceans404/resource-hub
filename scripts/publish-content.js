// Update with contract address after running deploy.js
const ETH_CONTRACT_ADDRESS = "0xebc499c6558C5B843292C208654D25dD1B4C0af5";
const POL_CONTRACT_ADDRESS = "0xe92E2C072C0E9A7Be958643AC5171fddA9CB7b3E";
const GNO_CONTRACT_ADDRESS = "0xe92E2C072C0E9A7Be958643AC5171fddA9CB7b3E";

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
    console.log(ETH_CONTRACT_ADDRESS);
    const Content = await hre.ethers.getContractAt("Content", ETH_CONTRACT_ADDRESS);
    const content = await Content;

    let response = await content.publish(metadata.label, metadata.title, metadata.link);

    await response.wait();

    let metadataResponse = await content.metadata();
    console.log(metadataResponse);
}

async function publishToPolSmartContract(metadata) {
    console.log(POL_CONTRACT_ADDRESS);
    const Content = await hre.ethers.getContractAt("Content", POL_CONTRACT_ADDRESS);
    const content = await Content;

    let response = await content.publish(metadata.label, metadata.title, metadata.link);

    await response.wait();

    let metadataResponse = await content.metadata();
    console.log(metadataResponse);
}

async function publishToGnosisSmartContract(metadata) {
    console.log(GNO_CONTRACT_ADDRESS);
    const Content = await hre.ethers.getContractAt("Content", GNO_CONTRACT_ADDRESS);
    const content = await Content;

    let response = await content.publish(metadata.label, metadata.title, metadata.link);

    await response.wait();

    let metadataResponse = await content.metadata();
    console.log(metadataResponse);
}

async function batchPublishToEthSmartContract(metadataList) {
    for (let i = 0; i < metadataList.length; i++) {
        await publishToEthSmartContract(metadataList[i]);
    }
}

async function publishToEthSmartContract(label, title, link) {
    await publishToEthSmartContract(new Metadata(label, title, link));
}

async function publishToPolSmartContract(label, title, link) {
    console.log(POL_CONTRACT_ADDRESS);
    const Content = await hre.ethers.getContractAt("Content", POL_CONTRACT_ADDRESS);
    const content = await Content;

    let response = await content.publish(label, title, link);

    await response.wait();

    let metadataResponse = await content.metadata();
    console.log(metadataResponse);
}

let label = "ETHAmsterdam";
let title = "4-26-22";
let link = "google.com";

/*
TODO move this to wherever the form is

// Publishing to ethereum:
let output = publishToEthSmartContract(label, title, link)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
*/
/*
// Publishing to polygon:
let output = publishToPolSmartContract(label, title, link)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
*/

// Publishing to gnosis:
let output = publishToGnosisSmartContract(label, title, link)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// console.log(output);
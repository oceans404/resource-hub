const CONTRACT_ADDRESS = "0xaFBbD0DA68a930cfF79765C825d5159F747Af7Da";

console.log("hello");

async function publishToEthSmartContract(label, title, link) {
    console.log(CONTRACT_ADDRESS);
    const Content = await hre.ethers.getContractAt("Content", CONTRACT_ADDRESS);
    const content = await Content;

    let response = await content.publish(label, title, link);

    await response.wait();

    let metadata = await content.metadata();
    console.log(metadata);
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
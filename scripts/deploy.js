// npx hardhat run scripts/deploy.js --network ethereum

async function main() {
    const Content = await ethers.getContractFactory("Content");
 
    // Start deployment, returning a promise that resolves to a contract object
    const content = await Content.deploy();
    console.log("Contract deployed to address:", content.address);}
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
 
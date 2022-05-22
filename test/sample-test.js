// npx hardhat run scripts/publish-content.js --network ethereum

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Content", function () {
  it("Should publish content when publishContent is invoked", async function () {
    const Content = await ethers.getContractFactory("Content");
    const content = await Content.deploy();
    await content.deployed();

    let label = "ETHAmsterdam";
    let title = "4-25-22";
    let link = "google.com";
    let response = await content.publish(label, title, link);

    await response.wait();

    let metadata = await content.metadata();
    console.log(metadata);
  });
});

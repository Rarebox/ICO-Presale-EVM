const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Check if we're on Mainnet network
  const network = await hre.ethers.provider.getNetwork();
  //TOKEN ICO CONTRACT
  if (network.chainId === 137) {
    // Deploy TokenICO Contract
    console.log("\nDeploying TokenICO contract...");
    const TokenICO = await hre.ethers.getContractFactory("TokenICO");
    const tokenICO = await TokenICO.deploy();

    await tokenICO.deployed();

    console.log("\nDeployment Successful!");
    console.log("------------------------");
    console.log("NEXT_PUBLIC_TOKEN_ICO_ADDRESS:", tokenICO.address);
    console.log("NEXT_PUBLIC_OWNER_ADDRESS:", deployer.address);
  }
  // TOKEN CONTRACT
  if (network.chainId === 137) {
    // Deploy TokenICO Contract
    console.log("\nDeploying TOKEN contract...");
    const NextDrop = await hre.ethers.getContractFactory("NextDrop");
    const NextDrop = await NextDrop.deploy();

    await NextDrop.deployed();

    console.log("\nDeployment Successful!");
    console.log("------------------------");
    console.log("NEXT_PUBLIC_NextDrop_ADDRESS:", NextDrop.address);
    console.log("NEXT_PUBLIC_OWNER_ADDRESS:", deployer.address);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

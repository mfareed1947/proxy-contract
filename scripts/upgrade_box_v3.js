const { ethers, upgrades } = require('hardhat');
const PROXY_ADDR = "0x9CC8033435D4e9110C1801a7bADd0E1f9f72991D";

async function main () {
  
  const BoxV3 = await ethers.getContractFactory('BoxV3');

  // Upgrade the proxy to BoxV3
  await upgrades.upgradeProxy(PROXY_ADDR, BoxV3);

  // Get the implementation address using the admin
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(PROXY_ADDR);

  console.log("Box Upgraded to V3");
  console.log("Upgraded implementation address:", implementationAddress);
}

// Execute the main function and catch any errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});

//0x98A907350f2afAA51225A0646ff0976Cccc3a42D
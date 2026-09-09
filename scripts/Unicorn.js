import hre from "hardhat";

async function main() {
    const { ethers } = await hre.network.connect();

    const [deployer] = await ethers.getSigners();

    console.log("Deploying with:", deployer.address);

    const unicorn = await ethers.deployContract(
        "Unicorn",
        [deployer.address]
    );

    await unicorn.waitForDeployment();

    console.log(
        "Unicorn deployed to:",
        await unicorn.getAddress()
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
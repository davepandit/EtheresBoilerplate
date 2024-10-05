const { ethers } = require("ethers");

const Infura_ID = "abc123";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${Infura_ID}`
);

const address = "some fake address"; //this is the address of the account jiska balance we need to see

//function to get the balance
const getBalance = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    "The balance in the acoount is:",
    ethers.utils.formatEther(balance)
  );
};

getBalance();

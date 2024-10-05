const { ethers } = require("ethers");

//connect to a node
const provider = new ethers.provider.JsonRpcProvider(
  "the endpoint provided by infura"
);

const address = "address of the deployed smart contract";
const ERC_20_ABI = [
  "function name() returns (string)",
  "function pascal() returns (uint)",
  "function hello()",
  "function balanceOf(address _address) returns (uint)", //this function returns the balance the input is a address
];

//once we have the provider, address and the abi then we are ready to interact with the smart contract
const contract = new ethers.Contract(address, ERC_20_ABI, provider);

const readSmartContract = async () => {
  const name = await contract.name(); //calling a function that has no arg
  console.log("Hi the name of the smart contract is:", name);
  //we can do more shit here
  //calling a function that needs some sort of address
  const balance = await contract.balanceOf("some accout address");
  console.log(balance);
};

readSmartContract();

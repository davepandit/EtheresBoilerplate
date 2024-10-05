const { ethers } = require("ethers");

const provider = new ethers.provider.JsonRpcProvider(
  "the url provided by infura"
); //again in json-rpc we dont have multiple endpoints rather there is only one endpoint

const account1 = "my account address";
const account2 = "some other account address";
const privateKey = "my accounts private key";

const address = "address to where the smart contract has been deployed";

const wallet = new ethers.wallet(privateKey, provider); //pass the private key and the provider

//interact with the smart contract
//we need the address to where the smart contract has been deployed the abi and the provider
const ERC_20_ABI = [
  "function one(uint _something) payable returns (uint)", //this function does change the state variable
];

const contract = new ethers.Connect(address, ERC_20_ABI, provider);

const writeContract = async () => {
  const balance = await contract.balanceOf(account1);

  const connectToWallet = await contract.connect(wallet);
  //now use the transfer method on the connectToWallet
  const tx = connectToWallet.transfer(account2, balance);

  await tx.wait();
};

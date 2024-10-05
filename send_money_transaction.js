//in this tutorial we are going to transfer money from one account to another
const { ethers } = require("ethers");
const provider = new ethers.provider.JsonRpcProvider(
  "address of the node provided by infura"
);

const privateKey = "my private key";
const account1 = "my metamask address";
const account2 = "someone else's account address";

const wallet = new ethers.Wallet(privateKey, provider); //this is the created wallet
//why do we need a wallet?
//creating a wallet allows to sign a transaction
//because creting a transaction object is not enough
//it needs to be signed that is done uing the private key

const sendTransaction = async () => {
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.025"),
  });
  await tx.wait(); //wait for the transaction to be mined
};

sendTransaction();

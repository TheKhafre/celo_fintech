const { ContractKit } = require('@celo/contractkit');
async function deployContract(kit, account) {
  const reserve = await kit.contracts.getReserve();
  const tx = reserve.methods.setReserveFraction(10, 1000);
  const gas = await tx.estimateGas({ from: account.address });
  const txo = await kit.sendTransactionObject(tx, { from: account.address, gasPrice: await kit.getGasPrice() });
  const receipt = await txo.waitReceipt();
  console.log(`Contract deployed at: ${receipt.contractAddress}`);
  return receipt.contractAddress;
}
const kit = ContractKit.newKit('https://forno.celo.org');
const account = kit.web3.eth.accounts.create();
const contractAddress = await deployContract(kit, account);

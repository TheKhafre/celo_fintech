
const { ContractKit } = require('@celo/contractkit');
const { newAccount } = require('@celo/account');
async function createWallet() {
  const kit = ContractKit.newKit('https://alfajores-forno.celo-testnet.org');
  const account = await newAccount();
  return { kit, account };
}
createWallet().then(({ kit, account }) => {
  console.log(`Public Address: ${account.address}`);
  console.log(`Private Key: ${account.privateKey}`);
});

const { ContractKit } = require('@celo/contractkit')
const { newKitFromWeb3 } = require('@celo/contractkit')
const { newDappKit, DappKitResponseStatus } = require('@celo/dappkit')
const Web3 = require('web3')
async function sendPayment() {
  const kit = newKitFromWeb3(new Web3(window.celo))
  const from = kit.defaultAccount
  const to = '0x...'
  const value = '10'
  
  // Create a transaction object
  const txObject = await kit.web3.eth.sendTransaction({
    from,
    to,
    value: kit.web3.utils.toWei(value, 'ether'),
  })
  // Send the transaction using DappKit
  const requestId = await newDappKit(window.celo).sendTransactionAsync({
    txObject,
    origin: window.location.origin,
  })
  // Wait for a response from DappKit indicating that the transaction was successful
  const dappkitResponse = await new Promise(resolve =>
    window.parent.addEventListener('message', e => {
      if (e.data && e.data.type === DappKitResponseStatus.Success) {
        resolve(e.data.response)
      }
    })
  )
  console.log(`Transaction sent: ${dappkitResponse.transactionHash}`)
}

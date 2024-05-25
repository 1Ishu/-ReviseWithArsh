const Soroban = require('@soroban/web3.js');

const endpoint = 'YOUR_TESTNET_RPC_URL'; // Replace with your testnet RPC URL
const accessKey = 'YOUR_TESTNET_ACCESS_KEY'; // Replace with your testnet access key

const soroban = new Soroban(endpoint, accessKey);

(async () => {
  try {
    const network = await soroban.eth.net.getNetworkName();
    console.log(`Connected to Soroban testnet: ${network}`);
  } catch (error) {
    console.error('Error connecting to testnet:', error);
  }
})();

const axios = require('axios'); // Assuming axios is added to dependencies for HTTP requests

const gameServerUrl = 'http://localhost:3000';

async function startQuest() {
  const response = await axios.post(`${gameServerUrl}/start-quest`);
  console.log(response.data.message);
}

async function fight() {
  const response = await axios.post(`${gameServerUrl}/fight`);
  console.log(response.data.message);
}

async function claimRewards(walletAddress) {
  const response = await axios.get(`${gameServerUrl}/claim-rewards`, {
    params: { address: walletAddress },
  });
  console.log(response.data.message);
}

// Simulate a game session
async function simulateGameSession(walletAddress) {
  await startQuest();
  await fight(); // This could be called multiple times in a real game
  await claimRewards(walletAddress);
}

simulateGameSession('0xYourEthereumWalletAddressHere');



require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/MiaRZKuVNfyXTDELE8FbtkLiu_LIW1Zi',
      accounts: ['7c52c227923734cdded87ca5646b0bdb6d5f3769e765beda3242b361fcb71ad2']
      
    }
  }
}
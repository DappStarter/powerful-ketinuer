require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember hole inner enter outer slice'; 
let testAccounts = [
"0xf115c63c3009d318035d0f5c2ecd3f3f47396538d19841a7cd3413ea9f3a145e",
"0x2ea5afa82ac6c12500e0ba32487083fd8a3ec04a0a6cc58dc0e5e245b3386486",
"0x8f0802d354ae11f8cfa9be7bcfc79c33fb9cc01fa182484cee53ccefcb69d7d4",
"0xa9ecf50ad23943d172e2b5ffe5e45be100313bcad01d8caa7df0390cab6c58e9",
"0x6b9be14f1af45bca48a8b159c1e6eca5e6fbee791bd29f283d4a2220f1ced5c5",
"0x36448fb9f0e1eb917156d7f60442ef64779a771177eb4a8e1b2d992c72a2b0b2",
"0x3b5d851cacbdc47e3c6fd9f3878278bcee81d5fda4268b826420e41d37ab4e21",
"0x829f4b947adbb610591eb6cb1867a7d5c2db5aafd57558e610674eb11d08108b",
"0x6571f61a4642c382271964a53b6cd3ff1ca5ca9cd2b83311537edef87d3984f5",
"0x62b4fca5a1524a20f5f976c5e04005f9a54b54e7525d4b57d9ff0efb2ed1aa8b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

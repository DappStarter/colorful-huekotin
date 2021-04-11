require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom kiwi bridge tooth guard render remember attitude grace fork tackle spring'; 
let testAccounts = [
"0xdca2370689150c3e812fa4dd63e417aef70c11538754c05e2853a5f9ed02a792",
"0xfac2ad959cd5b035f5b00f13d8217bb49f85658568cd52a51846f85a92329397",
"0xbbc24c774e9f3f226cfa968990ef1e4991efd06c6926a90b9da32dbd0d702ffd",
"0x7053a62ee7a6c11302396c22866ad2b1bf53cc31f7f79e29595733d369deab7d",
"0xcb76c741475e4736c10ea30e9035347353515c3c11500cdeccf3230aaf83533d",
"0xe8c5c0741e78efb6697c608abcdbade61f79ba87f9d799f28fc3b330f63dcb86",
"0x3ed52d56958415be1f688792edfceb09eaf5e80c0a1a61753a29b8e104ee35ca",
"0xe89521b40aae1ec0a993333aeb3a45dca93955f4291fefbd050f3fd679e5acfc",
"0xf5606d03b4c085b7ff1accb9339a517c4cdf62feecf072056b5556939d7107ea",
"0xd3838e924560aca45df100325d31d245ec522fb8a5c45d44fa867c511e50004e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



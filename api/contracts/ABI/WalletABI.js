const WalletABI = ` [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "address[]",
        "name": "_owners",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_required",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "txId",
        "type": "uint256"
      }
    ],
    "name": "Approve",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "txId",
        "type": "uint256"
      }
    ],
    "name": "Execute",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "txId",
        "type": "uint256"
      }
    ],
    "name": "Revoke",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "txId",
        "type": "uint256"
      }
    ],
    "name": "Submit",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "approved",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "owners",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "required",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "bool",
        "name": "executed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "walletName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "submit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_txId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_txId",
        "type": "uint256"
      }
    ],
    "name": "_getApprovalCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_txId",
        "type": "uint256"
      }
    ],
    "name": "execute",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_txId",
        "type": "uint256"
      }
    ],
    "name": "revoke",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRequired",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwnersCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTxs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "bool",
            "name": "executed",
            "type": "bool"
          }
        ],
        "internalType": "struct MultiSigWallet.Transaction[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]`
// `[
//       {
//         "anonymous": false,
//         "inputs": [
//           {
//             "indexed": true,
//             "internalType": "contract MultiSigWallet",
//             "name": "wallet",
//             "type": "address"
//           },
//           {
//             "indexed": false,
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "indexed": false,
//             "internalType": "address[]",
//             "name": "owners",
//             "type": "address[]"
//           },
//           {
//             "indexed": false,
//             "internalType": "uint256",
//             "name": "required",
//             "type": "uint256"
//           }
//         ],
//         "name": "WalletCreated",
//         "type": "event"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "name": "wallets",
//         "outputs": [
//           {
//             "internalType": "contract MultiSigWallet",
//             "name": "",
//             "type": "address"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [],
//         "name": "walletsCount",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "string",
//             "name": "_name",
//             "type": "string"
//           },
//           {
//             "internalType": "address[]",
//             "name": "_owners",
//             "type": "address[]"
//           },
//           {
//             "internalType": "uint256",
//             "name": "_required",
//             "type": "uint256"
//           }
//         ],
//         "name": "createWallet",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "limit",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "offset",
//             "type": "uint256"
//           }
//         ],
//         "name": "getWallets",
//         "outputs": [
//           {
//             "internalType": "contract MultiSigWallet[]",
//             "name": "coll",
//             "type": "address[]"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function",
//         "constant": true
//       }
// ]`;

module.exports = { 
  WalletABI
};
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  VRC725Helper,
  VRC725HelperInterface,
} from "../../helpers/VRC725Helper";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Fee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "estimateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "issuer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a9c38038062001a9c83398101604081905262000034916200014d565b828282600562000045848262000261565b50600662000054838262000261565b506007805460ff90921660ff199092169190911790555050600280546001600160a01b03191633179055506200032d915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000b057600080fd5b81516001600160401b0380821115620000cd57620000cd62000088565b604051601f8301601f19908116603f01168101908282118183101715620000f857620000f862000088565b816040528381526020925086838588010111156200011557600080fd5b600091505b838210156200013957858201830151818301840152908201906200011a565b600093810190920192909252949350505050565b6000806000606084860312156200016357600080fd5b83516001600160401b03808211156200017b57600080fd5b62000189878388016200009e565b94506020860151915080821115620001a057600080fd5b50620001af868287016200009e565b925050604084015160ff81168114620001c757600080fd5b809150509250925092565b600181811c90821680620001e757607f821691505b6020821081036200020857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025c57600081815260208120601f850160051c81016020861015620002375750805b601f850160051c820191505b81811015620002585782815560010162000243565b5050505b505050565b81516001600160401b038111156200027d576200027d62000088565b62000295816200028e8454620001d2565b846200020e565b602080601f831160018114620002cd5760008415620002b45750858301515b600019600386901b1c1916600185901b17855562000258565b600085815260208120601f198616915b82811015620002fe57888601518255948401946001909101908401620002dd565b50858210156200031d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61175f806200033d6000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806369fe0e2d116100d85780639fd5a6cf1161008c578063ce6aa74811610066578063ce6aa74814610347578063dd62ed3e1461035a578063f2fde38b1461039357600080fd5b80639fd5a6cf14610301578063a9059cbb14610314578063ac9650d81461032757600080fd5b806379ba5097116100bd57806379ba5097146102f15780638da5cb5b1461024257806395d89b41146102f957600080fd5b806369fe0e2d146102b557806370a08231146102c857600080fd5b80631d1438481161013a578063313ce56711610114578063313ce5671461027857806342966c681461028d57806369e9cae1146102a057600080fd5b80631d1438481461024257806323b872dd1461025d57806324ec75901461027057600080fd5b8063095ea7b31161016b578063095ea7b314610206578063127e8e4d1461021957806318160ddd1461023a57600080fd5b806301ffc9a71461018757806306fdde03146101f1575b600080fd5b6101dc61019536600461114e565b7fffffffff00000000000000000000000000000000000000000000000000000000167f08617865000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6101f96103a6565b6040516101e891906111e0565b6101dc61021436600461120a565b610438565b61022c610227366004611234565b610469565b6040519081526020016101e8565b60085461022c565b6002546040516001600160a01b0390911681526020016101e8565b6101dc61026b36600461124d565b610488565b60015461022c565b60075460405160ff90911681526020016101e8565b6101dc61029b366004611234565b610596565b6102b36102ae36600461124d565b6105c3565b005b6102b36102c3366004611234565b610663565b61022c6102d6366004611289565b6001600160a01b031660009081526020819052604090205490565b6102b36106f8565b6101f96107e2565b6102b361030f366004611369565b6107f1565b6101dc61032236600461120a565b61088f565b61033a6103353660046113db565b6108b3565b6040516101e89190611450565b6102b36103553660046114b2565b610a0b565b61022c610368366004611512565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b6102b36103a1366004611289565b610a6f565b6060600580546103b590611545565b80601f01602080910402602001604051908101604052809291908181526020018280546103e190611545565b801561042e5780601f106104035761010080835404028352916020019161042e565b820191906000526020600020905b81548152906001019060200180831161041157829003601f168201915b5050505050905090565b6000806104456000610469565b9050610452338585610b5a565b61045d333083610c9a565b60019150505b92915050565b6000333b1561047a57506000919050565b61046382610d14565b919050565b60008061049483610469565b90506104a08382610d1f565b6001600160a01b038616600090815260046020908152604080832033845290915290205410156105175760405162461bcd60e51b815260206004820152601e60248201527f56524332353a20616d6f756e742065786565647320616c6c6f77616e6365000060448201526064015b60405180910390fd5b6001600160a01b038516600090815260046020908152604080832033845290915290205461055190829061054b9086610d85565b90610d85565b6001600160a01b0386166000908152600460209081526040808320338452909152902055610580858585610de1565b61058b858583610c9a565b506001949350505050565b6000806105a36000610469565b90506105af3384610fe4565b6105ba333083610c9a565b50600192915050565b60006105cf6000610469565b90506105dc333083610c9a565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b038481166024830152604482018490528516906323b872dd90606401600060405180830381600087803b15801561064557600080fd5b505af1158015610659573d6000803e3d6000fd5b5050505050505050565b6002546001600160a01b031633146106bd5760405162461bcd60e51b815260206004820152601e60248201527f56524332353a2063616c6c6572206973206e6f7420746865206f776e65720000604482015260640161050e565b60018190556040518181527f8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c769060200160405180910390a150565b6003546001600160a01b031633146107785760405162461bcd60e51b815260206004820152602a60248201527f56524332353a206f6e6c79206e6577206f776e65722063616e2061636365707460448201527f206f776e65727368697000000000000000000000000000000000000000000000606482015260840161050e565b600280546003805473ffffffffffffffffffffffffffffffffffffffff198084166001600160a01b038381169182179096559116909155604051929091169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6060600680546103b590611545565b60006107fd6000610469565b905061080a333083610c9a565b6040517f745a41bc0000000000000000000000000000000000000000000000000000000081526001600160a01b0387169063745a41bc9061085590889088908890889060040161157f565b600060405180830381600087803b15801561086f57600080fd5b505af1158015610883573d6000803e3d6000fd5b50505050505050505050565b60008061089b83610469565b90506108a8338585610de1565b61045d338583610c9a565b60608167ffffffffffffffff8111156108ce576108ce6112a4565b60405190808252806020026020018201604052801561090157816020015b60608152602001906001900390816108ec5790505b50905060005b82811015610a045760008030868685818110610925576109256115b7565b905060200281019061093791906115cd565b60405161094592919061161b565b600060405180830381855af49150503d8060008114610980576040519150601f19603f3d011682016040523d82523d6000602084013e610985565b606091505b5091509150816109d15760448151101561099e57600080fd5b600481019050808060200190518101906109b8919061162b565b60405162461bcd60e51b815260040161050e91906111e0565b808484815181106109e4576109e46115b7565b6020026020010181905250505080806109fc906116b8565b915050610907565b5092915050565b6000610a176000610469565b9050610a24333083610c9a565b6040517fab84ee6f0000000000000000000000000000000000000000000000000000000081526001600160a01b0387169063ab84ee6f906108559088908890889088906004016116d1565b6002546001600160a01b03163314610ac95760405162461bcd60e51b815260206004820152601e60248201527f56524332353a2063616c6c6572206973206e6f7420746865206f776e65720000604482015260640161050e565b6001600160a01b038116610b2b5760405162461bcd60e51b8152602060048201526024808201527f56524332353a206e6577206f776e657220697320746865207a65726f206164646044820152637265737360e01b606482015260840161050e565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b038316610bbc5760405162461bcd60e51b8152602060048201526024808201527f56524332353a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161050e565b6001600160a01b038216610c385760405162461bcd60e51b815260206004820152602260248201527f56524332353a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161050e565b6001600160a01b0383811660008181526004602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b333b15610ca657505050565b8015610d0f57600254610cc49084906001600160a01b031683610de1565b6002546040518281526001600160a01b039182169184811691908616907ffcf5b3276434181e3c48bd3fe569b8939808f11e845d4b963693b9d7dbd6dd999060200160405180910390a45b505050565b600061046360015490565b600080610d2c8385611703565b905083811015610d7e5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015260640161050e565b9392505050565b600082821115610dd75760405162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015260640161050e565b610d7e8284611716565b6001600160a01b038316610e5d5760405162461bcd60e51b815260206004820152602560248201527f56524332353a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161050e565b6001600160a01b038216610ed95760405162461bcd60e51b815260206004820152602360248201527f56524332353a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161050e565b6001600160a01b038316600090815260208190526040902054811115610f415760405162461bcd60e51b815260206004820152601960248201527f56524332353a20696e7375666669656e742062616c616e636500000000000000604482015260640161050e565b6001600160a01b038316600090815260208190526040902054610f649082610d85565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610f939082610d1f565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610c8d565b6001600160a01b0382166110605760405162461bcd60e51b815260206004820152602160248201527f56524332353a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161050e565b6001600160a01b0382166000908152602081905260409020548111156110c85760405162461bcd60e51b815260206004820152601960248201527f56524332353a20696e7375666669656e742062616c616e636500000000000000604482015260640161050e565b6008546110d59082610d85565b6008556001600160a01b0382166000908152602081905260409020546110fb9082610d85565b6001600160a01b03831660008181526020818152604080832094909455925184815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60006020828403121561116057600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610d7e57600080fd5b60005b838110156111ab578181015183820152602001611193565b50506000910152565b600081518084526111cc816020860160208601611190565b601f01601f19169290920160200192915050565b602081526000610d7e60208301846111b4565b80356001600160a01b038116811461048357600080fd5b6000806040838503121561121d57600080fd5b611226836111f3565b946020939093013593505050565b60006020828403121561124657600080fd5b5035919050565b60008060006060848603121561126257600080fd5b61126b846111f3565b9250611279602085016111f3565b9150604084013590509250925092565b60006020828403121561129b57600080fd5b610d7e826111f3565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156112e3576112e36112a4565b604052919050565b600067ffffffffffffffff821115611305576113056112a4565b50601f01601f191660200190565b600082601f83011261132457600080fd5b8135611337611332826112eb565b6112ba565b81815284602083860101111561134c57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561138157600080fd5b61138a866111f3565b9450611398602087016111f3565b93506040860135925060608601359150608086013567ffffffffffffffff8111156113c257600080fd5b6113ce88828901611313565b9150509295509295909350565b600080602083850312156113ee57600080fd5b823567ffffffffffffffff8082111561140657600080fd5b818501915085601f83011261141a57600080fd5b81358181111561142957600080fd5b8660208260051b850101111561143e57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156114a557603f198886030184526114938583516111b4565b94509285019290850190600101611477565b5092979650505050505050565b600080600080600060a086880312156114ca57600080fd5b6114d3866111f3565b94506114e1602087016111f3565b93506114ef604087016111f3565b925060608601359150608086013567ffffffffffffffff8111156113c257600080fd5b6000806040838503121561152557600080fd5b61152e836111f3565b915061153c602084016111f3565b90509250929050565b600181811c9082168061155957607f821691505b60208210810361157957634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b03851681528360208201528260408201526080606082015260006115ad60808301846111b4565b9695505050505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126115e457600080fd5b83018035915067ffffffffffffffff8211156115ff57600080fd5b60200191503681900382131561161457600080fd5b9250929050565b8183823760009101908152919050565b60006020828403121561163d57600080fd5b815167ffffffffffffffff81111561165457600080fd5b8201601f8101841361166557600080fd5b8051611673611332826112eb565b81815285602083850101111561168857600080fd5b611699826020830160208601611190565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b6000600182016116ca576116ca6116a2565b5060010190565b60006001600160a01b038087168352808616602084015250836040830152608060608301526115ad60808301846111b4565b80820180821115610463576104636116a2565b81810381811115610463576104636116a256fea264697066735822122089cbcf70a9d23836784dacca04bb12211a5d2e0b8a861bcfcd52a1d2ed0bdfb764736f6c63430008130033";

type VRC725HelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRC725HelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRC725Helper__factory extends ContractFactory {
  constructor(...args: VRC725HelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  override deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, symbol, decimals, overrides || {}) as Promise<
      VRC725Helper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VRC725Helper__factory {
    return super.connect(runner) as VRC725Helper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRC725HelperInterface {
    return new Interface(_abi) as VRC725HelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VRC725Helper {
    return new Contract(address, _abi, runner) as unknown as VRC725Helper;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { NFTSimple, NFTSimpleInterface } from "../NFTSimple";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_initBaseURI",
        type: "string",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_FOR_ALL_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonceByAddress",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "nonces",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "from",
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
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
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
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b5060405162002ab138038062002ab1833981016040819052620000349162000241565b6200004183833362000055565b6200004c8162000123565b5050506200042d565b600354600160a01b900460ff1615620000b45760405162461bcd60e51b815260206004820152601d60248201527f5652433732353a20436f6e747261637420616c726561647920696e6974000000604482015260640160405180910390fd5b620000c0838362000135565b620000eb83604051806040016040528060018152602001603160f81b8152506200015c60201b60201c565b600280546001600160a01b039092166001600160a01b031990921691909117905550506003805460ff60a01b1916600160a01b179055565b601162000131828262000361565b5050565b600862000143838262000361565b50600962000152828262000361565b5050600060015550565b620001318282815160209283012081519190920120600491909155600555565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001a457600080fd5b81516001600160401b0380821115620001c157620001c16200017c565b604051601f8301601f19908116603f01168101908282118183101715620001ec57620001ec6200017c565b816040528381526020925086838588010111156200020957600080fd5b600091505b838210156200022d57858201830151818301840152908201906200020e565b600093810190920192909252949350505050565b6000806000606084860312156200025757600080fd5b83516001600160401b03808211156200026f57600080fd5b6200027d8783880162000192565b945060208601519150808211156200029457600080fd5b620002a28783880162000192565b93506040860151915080821115620002b957600080fd5b50620002c88682870162000192565b9150509250925092565b600181811c90821680620002e757607f821691505b6020821081036200030857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200035c57600081815260208120601f850160051c81016020861015620003375750805b601f850160051c820191505b81811015620003585782815560010162000343565b5050505b505050565b81516001600160401b038111156200037d576200037d6200017c565b62000395816200038e8454620002d2565b846200030e565b602080601f831160018114620003cd5760008415620003b45750858301515b600019600386901b1c1916600185901b17855562000358565b600085815260208120601f198616915b82811015620003fe57888601518255948401946001909101908401620003dd565b50858210156200041d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b612674806200043d6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063585956d6116101045780638da5cb5b116100a2578063b88d4fde11610071578063b88d4fde146103e0578063c87b56dd146103f3578063e985e9c514610406578063f2fde38b1461044257600080fd5b80638da5cb5b1461027a57806395d89b41146103b2578063a22cb465146103ba578063ab84ee6f146103cd57600080fd5b80636a627842116100de5780636a6278421461037157806370a0823114610384578063745a41bc1461039757806379ba5097146103aa57600080fd5b8063585956d61461030e5780635e5756d5146103355780636352211e1461035e57600080fd5b806323b872dd1161017157806330adf81f1161014b57806330adf81f146102b95780633644e515146102e057806342842e0e146102e85780634f6ccce7146102fb57600080fd5b806323b872dd1461028b57806324ec75901461029e5780632f745c59146102a657600080fd5b8063095ea7b3116101ad578063095ea7b31461023c578063141a468c1461025157806318160ddd146102725780631d1438481461027a57600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e236600461216a565b610455565b60405190151581526020015b60405180910390f35b610204610499565b6040516101f391906121d7565b61022461021f3660046121ea565b61052b565b6040516001600160a01b0390911681526020016101f3565b61024f61024a36600461221f565b610552565b005b61026461025f3660046121ea565b6106a6565b6040519081526020016101f3565b600f54610264565b6002546001600160a01b0316610224565b61024f610299366004612249565b61071d565b600154610264565b6102646102b436600461221f565b610794565b6102647f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b61026461083c565b61024f6102f6366004612249565b61084b565b6102646103093660046121ea565b610866565b6102647f29795620f29ed5790c945e3f419a1b3e2381aa07751ccffe5b81231639d74cd581565b610264610343366004612285565b6001600160a01b031660009081526007602052604090205490565b61022461036c3660046121ea565b61090a565b61024f61037f366004612285565b61096f565b610264610392366004612285565b61098f565b61024f6103a5366004612343565b610a29565b61024f610b3d565b610204610c1a565b61024f6103c83660046123a4565b610c29565b61024f6103db3660046123e0565b610c38565b61024f6103ee3660046123e0565b610d6e565b6102046104013660046121ea565b610dec565b6101e7610414366004612430565b6001600160a01b039182166000908152600c6020908152604080832093909416825291909152205460ff1690565b61024f610450366004612285565b610e53565b60006001600160e01b031982167f780e9d63000000000000000000000000000000000000000000000000000000001480610493575061049382610f4b565b92915050565b6060600880546104a890612463565b80601f01602080910402602001604051908101604052809291908181526020018280546104d490612463565b80156105215780601f106104f657610100808354040283529160200191610521565b820191906000526020600020905b81548152906001019060200180831161050457829003601f168201915b5050505050905090565b60006105368261104e565b506000908152600b60205260409020546001600160a01b031690565b600061055d8261090a565b9050806001600160a01b0316836001600160a01b0316036105eb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b038216148061062557506001600160a01b0381166000908152600c6020908152604080832033845290915290205460ff165b6106975760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016105e2565b6106a183836110b2565b505050565b6000818152600a60205260408120546001600160a01b031661070a5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105e2565b5060009081526006602052604090205490565b6107273382611120565b6107895760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b60648201526084016105e2565b6106a183838361119f565b600061079f8361098f565b82106108135760405162461bcd60e51b815260206004820152602b60248201527f565243373235456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016105e2565b506001600160a01b03919091166000908152600d60209081526040808320938352929052205490565b60006108466113c2565b905090565b6106a183838360405180602001604052806000815250610d6e565b6000610871600f5490565b82106108e55760405162461bcd60e51b815260206004820152602c60248201527f565243373235456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016105e2565b600f82815481106108f8576108f861249d565b90600052602060002001549050919050565b6000818152600a60205260408120546001600160a01b0316806104935760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105e2565b61098c8161097c600f5490565b6109879060016124c9565b61143d565b50565b60006001600160a01b038216610a0d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016105e2565b506001600160a01b031660009081526020819052604090205490565b42821015610a795760405162461bcd60e51b815260206004820152601f60248201527f5652433732353a205065726d697420646561646c696e6520657870697265640060448201526064016105e2565b600083815260066020526040812054610a96908690869086611457565b90506000610aa482846114d6565b50909150506001600160a01b03811615801590610ac65750610ac68186611120565b80610adf5750610adf610ad88661090a565b8385611523565b610b2b5760405162461bcd60e51b815260206004820181905260248201527f5652433732353a20496e76616c6964207065726d6974207369676e617475726560448201526064016105e2565b610b3586866110b2565b505050505050565b6003546001600160a01b03163314610bbd5760405162461bcd60e51b815260206004820152602b60248201527f5652433732353a206f6e6c79206e6577206f776e65722063616e20616363657060448201527f74206f776e65727368697000000000000000000000000000000000000000000060648201526084016105e2565b60028054600380546001600160a01b03198084166001600160a01b038381169182179096559116909155604051929091169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6060600980546104a890612463565b610c34338383611585565b5050565b42821015610c885760405162461bcd60e51b815260206004820152601f60248201527f5652433732353a205065726d697420646561646c696e6520657870697265640060448201526064016105e2565b6001600160a01b038416600090815260076020526040812054610cad90859085611653565b90506000610cbb82846114d6565b50509050856001600160a01b0316816001600160a01b03161480610ce55750610ce5868385611523565b610d315760405162461bcd60e51b815260206004820181905260248201527f5652433732353a20496e76616c6964207065726d6974207369676e617475726560448201526064016105e2565b610d3d86866001611585565b6001600160a01b0386166000908152600760205260408120805491610d61836124dc565b9190505550505050505050565b610d783383611120565b610dda5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b60648201526084016105e2565b610de6848484846116ab565b50505050565b6060610df78261104e565b6000610e01611729565b90506000815111610e215760405180602001604052806000815250610e4c565b80610e2b84611738565b604051602001610e3c9291906124f5565b6040516020818303038152906040525b9392505050565b6002546001600160a01b03163314610ead5760405162461bcd60e51b815260206004820152601f60248201527f5652433732353a2063616c6c6572206973206e6f7420746865206f776e65720060448201526064016105e2565b6001600160a01b038116610f295760405162461bcd60e51b815260206004820152602560248201527f5652433732353a206e6577206f776e657220697320746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105e2565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160e01b031982167f80ac58cd000000000000000000000000000000000000000000000000000000001480610fae57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610fe257506001600160e01b031982167f5604e22500000000000000000000000000000000000000000000000000000000145b8061101657506001600160e01b031982167ff5d3b8ba00000000000000000000000000000000000000000000000000000000145b8061049357507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614610493565b6000818152600a60205260409020546001600160a01b031661098c5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105e2565b6000818152600b6020526040902080546001600160a01b0319166001600160a01b03841690811790915581906110e78261090a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061112c8361090a565b9050806001600160a01b0316846001600160a01b0316148061117357506001600160a01b038082166000908152600c602090815260408083209388168352929052205460ff165b806111975750836001600160a01b031661118c8461052b565b6001600160a01b0316145b949350505050565b826001600160a01b03166111b28261090a565b6001600160a01b0316146112165760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105e2565b6001600160a01b0382166112915760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105e2565b61129e838383600161186d565b826001600160a01b03166112b18261090a565b6001600160a01b0316146113155760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105e2565b6000818152600b6020908152604080832080546001600160a01b03199081169091556001600160a01b0387811685528484528285208054600019019055861680855282852080546001019055858552600a9093529220805490921617905561137c816119b5565b80826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006108467f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6113f160045490565b6005546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b610c348282604051806020016040528060008152506119d7565b604080517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad60208201526001600160a01b03861691810191909152606081018490526080810183905260a081018290526000906114cd9060c0015b60405160208183030381529060405280519060200120611a55565b95945050505050565b600080600083516041036115105760208401516040850151606086015160001a61150288828585611a9d565b95509550955050505061151c565b50508151600091506002905b9250925092565b600080600061153285856114d6565b509092509050600081600381111561154c5761154c612524565b14801561156a5750856001600160a01b0316826001600160a01b0316145b8061157b575061157b868686611b6c565b9695505050505050565b816001600160a01b0316836001600160a01b0316036115e65760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105e2565b6001600160a01b038381166000818152600c6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b604080517f29795620f29ed5790c945e3f419a1b3e2381aa07751ccffe5b81231639d74cd560208201526001600160a01b0385169181019190915260608101839052608081018290526000906111979060a0016114b2565b6116b684848461119f565b6116c284848484611c5c565b610de65760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105e2565b6060601180546104a890612463565b60608160000361177b57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156117a5578061178f816124dc565b915061179e9050600a83612550565b915061177f565b60008167ffffffffffffffff8111156117c0576117c06122a0565b6040519080825280601f01601f1916602001820160405280156117ea576020820181803683370190505b5090505b8415611197576117ff600183612564565b915061180c600a86612577565b6118179060306124c9565b60f81b81838151811061182c5761182c61249d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611866600a86612550565b94506117ee565b61187984848484611da5565b60018111156118f05760405162461bcd60e51b815260206004820152603560248201527f565243373235456e756d657261626c653a20636f6e736563757469766520747260448201527f616e7366657273206e6f7420737570706f72746564000000000000000000000060648201526084016105e2565b816001600160a01b03851661194c5761194781600f80546000838152601060205260408120829055600182018355919091527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8020155565b61196f565b836001600160a01b0316856001600160a01b03161461196f5761196f8582611e2d565b6001600160a01b03841661198b5761198681611eca565b6119ae565b846001600160a01b0316846001600160a01b0316146119ae576119ae8482611f79565b5050505050565b60008181526006602052604081208054916119cf836124dc565b919050555050565b6119e18383611fbd565b6119ee6000848484611c5c565b6106a15760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105e2565b6000610493611a626113c2565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611ad85750600091506003905082611b62565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611b2c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611b5857506000925060019150829050611b62565b9250600091508190505b9450945094915050565b6000806000856001600160a01b03168585604051602401611b8e92919061258b565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16630b135d3f60e11b17905251611bd891906125a4565b600060405180830381855afa9150503d8060008114611c13576040519150601f19603f3d011682016040523d82523d6000602084013e611c18565b606091505b5091509150818015611c2c57506020815110155b801561157b57508051630b135d3f60e11b90611c5190830160209081019084016125c0565b149695505050505050565b60006001600160a01b0384163b15611d9d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611ca09033908990889088906004016125d9565b6020604051808303816000875af1925050508015611cdb575060408051601f3d908101601f19168201909252611cd89181019061260b565b60015b611d83573d808015611d09576040519150601f19603f3d011682016040523d82523d6000602084013e611d0e565b606091505b508051600003611d7b5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105e2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611197565b506001611197565b6001811115610de6576001600160a01b03841615611deb576001600160a01b03841660009081526020819052604081208054839290611de5908490612564565b90915550505b6001600160a01b03831615610de6576001600160a01b03831660009081526020819052604081208054839290611e229084906124c9565b909155505050505050565b60006001611e3a8461098f565b611e449190612564565b6000838152600e6020526040902054909150808214611e97576001600160a01b0384166000908152600d602090815260408083208584528252808320548484528184208190558352600e90915290208190555b506000918252600e602090815260408084208490556001600160a01b039094168352600d81528383209183525290812055565b600f54600090611edc90600190612564565b600083815260106020526040812054600f8054939450909284908110611f0457611f0461249d565b9060005260206000200154905080600f8381548110611f2557611f2561249d565b600091825260208083209091019290925582815260109091526040808220849055858252812055600f805480611f5d57611f5d612628565b6001900381819060005260206000200160009055905550505050565b6000611f848361098f565b6001600160a01b039093166000908152600d602090815260408083208684528252808320859055938252600e9052919091209190915550565b6001600160a01b0382166120135760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105e2565b6000818152600a60205260409020546001600160a01b0316156120785760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105e2565b61208660008383600161186d565b6000818152600a60205260409020546001600160a01b0316156120eb5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105e2565b6001600160a01b03821660008181526020818152604080832080546001019055848352600a90915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b03198116811461098c57600080fd5b60006020828403121561217c57600080fd5b8135610e4c81612154565b60005b838110156121a257818101518382015260200161218a565b50506000910152565b600081518084526121c3816020860160208601612187565b601f01601f19169290920160200192915050565b602081526000610e4c60208301846121ab565b6000602082840312156121fc57600080fd5b5035919050565b80356001600160a01b038116811461221a57600080fd5b919050565b6000806040838503121561223257600080fd5b61223b83612203565b946020939093013593505050565b60008060006060848603121561225e57600080fd5b61226784612203565b925061227560208501612203565b9150604084013590509250925092565b60006020828403121561229757600080fd5b610e4c82612203565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126122c757600080fd5b813567ffffffffffffffff808211156122e2576122e26122a0565b604051601f8301601f19908116603f0116810190828211818310171561230a5761230a6122a0565b8160405283815286602085880101111561232357600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561235957600080fd5b61236285612203565b93506020850135925060408501359150606085013567ffffffffffffffff81111561238c57600080fd5b612398878288016122b6565b91505092959194509250565b600080604083850312156123b757600080fd5b6123c083612203565b9150602083013580151581146123d557600080fd5b809150509250929050565b600080600080608085870312156123f657600080fd5b6123ff85612203565b935061240d60208601612203565b925060408501359150606085013567ffffffffffffffff81111561238c57600080fd5b6000806040838503121561244357600080fd5b61244c83612203565b915061245a60208401612203565b90509250929050565b600181811c9082168061247757607f821691505b60208210810361249757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610493576104936124b3565b6000600182016124ee576124ee6124b3565b5060010190565b60008351612507818460208801612187565b83519083019061251b818360208801612187565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b60008261255f5761255f61253a565b500490565b81810381811115610493576104936124b3565b6000826125865761258661253a565b500690565b82815260406020820152600061119760408301846121ab565b600082516125b6818460208701612187565b9190910192915050565b6000602082840312156125d257600080fd5b5051919050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261157b60808301846121ab565b60006020828403121561261d57600080fd5b8151610e4c81612154565b634e487b7160e01b600052603160045260246000fdfea264697066735822122020e2c60d4ad503f5069fbaf60a16ae492a9a29c020e62f4451624a8e799b4d6264736f6c63430008130033";

type NFTSimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTSimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTSimple__factory extends ContractFactory {
  constructor(...args: NFTSimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _initBaseURI: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initBaseURI,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _initBaseURI: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _name,
      _symbol,
      _initBaseURI,
      overrides || {}
    ) as Promise<
      NFTSimple & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NFTSimple__factory {
    return super.connect(runner) as NFTSimple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTSimpleInterface {
    return new Interface(_abi) as NFTSimpleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): NFTSimple {
    return new Contract(address, _abi, runner) as unknown as NFTSimple;
  }
}

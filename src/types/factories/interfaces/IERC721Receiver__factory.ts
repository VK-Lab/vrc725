/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC721Receiver,
  IERC721ReceiverInterface,
} from "../../interfaces/IERC721Receiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
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
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC721Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721ReceiverInterface {
    return new Interface(_abi) as IERC721ReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC721Receiver {
    return new Contract(address, _abi, runner) as unknown as IERC721Receiver;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface VRC725HelperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "decimals"
      | "estimateFee"
      | "issuer"
      | "minFee"
      | "multicall"
      | "name"
      | "owner"
      | "permit"
      | "permitForAll"
      | "setFee"
      | "supportsInterface"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "transferNFT"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Fee"
      | "FeeUpdated"
      | "OwnershipTransferred"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "estimateFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "issuer", values?: undefined): string;
  encodeFunctionData(functionFragment: "minFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "permitForAll",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferNFT",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issuer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permitForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    issuer: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    issuer: string,
    value: bigint
  ];
  export interface OutputObject {
    from: string;
    to: string;
    issuer: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeUpdatedEvent {
  export type InputTuple = [fee: BigNumberish];
  export type OutputTuple = [fee: bigint];
  export interface OutputObject {
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VRC725Helper extends BaseContract {
  connect(runner?: ContractRunner | null): VRC725Helper;
  waitForDeployment(): Promise<this>;

  interface: VRC725HelperInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  estimateFee: TypedContractMethod<[value: BigNumberish], [bigint], "view">;

  issuer: TypedContractMethod<[], [string], "view">;

  minFee: TypedContractMethod<[], [bigint], "view">;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  permit: TypedContractMethod<
    [
      collection: AddressLike,
      spender: AddressLike,
      tokenId: BigNumberish,
      deadline: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  permitForAll: TypedContractMethod<
    [
      collection: AddressLike,
      owner: AddressLike,
      spender: AddressLike,
      deadline: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setFee: TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferNFT: TypedContractMethod<
    [collection: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[amount: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimateFee"
  ): TypedContractMethod<[value: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "issuer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      spender: AddressLike,
      tokenId: BigNumberish,
      deadline: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "permitForAll"
  ): TypedContractMethod<
    [
      collection: AddressLike,
      owner: AddressLike,
      spender: AddressLike,
      deadline: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFee"
  ): TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferNFT"
  ): TypedContractMethod<
    [collection: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Fee"
  ): TypedContractEvent<
    FeeEvent.InputTuple,
    FeeEvent.OutputTuple,
    FeeEvent.OutputObject
  >;
  getEvent(
    key: "FeeUpdated"
  ): TypedContractEvent<
    FeeUpdatedEvent.InputTuple,
    FeeUpdatedEvent.OutputTuple,
    FeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Fee(address,address,address,uint256)": TypedContractEvent<
      FeeEvent.InputTuple,
      FeeEvent.OutputTuple,
      FeeEvent.OutputObject
    >;
    Fee: TypedContractEvent<
      FeeEvent.InputTuple,
      FeeEvent.OutputTuple,
      FeeEvent.OutputObject
    >;

    "FeeUpdated(uint256)": TypedContractEvent<
      FeeUpdatedEvent.InputTuple,
      FeeUpdatedEvent.OutputTuple,
      FeeUpdatedEvent.OutputObject
    >;
    FeeUpdated: TypedContractEvent<
      FeeUpdatedEvent.InputTuple,
      FeeUpdatedEvent.OutputTuple,
      FeeUpdatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}

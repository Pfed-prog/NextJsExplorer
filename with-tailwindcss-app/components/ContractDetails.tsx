import React, { Fragment, useState, useEffect } from "react";
import { utils } from "ethers";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { Disclosure } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { useProvider } from "wagmi";

import { FullContractWrapper } from "../types";
import { BalanceCard } from "./BalanceCard";
import { TransactionCard } from "./TransactionCard";
import { Loading } from "./Loading";
import { ContractMembersCard } from "./ContractMembersCard";
import { ContractStateCard } from "./ContractStateCard";
import { NetworkAddresses } from "./NetworkAddresses";

interface ContractProps {
  contract: FullContractWrapper;
}

export const ContractDetails = (props: ContractProps) => {
  const [openTokenA, setOpenTokenA] = useState(false);
  const [openTokenB, setOpenTokenB] = useState(false);
  const [openTokenC, setOpenTokenC] = useState(false);
  const [openTokenD, setOpenTokenD] = useState(false);
  const [openTokenE, setOpenTokenE] = useState(false);
  const [openTokenF, setOpenTokenF] = useState(false);
  const provider = useProvider();

  const [loading, setLoading] = useState(true);
  const [contractState, setContractState] = useState(new Array<any>());
  const [functions, setFunctions] = useState({
    ctor: new Array<any>(),
    constants: new Array<any>(),
    functions: new Array<any>(),
    events: new Array<any>(),
    fallback: new Array<any>(),
  });

  const parseContract = async () => {
    const contract = props.contract.ethersContract;
    const ctor = contract.interface.fragments.filter(
      (member: any) => member.type === "constructor"
    );

    const constants = contract.interface.fragments.filter(
      (member: any) =>
        member.constant === true ||
        member.stateMutability === "view" ||
        member.stateMutability === "pure"
    );
    const functions = contract.interface.fragments.filter(
      (member: any) =>
        !member.constant &&
        member.stateMutability !== "view" &&
        member.stateMutability !== "pure" &&
        member.type !== "constructor" &&
        member.type !== "receive" &&
        member.type !== "event"
    );
    const events = contract.interface.fragments.filter(
      (member: any) => member.type === "event"
    );
    const fallback = contract.interface.fragments.filter(
      (member: any) => member.type === "receive"
    );

    const executableConstants = constants
      .filter((i: any) => i.inputs.length === 0)
      .map(async (i: any) => {
        let value, type;
        try {
          value = await contract.functions[i.name]();
          const functionFragment = i as utils.FunctionFragment;
          if (
            functionFragment &&
            functionFragment.outputs?.length &&
            functionFragment.outputs[0].type
          ) {
            type = functionFragment.outputs[0].type;
          }
        } catch (ex) {
          console.log("ERROR", ex);
          value = "[error retrieving value]";
        }
        return {
          name: i.name,
          value: value,
          type: type,
        };
      });

    const currentState = await Promise.all(executableConstants);

    setContractState(currentState);
    setFunctions({ ctor, constants, functions, events, fallback });
    setLoading(false);
  };

  useEffect(() => {
    parseContract();
  }, [props.contract]);

  const copyToClipboard = () => {
    const textElement = document.createElement(
      "textarea"
    ) as HTMLTextAreaElement;
    textElement.value = JSON.stringify(props.contract.abi);
    textElement.setAttribute("readonly", "");
    textElement.style.position = "absolute";
    textElement.style.left = "-9999px";
    document.body.appendChild(textElement);

    textElement.select();
    document.execCommand("copy");
    document.body.removeChild(textElement);
  };

  if (loading) {
    return <Loading />;
  }

  const renderAddresses =
    props.contract.availableAddresses.length > 1 ? (
      <NetworkAddresses
        availableAddresses={props.contract.availableAddresses}
      />
    ) : (
      <>No other Networks</>
    );

  return (
    <div className="bg-sky-100 min-h-screen p-6 ">
      <div className="text-xl items-center justify-center max-w-4xl mx-auto flex grid-cols-1 lg:max-w-4xl lg:gap-x-20 lg:grid-cols-2 py-2 px-6 font-semibold   rounded ">
        <div className="overflow-hidden rounded-lg bg-gray-50 shadow p-2 ring-1 ring-gray-900/5">
          <dl className="flex flex-wrap ">
            <div className="flex-auto mt-3">
              <h3 className="flex items-center space-x-3 justify-center text-xl font-medium text-gray-900">
                {props.contract?.name}
              </h3>
            </div>
          </dl>
          <div className="mt-2 border-t border-gray-900/5 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
            <h3 className="text-sm sm:text-xl">{props.contract.address}</h3>
          </div>
          <div className="mt-2 border-t border-gray-900/5 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
            {renderAddresses}
          </div>
        </div>
      </div>
      <div className="text-xl items-center justify-center max-w-4xl mx-auto flex grid-cols-1 lg:max-w-4xl lg:gap-x-20 lg:grid-cols-2 py-2 px-6 font-semibold   rounded mt-2">
        <div className="overflow-hidden rounded-lg bg-gray-50 shadow p-2 ring-1 ring-gray-900/5">
          <dl className="flex flex-wrap ">
            <div className="flex-auto mt-3">
              <dt className="text-xl font-semibold leading-6 text-gray-900">
                <BalanceCard address={props.contract.address} />
              </dt>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-8 flow-root ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full  align-middle sm:px-6 lg:px-8">
            <table className=" min-w-full divide-y divide-gray-300">
              <TransactionCard
                address={props.contract.address}
                abi={props.contract.abi}
                provider={provider}
              />
            </table>
          </div>
        </div>
      </div>

      <div className="mt-5 font-bold text-center">
        <button
          type="button"
          onClick={() => copyToClipboard()}
          className="rounded-full bg-white px-2.5 py-1 text-info font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300"
        >
          Copy ABI to clipboard
        </button>
      </div>

      <div className="mx-auto flex items-center justify-center py-2 px-4">
        <div className="mt-2 flex">
          <Disclosure as="div" key="Add new pair">
            {({ open }) => (
              <>
                <h3 className="flex items-center justify-center">
                  <Disclosure.Button className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-blue-700">
                    <span className={"text-white text-sm font-medium"}>
                      Current state
                    </span>

                    <span className="ml-6 flex items-center justify-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-gray-300 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-white group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>

                <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                  <div className="rounded-2xl mt-5 bg-sky-200 p-1">
                    <div className="px-4 sm:px-6 lg:px-8 mt-10">
                      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block  py-2  sm:px-6 lg:px-8">
                          <ContractStateCard members={contractState} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="mx-auto flex items-center mt-5 justify-center py-2 ">
        <div className="px-2">
          <button
            type="submit"
            onClick={() => setOpenTokenA(true)}
            className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span className="ml-2">constructor</span>
            <svg
              fill="#000000"
              width="20px"
              height="25px"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>angle-down</title>{" "}
                <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        <Transition.Root show={openTokenA} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenTokenA}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  text-gray-900"
                        >
                          <ContractMembersCard
                            type="constructor"
                            contract={props.contract}
                            members={functions.ctor}
                          />
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenTokenA(false)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="px-2 ">
          <button
            type="submit"
            onClick={() => setOpenTokenB(true)}
            className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span className="ml-2">views</span>
            <svg
              fill="#000000"
              width="20px"
              height="25px"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>angle-down</title>{" "}
                <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        <Transition.Root show={openTokenB} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenTokenB}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  text-gray-900"
                        >
                          <ContractMembersCard
                            type="views"
                            contract={props.contract}
                            members={functions.constants.filter(
                              (i) => i.inputs?.length > 0
                            )}
                          />
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenTokenB(false)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="px-2 ">
          <button
            type="submit"
            onClick={() => setOpenTokenC(true)}
            className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span className="ml-2">functions</span>
            <svg
              fill="#000000"
              width="20px"
              height="25px"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>angle-down</title>{" "}
                <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <Transition.Root show={openTokenC} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenTokenC}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  text-gray-900"
                        >
                          <ContractMembersCard
                            type="functions"
                            contract={props.contract}
                            members={functions.functions.filter(
                              (i) =>
                                !i.payable && i.stateMutability !== "payable"
                            )}
                          />
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenTokenC(false)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="px-2 ">
          <button
            type="submit"
            onClick={() => setOpenTokenD(true)}
            className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span className="ml-2">payable</span>
            <svg
              fill="#000000"
              width="20px"
              height="25px"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>angle-down</title>{" "}
                <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <Transition.Root show={openTokenD} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenTokenD}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  text-gray-900"
                        >
                          <ContractMembersCard
                            type="payable"
                            contract={props.contract}
                            members={functions.functions.filter(
                              (i) =>
                                i.payable || i.stateMutability === "payable"
                            )}
                          />
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenTokenD(false)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="px-2 ">
          <button
            type="submit"
            onClick={() => setOpenTokenE(true)}
            className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span className="ml-2">events</span>
            <svg
              fill="#000000"
              width="20px"
              height="25px"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>angle-down</title>{" "}
                <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <Transition.Root show={openTokenE} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenTokenE}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  text-gray-900"
                        >
                          <ContractMembersCard
                            type="events"
                            contract={props.contract}
                            members={functions.events}
                          />
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenTokenE(false)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="px-2 ">
          <button
            type="submit"
            onClick={() => setOpenTokenF(true)}
            className="relative inline-flex items-center justify-center right-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span className="ml-2">fallback</span>
            <svg
              fill="#000000"
              width="20px"
              height="25px"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>angle-down</title>{" "}
                <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <Transition.Root show={openTokenF} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpenTokenF}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold  text-gray-900"
                        >
                          <ContractMembersCard
                            type="fallback"
                            contract={props.contract}
                            members={functions.fallback}
                          />
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenTokenF(false)}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <div className="mt-10 overflow-hidden bg-sky-100"></div>
    </div>
  );
};

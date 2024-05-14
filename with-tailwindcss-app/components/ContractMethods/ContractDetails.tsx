import { FunctionFragment } from "ethers";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Fragment, useState, useEffect } from "react";

import { FullContractWrapper } from "@/types/index";
import { ContractMembersCard } from "./ContractMembersCard";
import { ContractStateCard } from "./ContractStateCard";
import { NetworkAddresses } from "../NetworkAddresses";
import ArrowDownIcon from "../Icons/ArrowDown";

interface ContractProps {
  contract: FullContractWrapper;
}

export const ContractDetails = (props: ContractProps) => {
  const [openSCConstructor, setOpenSCConstructor] = useState(false);
  const [openTokenB, setOpenTokenB] = useState(false);
  const [openTokenC, setOpenTokenC] = useState(false);
  const [openTokenD, setOpenTokenD] = useState(false);
  const [openTokenE, setOpenTokenE] = useState(false);
  const [openTokenF, setOpenTokenF] = useState(false);

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
          const functionFragment = i as FunctionFragment;

          if (functionFragment?.outputs?.length) {
            type = functionFragment.outputs[0].type;
            value = await contract.getFunction(i.name)();
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
  };

  useEffect(() => {
    parseContract();
  }, [props.contract]);

  const copyToClipboard = async () => {
    try {
      const text = JSON.stringify(props.contract.abi);
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Could not copy text to clipboard", err);
    }
  };

  const renderAddresses = props.contract.availableAddresses.length > 1 && (
    <NetworkAddresses availableAddresses={props.contract.availableAddresses} />
  );

  return (
    <div>
      <div className="text-xl items-center justify-center max-w-4xl mx-auto flex lg:gap-x-20 lg:grid-cols-2 py-2 px-6 font-semibold rounded">
        <div className="overflow-hidden rounded-lg bg-gray-50 shadow p-2">
          <h3 className="mt-3 flex items-center justify-center text-xl font-medium text-gray-900">
            {props.contract.name}
          </h3>

          <h3 className="mt-2 px-6 py-3 text-sm sm:text-xl font-semibold leading-6 text-gray-900">
            {props.contract.address}
          </h3>

          <div className="mt-2 px-6 text-sm font-semibold text-gray-900">
            {renderAddresses}
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

      <div className="mt-2 mx-auto flex items-center justify-center py-2 px-4">
        <Disclosure as="div" key="current state">
          {({ open }) => (
            <div>
              <h3 className="flex items-center justify-center">
                <Disclosure.Button className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white hover:bg-blue-700">
                  <span className="text-white text-sm font-medium">
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
                <ContractStateCard members={contractState} />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center">
        <button
          type="submit"
          onClick={() => setOpenSCConstructor(true)}
          className="mx-auto mt-3 flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span className="ml-2">constructor</span>
          <ArrowDownIcon />
        </button>

        <Transition.Root show={openSCConstructor} as={Fragment}>
          <Dialog className="relative z-10" onClose={setOpenSCConstructor}>
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
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpenSCConstructor(false)}
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

        <button
          type="submit"
          onClick={() => setOpenTokenB(true)}
          className="mx-auto mt-3 flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span className="ml-2">views</span>
          <ArrowDownIcon />
        </button>

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

        <button
          type="submit"
          onClick={() => setOpenTokenC(true)}
          className="mx-auto mt-3 flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span className="ml-2">functions</span>
          <ArrowDownIcon />
        </button>

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

        <button
          type="submit"
          onClick={() => setOpenTokenD(true)}
          className="mx-auto mt-3 flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span className="ml-2">payable</span>
          <ArrowDownIcon />
        </button>

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

        <button
          type="submit"
          onClick={() => setOpenTokenE(true)}
          className="mx-auto mt-3 flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span className="ml-2">events</span>
          <ArrowDownIcon />
        </button>

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

                    <button
                      type="button"
                      className="mt-5 sm:mt-6 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpenTokenE(false)}
                    >
                      Confirm
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <button
          type="submit"
          onClick={() => setOpenTokenF(true)}
          className="mx-auto mt-3 flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-1.5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span className="ml-2">fallback</span>
          <ArrowDownIcon />
        </button>

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

                    <button
                      type="button"
                      className="mt-5 sm:mt-6 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setOpenTokenF(false)}
                    >
                      Confirm
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

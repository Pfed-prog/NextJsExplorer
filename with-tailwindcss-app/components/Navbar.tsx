import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import Explore from "/public/explore.svg";
import { useDarkMode } from "@/hooks/theme/UIThemeContext";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Explorer", href: "/explorer" },
];

export const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <div>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16 sm:h-20">
                            <div className="inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="inline-flex items-center justify-center transition-all p-2 rounded-md bg-blue-300 dark:bg-blue-900/40 hover:bg-orange-300 dark:hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6 stroke-white"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6 stroke-black dark:stroke-white"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex-1 flex sm:items-center sm:justify-start ml-5 sm:ml-10">
                                <Link href={"/"} className="dark:bg-white rounded-full p-2">
                                    <Image
                                        height={16}
                                        width={36}
                                        src={Explore}
                                        alt="EVM Explorer Logo"
                                    />
                                </Link>

                                <div className="hidden space-x-4 sm:block sm:ml-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={`${item.name}Link`}
                                            href={item.href}
                                            className="text-gray-900 hover:bg-gray-800 hover:text-white dark:text-white dark:hover:text-gray-200 dark:hover:bg-black/50 px-3 py-2 rounded-md font-medium text-lg"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <button className="ml-auto rounded-md hover:bg-black/10 dark:hover:bg-white/30 p-1 my-auto" onClick={() => toggleDarkMode()}>
                                    {isDarkMode ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden pr-2 pl-2 dark:bg-gray-800/30 bg-sky-500/20 mb-4">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={`${item.name}hiddenLink`}
                                    href={item.href}
                                    className="dark:text-gray-300 dark:hover:text-gray-200 hover:bg-gray-400/30 dark:hover:bg-gray-700/20 transition-colors block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </DisclosurePanel>
                </div>
            )}
        </Disclosure>
    );
};

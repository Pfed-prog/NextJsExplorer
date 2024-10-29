import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explorer", href: "/explorer" },
];

export const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 sm:h-20">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md bg-blue-300 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 stroke-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 stroke-black"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex-1 flex sm:items-center sm:justify-start ml-5 sm:ml-10">
                <Link href={"/"}>
                  <svg
                    className="h-8 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="64px"
                    height="64px"
                  >
                    <path
                      fill="#dadcec"
                      d="M40.78 41.46H46.32V45.46H40.78z"
                      transform="rotate(-45 43.543 43.464)"
                    />
                    <rect
                      width="8.49"
                      height="22.51"
                      x="48.8"
                      y="41.79"
                      fill="#cda1a7"
                      rx="4"
                      ry="4"
                      transform="rotate(-45 53.04 53.04)"
                    />
                    <rect
                      width="4.24"
                      height="22.51"
                      x="49.42"
                      y="43.29"
                      fill="#c4939c"
                      rx="2.12"
                      ry="2.12"
                      transform="rotate(-45 51.542 54.54)"
                    />
                    <path
                      fill="#ffeb9b"
                      d="M25 1A24 24 0 1 0 25 49A24 24 0 1 0 25 1Z"
                    />
                    <path
                      fill="#f6d397"
                      d="M11.14,38.86,38.86,11.14a4,4,0,0,1,6.11.54A24,24,0,0,1,11.68,45,4,4,0,0,1,11.14,38.86Z"
                    />
                    <path
                      fill="#bbdef9"
                      d="M25 7A18 18 0 1 0 25 43A18 18 0 1 0 25 7Z"
                    />
                    <path
                      fill="#d2edff"
                      d="M25 18A7 7 0 1 0 25 32A7 7 0 1 0 25 18Z"
                    />
                    <path
                      fill="#f3f3f3"
                      d="M21 17A4 4 0 1 0 21 25 4 4 0 1 0 21 17zM29.5 28A1.5 1.5 0 1 0 29.5 31 1.5 1.5 0 1 0 29.5 28z"
                    />
                    <path
                      fill="#8d6c9f"
                      d="M38.44,11.57a19,19,0,1,0,0,26.87A18.88,18.88,0,0,0,38.44,11.57ZM37,37a17,17,0,1,1,0-24A16.89,16.89,0,0,1,37,37Z"
                    />
                    <path
                      fill="#8d6c9f"
                      d="M31.2 14.72a12 12 0 0 1 2.28 1.79A1 1 0 1 0 34.9 15.1 14.08 14.08 0 0 0 32.23 13a1 1 0 0 0-1 1.71zM26.38 11.07a14 14 0 0 0-11.27 4 1 1 0 1 0 1.41 1.41 12 12 0 0 1 9.67-3.46 1 1 0 1 0 .2-2z"
                    />
                    <path
                      fill="#8d6c9f"
                      d="M61.88,54.46,51.54,44.12a5,5,0,0,0-3.6-1.45c0-.14-2.77-2.91-2.77-2.91a25,25,0,1,0-5.41,5.41s2.78,2.72,2.91,2.77,0,0,0,.07a5,5,0,0,0,1.46,3.54L54.46,61.88a5,5,0,0,0,7.07,0l.34-.34a5,5,0,0,0,0-7.07ZM2,25A23,23,0,1,1,25,48,23,23,0,0,1,2,25ZM44.12,44.46a5,5,0,0,0-.92,1.32l-1.87-1.87a25.2,25.2,0,0,0,2.59-2.59l1.88,1.88a5,5,0,0,0-1.32.92ZM60.46,60.12l-.34.34a3,3,0,0,1-4.24,0L45.54,50.12a3,3,0,0,1,0-4.24l.34-.34a3,3,0,0,1,4.24,0L60.46,55.88a3,3,0,0,1,0,4.24Z"
                    />
                    <path
                      fill="#8d6c9f"
                      d="M34.19 32.78a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41zM15.81 32.78l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0-1.41-1.41zM39 24H37a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM14 25a1 1 0 0 0-1-1H11a1 1 0 0 0 0 2h2A1 1 0 0 0 14 25zM25 36a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V37A1 1 0 0 0 25 36zM38.28 29.55l-1.84-.78a1 1 0 1 0-.78 1.84l1.84.78a1 1 0 1 0 .78-1.84zM20.7 35.13a1 1 0 0 0-1.31.53l-.78 1.84a1 1 0 1 0 1.84.78l.78-1.84A1 1 0 0 0 20.7 35.13zM14.8 29.12a1 1 0 0 0-1.3-.55l-1.85.75a1 1 0 1 0 .75 1.85l1.85-.75A1 1 0 0 0 14.8 29.12zM30.42 35.75a1 1 0 0 0-1.85.75l.75 1.85a1 1 0 0 0 1.85-.75z"
                    />
                  </svg>
                </Link>

                <div className="hidden space-x-4 sm:block sm:ml-6">
                  {navigation.map((item) => (
                    <Link
                      key={`${item.name}Link`}
                      href={item.href}
                      className="text-gray-200 hover:bg-gray-700 px-3 py-2 rounded-md font-medium text-lg transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden pr-2 pl-2 bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={`${item.name}hiddenLink`}
                  href={item.href}
                  className="text-gray-100 hover:text-gray-800 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
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

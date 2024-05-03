import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explorer", href: "/explorer" },
];

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-sky-100">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-stretch justify-start ml-6">
                <Link href={"/"}>
                  <Image
                    height={16}
                    width={48}
                    src="/explore.png"
                    alt="logo"
                    className="flex items-center"
                  />
                </Link>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={`${item.name}Link`}
                        href={item.href}
                        className="text-gray-900 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <ConnectButton />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={`${item.name}hiddenLink`}
                  href={item.href}
                  className="text-gray-900 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

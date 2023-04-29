"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { getNavbar } from "@/sanity/sanity-utils";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function NavbarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["navbar"],
    queryFn: () => getNavbar(),
  });
  if (isLoading) {
    return <h1>is loading</h1>;
  }

  if (error || data === undefined) {
    return <h1>Something wrong...</h1>;
  }
  const { icon, menuList, menuButtonsList } = data;
  return (
    <header className="absolute inset-x-0 top-0 z-50 xl:mx-auto xl:max-w-7xl">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {icon && (
              <Image
                className="h-8 w-auto"
                src={icon}
                width={32}
                height={32}
                alt=""
              />
            )}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {menuList.map((item) => (
            <Link
              key={item}
              href={item}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {menuButtonsList.map((btn) => (
            <a
              key={btn}
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {btn} <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={icon} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuList.map((item) => (
                  <a
                    key={item}
                    href={item}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {menuButtonsList.map((btn) => (
                  <a
                    key={btn}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {btn}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

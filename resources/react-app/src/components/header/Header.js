import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../../assets/header/logo.png";
import LogoBlack from "../../assets/ozayaz/logoo.png";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [navItem, setNavItem] = useState(" ");
  const slug = window.location.pathname;
  useEffect(() => {
    setNavItem(slug);
  }, [slug]);
  const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünlerimiz", href: "/urunler" },
    { name: "Katalog", href: "/katalog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <Disclosure
      as="nav"
      className="absolute top-0 z-50 w-full max-sm:relative max-md:bg-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2   max-xl:mx-0 max-xl:px-0 ">
            <div className="relative flex sm:h-20 h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden justify-between w-full px-6">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center border-2 border-slate-900 rounded-md p-2 text-slate-700 ring-2 ring-inset ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-slate-700"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-slate-700 text"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
                <img
                  className="block lg:hidden h-8"
                  src={LogoBlack}
                  alt="Özayaz boru"
                />
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full">
                <div className="hidden sm:ml-6 md:block w-[85%] max-xl:w-full">
                  <div className="flex justify-between items-center max-xl:text-sm max-lg:px-10 max-xl:px-10">
                    <div className="flex flex-shrink-0 items-center max-xl:w-32 w-52">
                      <a href="/">
                        <img
                          className="block w-auto lg:hidden"
                          src={Logo}
                          alt="Your Company"
                        />
                      </a>
                      <a href="/">
                        <img
                          className="hidden w-auto lg:block"
                          src={Logo}
                          alt="Your Company"
                        />
                      </a>
                    </div>
                    <div className="w-full flex justify-end items-center text-white gap-32 max-lg:gap-12">
                      <a
                        className={
                          navItem === "/"
                            ? "text-base font-medium"
                            : "text-base font-light"
                        }
                        href="/"
                      >
                        Anasayfa
                      </a>
                      <a
                        className={
                          navItem === "/hakkimizda"
                            ? "text-base font-medium"
                            : "text-base font-light"
                        }
                        href="/hakkimizda"
                      >
                        Hakkımızda
                      </a>
                      <a
                        className={
                          navItem === "/urunler"
                            ? "text-base font-medium"
                            : "text-base font-light"
                        }
                        href="/urunler"
                      >
                        Ürünlerimiz
                      </a>
                      <a
                        className={
                          navItem === "/urunler"
                            ? "text-base font-medium"
                            : "text-base font-light"
                        }
                        href="/katalog"
                      >
                        Katalog
                      </a>
                      <a
                        className={
                          navItem === "/iletisim"
                            ? "text-base font-medium"
                            : "text-base font-light"
                        }
                        href="/iletisim"
                      >
                        İletişim
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-slate-700 font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

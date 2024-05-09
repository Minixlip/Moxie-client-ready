import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { motion } from "framer-motion";

export default function UserMenuHeader() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <div>
            <Menu.Button className="inline-flex  w-full justify-center pr-4 py-1  font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              <span
                className="flex items-end gap-2 mr-2  py-1 px-6 rounded-lg text-primaryTxt bg-zinc-800 text-[10px] lg:text-sm"
                aria-hidden="true"
              >
                Menu
                <motion.div
                  animate={{ rotate: menuVisible ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <GoTriangleDown className="text-zinc-400" />
                </motion.div>
              </span>
            </Menu.Button>
          </div>

          <div>
            <Transition
              as={Fragment}
              show={menuVisible}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-50 right-10 lg:right-0 mt-2 w-56 px-4 pb-2 origin-top-right rounded-sm bg-zinc-800  shadow-lg ring-1 ring-black/5 focus:outline-none border-t-4 border-red-600">
                <div className="px-1 py-1 ">
                  <div className="flex flex-col pb-4 pt-2">
                    <span className="text-primaryTxt">Menu</span>
                  </div>
                  <hr className="pb-4" />
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/shop"}>
                        <button
                          className={`${
                            active
                              ? "bg-zinc-600 text-[#EBEBEB]"
                              : "text-[secondaryTxt]"
                          } group flex w-full items-center rounded-md px-2 py-2 mb-2 text-sm`}
                        >
                          Shop
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/Men"}>
                        <button
                          className={`${
                            active
                              ? "bg-zinc-600 text-[#EBEBEB]"
                              : "text-[secondaryTxt]"
                          } group flex w-full items-center rounded-md px-2 py-2 mb-2  text-sm`}
                        >
                          Men
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/women"}>
                        <button
                          className={`${
                            active
                              ? "bg-zinc-600 text-[#EBEBEB]"
                              : "text-[secondaryTxt]"
                          } group flex w-full items-center rounded-md px-2 py-2 mb-2  text-sm`}
                        >
                          Women
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/kids"}>
                        <button
                          className={`${
                            active
                              ? "bg-zinc-600 text-[#EBEBEB]"
                              : "text-[secondaryTxt]"
                          } group flex w-full items-center rounded-md px-2 py-2 mb-2  text-sm`}
                        >
                          Kids
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </div>
      </Menu>
    </div>
  );
}

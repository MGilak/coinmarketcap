import Link from "next/link";
import React from "react";

import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
  IoIosArrowDown,
} from "react-icons/io";
import { BiSolidGasPump, BiSolidDollarCircle } from "react-icons/bi";
import { MdOutlineNightlightRound } from "react-icons/md";

const Header = () => {
  return (
    <div>
      {/* up */}
      <div className="py-4 px-3">
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="flex text-[11px]">
            <div className="pr-2">
              <span className="font-bold text-gray-500">Cryptos:</span>
              <Link href="/" className="text-blue-600 font-bold pl-1">
                1.8M+
              </Link>
            </div>

            <div className="pr-2">
              <span className="font-bold text-gray-500">Exchanges:</span>
              <Link
                href="/rankings/exchanges/"
                className="text-blue-600 font-bold pl-1"
              >
                651
              </Link>
            </div>

            <div className="pr-2 flex">
              <span className="font-bold text-gray-500">Market Cap:</span>
              <Link
                href="/rankings/exchanges/"
                className="text-blue-600 font-bold pl-1 flex"
              >
                <span>$1.16T</span>
              </Link>
              <span className="flex items-center pl-1 text-green-500">
                <IoMdArrowDropup className="text-[16px]" />
                <span>0.49%</span>
              </span>
            </div>

            <div className="pr-2 flex">
              <span className="font-bold text-gray-500">24h Vol:</span>
              <Link
                href="/rankings/exchanges/"
                className="text-blue-600 font-bold pl-1 flex"
              >
                <span>$29.01B</span>
              </Link>
              <span className="flex items-center pl-1 text-red-600">
                <IoMdArrowDropdown className="text-[16px]" />
                <span>11.61%</span>
              </span>
            </div>

            <div className="pr-2">
              <span className="font-bold text-gray-500">Dominance:</span>
              <Link
                href="/rankings/exchanges/"
                className="text-blue-600 font-bold pl-1"
              >
                BTC: 48.7% ETH: 18.9%
              </Link>
            </div>

            <div className="pr-2 flex items-center">
              <BiSolidGasPump />
              <span className="font-bold text-gray-500 pl-1">ETH Gas:</span>
              <Link
                href="/rankings/exchanges/"
                className="text-blue-600 font-bold pl-1 flex items-center"
              >
                <span className="pr-1">14 Gwei</span>
                <IoIosArrowDown />
              </Link>
            </div>

            <div className="pr-2 flex items-center">
              <span className="font-bold text-gray-500 pl-1">
                Fear & Greed:
              </span>
              <div className="text-blue-600 font-bold pl-1 flex items-center">
                <span className="pr-1">51/100</span>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="hover:bg-gray-100 rounded py-[3px] flex items-center cursor-pointer font-bold text-[12px] text-black">
                <span>English</span>
                <span>
                  <IoMdArrowDropdown className="text-[16px]" />
                </span>
              </div>

              <div className="ml-2 hover:bg-gray-100 rounded py-[3px] text-black">
                <button className="flex items-center">
                  <BiSolidDollarCircle className="text-green-600 mr-1" />
                  <span className="font-bold text-sm">USD</span>
                  <IoMdArrowDropdown className="text-[16px]" />
                </button>
              </div>

              <div className="cursor-pointer hover:bg-gray-100 rounded py-[3px]">
                <MdOutlineNightlightRound className="text-xl -rotate-12" />
              </div>
            </div>

            <div className="w-[2px] h-[20px] bg-gray-100 ml-3"></div>

            <div className="ml-4 flex items-center gap-2">
              <div className="rounded-full p-1 hover:bg-gray-100">
                <Link href="/">
                  <img classNmae="w-12" src="./images/diamond-icon.svg" />
                </Link>
              </div>

              <div className="cursor-pointer text-[13px] text-blue-600 font-bold border-[1px] py-1 px-3 border-blue-600 rounded-lg hover:bg-blue-100/20">
                <button>Log in</button>
              </div>

              <div className="cursor-pointer text-[13px] text-white bg-blue-500 font-bold border-[1px] py-1 px-3 border-blue-600 rounded-lg hover:bg-blue-600">
                <button>sign up</button>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* down */}
      <div></div>
    </div>
  );
};

export default Header;

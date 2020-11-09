import React from "react";
import { ReactComponent as Logo } from "./OFN_logo.svg";
import { ReactComponent as Cart } from "./shopping-cart.svg";
export interface HeaderProps {
  /**
   * The number of the product
   */
  itemsCount: number;
  /**
   * Handler when clicking on "My Cart" label
   */
  myCartHandler: () => void;
}

/**
 * Header for the APp
 */
export const Header: React.FC<HeaderProps> = ({
  itemsCount,
  myCartHandler,
  ...props
}) => {
  return (
    <nav className=" bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between flex-wrap m-auto max-w-screen-lg">
        <div className="flex items-center flex-no-shrink text-gray-800 mr-6">
          <Logo />
          <span className="text-gray-700 text-lg tracking-tight ml-4">
            Open Food
            <br />
            Network
          </span>
        </div>
        <div className="flex-grow flex items-center w-auto">
          <div className="text-sm flex-grow"></div>
          <div
            className="text-gray-700 flex items-center cursor-pointer"
            onClick={(e) => myCartHandler()}
          >
            <Cart className="fill-current" />
            <div className="ml-4 text-base">My Cart</div>
            {itemsCount !== 0 && (
              <div className="text-base ml-1">({itemsCount})</div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

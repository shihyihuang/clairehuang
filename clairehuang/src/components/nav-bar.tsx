import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import { Link } from "react-router-dom";

interface INavBar {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NavBar = (props: INavBar) => {
  const { isOpen, setIsOpen } = props;
  const menuOptions = ["projects", "contact", "home"];
  return (
    <div className="text-xxxl text-dark-navy font-black text-end absolute right-m top-s l:right-space-[48px] l:top-m z-[100] ">
      <button
        className="hover:bg-dark-navy hover:text-base-white hover:drop-shadow-lg rounded-full p-xs"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <RxHamburgerMenu />
      </button>

      <div
        className={`flex flex-col items-end text-end text-dark-navy transition-opacity duration-300 ease-in-out mt-xs ${
          isOpen ? "opacity-100" : "opacity-0 duration-100 pointer-events-none"
        }`}>
        {menuOptions.map((option, index) => (
          <Link
            key={index}
            className="pt-space-1 cursor-pointer transition-all duration-700 ease-in-out hover:-translate-x-1 active:scale-90"
            to={`${option}`}
            onClick={() => {
              setIsOpen(false);
            }}>
            {option.toUpperCase()}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

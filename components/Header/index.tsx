"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggle";
import menuData from "./menuData";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";
import { VscChromeClose } from "react-icons/vsc"; 
import { Menu } from "@/types/menu";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[100px] duration-300 trasnsition ease-in-out");
      } else {
        setShow("duration-300 trasnsition ease-in-out");
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow("translate-y-0 duration-300 trasnsition ease-in-out");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);

  return (
    <>
     <div
  className={`flex items-center sticky inset-x-0 top-0 duration-300 trasnsition ease-in-out   py-4 z-[1000] justify-between ${
    menu ? "" : "dark:bg-[#292a7c] border-b dark:border-white border-[#292a7c] bg-white"
  } ${show}`}
>
        <Image src={'/assets/1.jpg'} alt="abc" width={70} height={70} className="rounded-lg"/>
        <Link
          href={'/'}
          className={`z-[50] text-2xl transition-none max-[800]:text-[20px] font-[800] bg-gradient-to-tr from-[#39bae2] to-[#0004f8] bg-clip-text text-transparent hidden lg:block  ${
            menu && "opacity-0 "
          }`}
        >
          PROGRAMMIERS
        </Link>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 z-[50]">
            {menu ? (
              <VscChromeClose
                size={26}
                className="dark:text-white cursor-pointer text-[#292a7c] "
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            ) : (
              <RxHamburgerMenu
                size={26}
                className="dark:text-white cursor-pointer text-[#292a7c] "
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            )}
           

           
            <ThemeToggler />
           
          </div>
        </div>
      </div>
      {menu && (
        <div id="menu">
          <div id="menu-items" className="sticky-menu-items">
            {menuData.map((data: Menu) => (
              <Link
                href={data.path!}
                key={data.id}
                className={`text-[#292a7c] dark:text-white menu-item ${
                  activeIndex === data.id ? "active" : ""
                }`}
                onMouseOver={() => {
                  setActiveIndex(data.id);
                }}
                onClick={() => setMenu(!menu)}
              >
                {data.title}
              </Link>
            ))}
          </div>
          <div
            id={
              theme === "dark"
                ? "menu-background-pattern-dark"
                : "menu-background-pattern"
            }
            className={theme === "dark" ? "bg-[#292a7c]" : "bg-white"}
            style={{
              backgroundPosition: `0% -${
                activeIndex ? (activeIndex + 1) * 25 : 0
              }%`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Navbar;

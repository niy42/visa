import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import LangSelector from '../LangSelector';
import { LangSelectorsm } from "../LangSelector";

import logo from "../../assets/vlogo.png";
import { useTranslation } from "react-i18next";

const Menu = ({ title, classProps }) => {
    return (
        <li className={`${classProps}`}>
            <a href={`#${title.toLowerCase()}`}>{title}</a>
        </li>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { t } = useTranslation();
    const { url, home, evolution, utilities, contact } = t('navbar');

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-5 bg-gray-900" >
            <div className="flex md:flex-1 justify-start items-center">
                <img src={logo} alt="logo" className="w-24 cursor-pointer" id='' />
            </div>
            <ul className="text-white hidden md:flex list-none flex-row justify-between items-center flex-initial">
                {[home, evolution, utilities, contact].map((item, index) => (
                    <Menu key={item + index} title={item} classProps='cursor-pointer mx-4' />
                ))}
                <LangSelector classProps='' />
            </ul>
            <div className="flex relative md:hidden">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 right-0 p-9 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end bg-gray-800 text-white animate-slide-in">
                        <li className="text-xl w-full mb-9 mt-1">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {[home, evolution, utilities, contact].map((item, index) => (
                            <Menu key={item + index} title={item} classProps="my-2 text-lg" />
                        ))}
                        <LangSelectorsm classProps='flex flex-col' />
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
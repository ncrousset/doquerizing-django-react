import React, { useState} from "react";
import { NavLink, Link  } from "react-router-dom";
import { IoMenu, IoClose, IoCartOutline } from "react-icons/io5";

import "./Header.css"

const NavBar: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        const navLinks: HTMLElement = document.querySelector(".nav-links")!;

        if (menuOpen) {
            navLinks.classList.add("top-[-100%]");
            navLinks.classList.remove("top-[7%]");
        } else {
            navLinks.classList.remove("top-[-100%]");
            navLinks.classList.add("top-[7%]");
        }

        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex bg-white justify-between items-center w-[92%] mx-auto py-2">
            <div className="w-16">
                <h2 className="font-bold text-2xl">N<span className="text-[#FF3D00]">S</span>D</h2>
            </div>
            <div className="nav-links z-20 bg-white duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center  px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10">
                    <li>
                        <NavLink 
                            className={`hover:text-gray-500`}
                            to="/">
                                Nuevo y Destacado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={`hover:text-gray-500`}
                            to="/s/trends">
                                Tendencias
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="hover:text-gray-500" 
                            to="/s/men">Hombres
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="hover:text-gray-500" 
                            to="/s/women">Mejeres</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="hover:text-gray-500" 
                            to="/s/kids">Ninos</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <Link to="/login" className="bg-[#FF3D00] text-white px-5 py-2 rounded-full hover:bg-[#C83000]">Sign in</Link>

                <Link to="/shopping-cart" >
                    <IoCartOutline className="text-3xl cursor-pointer"></IoCartOutline>
                </Link>
                
                <IoClose onClick={()=>{handleToggleMenu()}} className={`text-3xl cursor-pointer md:hidden ${ menuOpen ? '' : 'hidden'} `}></IoClose>
                <IoMenu onClick={()=>{handleToggleMenu()}} className={`text-3xl  cursor-pointer md:hidden ${ menuOpen ? 'hidden' : ''} `}></IoMenu>
            </div>
        </nav>
    );
};

export default NavBar;
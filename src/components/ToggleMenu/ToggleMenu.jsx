"use client";

import { ProductsContext } from "@/context";
import { IconMenuBars3, IconXMark } from "@/icons/Icons";
import Link from "next/link";
import React from "react";

const linksLeft = [
    {
        label: "All",
        route: "/",
        category: "",
    },
    {
        label: "Clothes",
        route: "/clothes",
        category: "clothes",
    },
    {
        label: "Electronics",
        route: "/electronics",
        category: "electronics",
    },
    {
        label: "Furnitures",
        route: "/furnitures",
        category: "furnitures",
    },
    {
        label: "Toys",
        route: "/toys",
        category: "toys",
    },
    {
        label: "Others",
        route: "/others",
        category: "others",
    },
];

const linksRight = [
    {
        label: "My Orders",
        route: "/my-orders",
    },
    {
        label: "My Account",
        route: "/my-account",
    },
    {
        label: "Sing In",
        route: "/sign-in",
    },
];

function ToggleMenu() {
    const { showMenu, setShowMenu,setSearchCategory } = React.useContext(ProductsContext);

    const handleOnClick = (category)=>{
        setSearchCategory(category)
        setShowMenu(false)
    }

    return (
        <>
            <div className="lg:hidden px-10 w-full h-full flex items-center gap-4">
                <button className="grid place-content-center w-7 h-7" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <IconXMark w={7} h={7} /> : <IconMenuBars3 w={7} h={7} />}
                </button>
                <span className="text-lg font-semibold">Shopi</span>
            </div>

            <nav className={`${showMenu ? "visible opacity-100" : "invisible opacity-0"} h-screen w-full bg-black/50 transition-all duration-200`}>
                <ul className={`${showMenu ? "visible w-[280px]" : "invisible w-0"} flex bg-yellow-300 flex-col h-full drop-shadow-md transition-all duration-200`}>
                    {linksLeft.map(({ label, route, category }) => (
                        <li key={`${label}-${route}`}>
                            <Link
                                className="ease-in-out duration-300 hover:bg-yellow-400 w-full block py-2 px-10 "
                                onClick={()=> handleOnClick(category)}
                                href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>

    );
}

export default ToggleMenu;

'use client'
import Link from "next/link";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import { ProductsContext } from "@/context";
import React from "react";
import { IconMenuBars3, IconXMark } from "@/icons/Icons";
import ToggleMenu from "../ToggleMenu/ToggleMenu";

const linksLeft = [{
    label: 'Shopi',
    route: '/',
    category: '',
}, {
    label: 'All',
    route: '/',
    category: '',
}, {
    label: 'Clothes',
    route: '/clothes',
    category: 'clothes',
}, {
    label: 'Electronics',
    route: '/electronics',
    category: 'electronics',
}, {
    label: 'Furnitures',
    route: '/furnitures',
    category: 'furnitures',
}, {
    label: 'Toys',
    route: '/toys',
    category: 'toys',
}, {
    label: 'Others',
    route: '/others',
    category: 'others'
},]
const linksRight = [{
    label: 'My Orders',
    route: '/my-orders'
}, {
    label: 'My Account',
    route: '/my-account'
}, {
    label: 'Sing In',
    route: '/sign-in'
},]

function Header() {
    const { setSearchCategory} = React.useContext(ProductsContext)

    return (
        <header className="fixed w-screen h-12 md:h-14 lg:h-16 bg-yellow-300 top-0 z-10 drop-shadow-md">
            <nav className="hidden lg:flex justify-between items-center w-full h-full px-20">
                <ul className="flex gap-3 items-center">
                    {
                        linksLeft.map(({ label, route, category }) => (
                            <li key={`${label}-${route}`} className={`text-sm first-of-type:text-xl first-of-type:font-semibold`}>
                                <Link onClick={() => setSearchCategory(category)} href={route}>{label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="flex gap-3 items-center">
                    <li className="text-sm text-black font-light">yesid@gmail.com</li>
                    {
                        linksRight.map(({ label, route }) => (
                            <li key={`${label}-${route}`} className="text-sm">
                                <Link href={route}>{label}</Link>
                            </li>
                        ))
                    }
                    <ShoppingBag />
                </ul>
            </nav>
            <ToggleMenu/>                   
        </header>        
    );
}

export default Header;
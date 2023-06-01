import Link from "next/link";
import ShoppingBag from "../ShoppingBag/ShoppingBag";

const linksLeft = [{
    label: 'Shopi',
    route: '/',
}, {
    label: 'All',
    route: '/',
}, {
    label: 'Clothes',
    route: '/clothes',
}, {
    label: 'Electronics',
    route: '/electronics'
}, {
    label: 'Furnitures',
    route: '/furnitures'
}, {
    label: 'Toys',
    route: '/toys'
}, {
    label: 'Others',
    route: '/others'
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
    
    
    return (
        <header className="w-screen h-16 bg-yellow-300 fixed top-0 z-10 drop-shadow-md">
            <nav className="border-b flex justify-between items-center w-full h-full px-20">
                <ul className="flex gap-3 items-center">
                    {
                        linksLeft.map(({ label, route }) => (
                            <li key={`${label}-${route}`} className={`text-sm first-of-type:text-xl first-of-type:font-semibold`}>
                                <Link href={route}>{label}</Link>
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
                    <ShoppingBag/>                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;
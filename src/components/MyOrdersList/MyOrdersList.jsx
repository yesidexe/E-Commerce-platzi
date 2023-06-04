'use client'
import { ProductsContext } from "@/context";
import { IconChevronRight } from "@/icons/Icons";
import Link from "next/link";
import React from "react";

function MyOrdersList() {
    const { myOrders} = React.useContext(ProductsContext)

    return (
        <div className="flex flex-col gap-4 drop-shadow-md">
            {myOrders &&
                myOrders.map((myorder, index) => {
                    const id = `order-${index}`
                    return (
                        <div key={id} className="bg-white md:px-5 md:py-3 px-4 py-2 border-2 border-yellow-950 w-72 md:w-80 rounded-2xl flex justify-between items-center">
                            <p className="flex flex-col">
                                <span className="text-sm md:text-base font-light">{myorder.date}</span>
                                <span className="text-sm md:text-base font-light">{myorder.totalProducts} articles</span>
                            </p>
                            <p className="flex gap-3 items-center">
                                <span className="text-lg md:text-xl font-medium">${myorder.totalPrice}</span>
                                <Link 
                                    className="hover:scale-105 ease-linear duration-100 hover:translate-x-0.5"
                                    href={`/my-orders/${index}`} ><IconChevronRight /></Link>
                            </p>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default MyOrdersList;
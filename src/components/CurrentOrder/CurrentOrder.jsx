'use client'
import { ProductsContext } from "@/context";
import Image from "next/image";
import React from "react";

function CurrentOrder({id}) {
    const { myOrders } = React.useContext(ProductsContext)
    const currentOrder = myOrders[id]?.products

    return (
        <div className="w-96 flex flex-col gap-4">
            {currentOrder &&
                currentOrder.map((order) => {
                    return (
                        <div className="w-full gap-2 flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <figure className=" drop-shadow-md w-20 h-20 rounded-2xl overflow-hidden">
                                    <Image className="object-cover" src={order.images[0]} width="640" height="640" alt={order.title} />
                                </figure>
                                <p className="text-sm font-light">{order.title}</p>
                            </div>
                            <span className="font-medium text-lg">${order.price}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CurrentOrder;
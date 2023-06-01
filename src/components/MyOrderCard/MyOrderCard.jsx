"use client";
import { ProductsContext } from "@/context";
import { IconMinus } from "@/icons/Icons";
import Image from "next/image";
import React from "react";


function MyOrderCard({ title, price, images, id }) {
    const { deleteOrder } = React.useContext(ProductsContext);

    return (
        <div className="justify-between px-5 w-full h-20 flex items-center gap-2">
            <div className="flex gap-4">
                <figure className="drop-shadow-md h-20 w-20 rounded-2xl overflow-hidden">
                    <Image
                        className="object-cover w-full h-full"
                        src={images}
                        width="640"
                        height="640"
                        alt={title}
                    />
                </figure>
                <div className="flex gap-1 flex-col">
                    <p className="text-sm font-light">{title}</p>
                    <p className="font-semibold text-lg">${price}</p>
                </div>
            </div>
            <span
                onClick={() => deleteOrder(id)}
                className="hover:scale-110 ease-linear duration-100 cursor-pointer hover:bg-yellow-950  hover:text-white w-8 h-8 grid place-content-center rounded-full"
            >
                <IconMinus />
            </span>
        </div>
    );
}

export default MyOrderCard;

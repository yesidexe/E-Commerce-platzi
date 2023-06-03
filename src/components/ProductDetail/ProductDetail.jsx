'use client'

import { ProductsContext } from "@/context";
import { IconXMark } from "@/icons/Icons";
import Image from "next/image";
import React from "react";

function ProductDetail() {
    const { showDetail, setShowDetail, productDetail } = React.useContext(ProductsContext)

    return (
        <>
            {showDetail && 
                <aside
                    className="flex drop-shadow-md items-center gap-5 bg-white py-8 h-[calc(100vh-64px)] w-80 flex-col border-l fixed right-0">
                    <div className="w-full px-5 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Product detail</h2>
                        <span
                            className="hover:scale-110 ease-linear duration-100 cursor-pointer hover:bg-yellow-300 w-8 h-8 grid place-content-center rounded-full"
                            onClick={() => setShowDetail(false)}>
                            <IconXMark w={5} h={5} />
                        </span>
                    </div>
                    <figure className="drop-shadow-lg rounded-2xl w-72 h-64 overflow-hidden">
                        <Image
                            className="object-cover w-full h-full"
                            src={productDetail.images[0]}
                            width="640"
                            height="640"
                            alt={productDetail.title} />
                    </figure>
                    <p className="overflow-auto w-full px-5 flex flex-col">
                        <span className="text-2xl font-medium">${productDetail.price}</span>
                        <span className="font-medium text-lg">{productDetail.title}</span>
                        <span className="font-light text-sm">{productDetail.description}</span>
                    </p>
                </aside>
            }
        </>
    );
}

export default ProductDetail;
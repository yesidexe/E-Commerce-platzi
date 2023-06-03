'use client'
import React from "react";
import { ProductsContext } from "@/context";
import Card from "../Card/Card";
import { IconLoading } from "@/icons/Icons";

function ProductCard() {
    const { status, filteredData } = React.useContext(ProductsContext)

    const renderProducts = () => {
        if (filteredData?.length > 0) {
            return (
                <div className="sm:gap-x-0 justify-items-center px-5 grid gap-6 md:gap-8 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] sm:w-[640px] md:w-[750px] lg:w-[1024px] m-auto">
                    {filteredData?.slice(0, 60).map((dat) => {
                        return (
                            <Card datos={dat} key={dat.id} images={dat.images[0]}
                                category={dat.category.name}
                                title={dat.title} price={dat.price}
                            />
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="h-full w-[90%] sm:w-[640px] md:w-[750px] lg:w-[1024px]">
                    <p className="font-light text-black/30">No se encontraron resultados :(</p>
                </div>
            )
        }

    }

    return (
        <>
            {status === 'loading' &&
                <div className="w-full flex justify-center items-center">
                    <div className="animate-spin text-black/40">
                        <IconLoading w={7} h={7} />
                    </div>
                </div>
            }

            {status === 'error' && <p>error...</p>}

            {status === 'success' &&
                renderProducts()
            }

        </>

    );
}

export default ProductCard;
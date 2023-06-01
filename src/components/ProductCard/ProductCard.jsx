'use client'

import React from "react";
import { ProductsContext } from "@/context";
import Card from "../Card/Card";

function ProductCard() {
    const { data, status, searchProduct } = React.useContext(ProductsContext)

    return (
        <div className="grid gap-8 grid-cols-4 w-[640px] md:w-[768px] lg:w-[1024px] m-auto">
            {status === 'loading' && <p>loading...</p>}
            {status === 'error' && <p>error...</p>}
            {status === 'success' &&
                searchProduct.slice(0,60).map((dat) => {
                    return (
                        <Card 
                            datos={dat}
                            key={dat.id} 
                            images={dat.images[0]} 
                            category={dat.category.name}
                            title={dat.title}
                            price={dat.price}
                        />
                    )
                })
            }
        </div>
    );
}

export default ProductCard;
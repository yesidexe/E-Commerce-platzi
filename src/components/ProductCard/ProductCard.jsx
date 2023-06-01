'use client'

import React from "react";
import { ProductsContext } from "@/context";
import Card from "../Card/Card";

function ProductCard() {
    const { data, status } = React.useContext(ProductsContext)

    return (
        <div className="grid gap-8 grid-cols-4 w-[640px] md:w-[768px] lg:w-[1024px] m-auto">
            {status === 'loading' && <p>loading...</p>}
            {status === 'success' &&
                data.slice(0,20).map((dat) => {
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
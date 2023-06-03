'use client'

import { ProductsContext } from "@/context";
import React from "react";

function SearchProduct() {
    const {searchTerm, setSearchTerm} = React.useContext(ProductsContext)
    
    return (
        <div className="my-7 flex flex-col items-center gap-3">
            <label className="text-xl md:text-2xl lg:text-3xl font-semibold">Search Products</label>
            <input
                className="border w-60 md:w-72 lg:w-80 md:h-12 lg:h-14 rounded-2xl outline-none px-5 py-2" 
                type="search"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Search a product"/>
        </div>    
    );
}

export default SearchProduct;
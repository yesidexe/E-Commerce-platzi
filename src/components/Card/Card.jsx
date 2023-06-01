import Image from "next/image";
import React from "react";
import { ProductsContext } from "@/context";
import CardIconChecked from "../CardIconChecked/CardIconChecked";

function Card({images,category,title,price,datos}) {
    const {setProductDetail, setShowDetail} = React.useContext(ProductsContext)

    const handleOnClick = (datos) =>{
        setProductDetail(datos)
        setShowDetail(true)        
    }

    return (
        <div className="cursor-pointer bg-yellow-50 w-56 h-60 rounded-2xl overflow-hidden drop-shadow-md"
            onClick={() => handleOnClick(datos)}>
            <figure className="relative h-4/5 w-full overflow-hidden rounded-2xl drop-shadow-md">
                <CardIconChecked datos={datos}/>
                <span className="bg-yellow-300/60 px-2 rounded-lg bottom-0 left-0 m-2 text-xs absolute font-medium">{category}</span>
                <Image className="object-cover w-full h-full" src={images} width="640" height="640" alt={title} />
            </figure>
            <p className="flex items-center justify-between px-3 h-1/5">
                <span className="text-sm text-black/80">{title}</span>
                <span className="font-semibold text-xl">${price}</span>
            </p>
        </div>
    );
}

export default Card;
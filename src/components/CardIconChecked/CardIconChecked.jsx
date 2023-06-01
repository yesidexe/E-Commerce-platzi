'use client'

import { ProductsContext } from "@/context"
import React from "react"

//Icons
const IconPlus = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}

const IconCheck = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    )
}

function CardIconChecked({ datos }) {
    const { myOrder, setMyOrder,deleteOrder} = React.useContext(ProductsContext)
    const isInMyOrder = myOrder.filter(order => order.id === datos.id)

    const handleMyOrder = (e, datos) => {
        e.stopPropagation()
        const newOrder = [...myOrder]
        setMyOrder([...newOrder, datos])
    }

    const handleCheck = (e,datos)=>{
        e.stopPropagation()
        deleteOrder(datos.id)
    }

    return (
        isInMyOrder.length > 0 ?
            <span
                onClick={(e) => handleCheck(e,datos)}
                className="bg-yellow-300 drop-shadow-md absolute m-3 right-0 top-0 w-7 h-7 grid place-content-center rounded-full">
                <IconCheck />
            </span>
            :
            <span
                onClick={(e) => handleMyOrder(e, datos)}
                className="hover:scale-110 ease-linear duration-100 hover:bg-yellow-300 drop-shadow-md absolute m-3 right-0 top-0 w-7 h-7 bg-yellow-50 grid place-content-center rounded-full">
                <IconPlus />
            </span>

    );
}

export default CardIconChecked;
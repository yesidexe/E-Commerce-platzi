'use client'

import React from "react";

const ProductsContext = React.createContext();

function ProductsProvider({ children }) {
    const [data, setData] = React.useState(null)
    const [status, setStatus] = React.useState('idle')
    const [showDetail, setShowDetail] = React.useState(false)
    const [showMyOrder, setShowMyOrder] = React.useState(false)
    const [productDetail, setProductDetail] = React.useState({})
    const [myOrder, setMyOrder] = React.useState([])
    const [myOrders, setMyOrders] = React.useState([])

    //INICIO DEL DATA FETCHING
    const API = 'https://api.escuelajs.co/api/v1/products'
    React.useEffect(() => {
        const abortController = new AbortController();
        setStatus('loading')

        const dataFetching = async () => {
            try {
                const res = await fetch(API, { signal: abortController.signal, cache:'no-store'})
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                    setStatus('success')
                } else {
                    setStatus('error')
                    throw new Error('Algo salió mal');
                }
            } catch (error) {
                console.log("Error: ", error)
                setStatus('error')
            }
        }

        dataFetching();

        return () => abortController.abort();
    }, [])
    //FIN DEL DATA FETCHING

    /* FUNCION DE BORRAR UN ELEMENTO DE MYORDER */
    const deleteOrder = (id) => {
        setMyOrder(myOrder.filter(order => order.id !== id))
    }

    //FUNCION PARA SUMAR LOS PRECIOS
    const totalPricesOrder = (myorder) => {
        return myorder.reduce((sum, order) => sum + order.price, 0)
    }

    return (
        <ProductsContext.Provider value={{
            data,
            status,
            showDetail,
            setShowDetail,
            productDetail,
            setProductDetail,
            showMyOrder,
            setShowMyOrder,
            myOrder,
            setMyOrder,
            deleteOrder,
            totalPricesOrder,
            myOrders,
            setMyOrders,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider }
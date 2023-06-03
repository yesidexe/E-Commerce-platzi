'use client'

import { useRouter } from "next/router";
import React from "react";

const ProductsContext = React.createContext();

function ProductsProvider({ children }) {
    const [data, setData] = React.useState([])
    const [status, setStatus] = React.useState('idle')
    const [showDetail, setShowDetail] = React.useState(false)
    const [showMyOrder, setShowMyOrder] = React.useState(false)
    const [productDetail, setProductDetail] = React.useState({})
    const [myOrder, setMyOrder] = React.useState([])
    const [myOrders, setMyOrders] = React.useState([])

    const [searchTerm, setSearchTerm] = React.useState('')
    const [searchCategory, setSearchCategory] = React.useState('')

    const [filteredData, setFilteredData] = React.useState([])

    const [showMenu, setShowMenu] = React.useState(false)

    //INICIO DEL DATA FETCHING
    const API = 'https://api.escuelajs.co/api/v1/products'
    React.useEffect(() => {
        const abortController = new AbortController();
        setStatus('loading')

        const dataFetching = async () => {
            try {
                const res = await fetch(API, { signal: abortController.signal, cache: 'no-store' })
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

    //FUNCION DE BUSQUEDA Y CATEGORIA
    const searchData = (data, searchTerm) => {
        return data?.filter((dat) => dat.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    const searchByCategory = (data, searchCategory) => {
        return data?.filter((dat) => dat.category.name.toLowerCase().includes(searchCategory.toLowerCase()))
    }

    React.useEffect(() => {
        if (searchTerm && !searchCategory) setFilteredData(searchData(data, searchTerm))
        if (!searchTerm && searchCategory) setFilteredData(searchByCategory(data, searchCategory))
        if (searchTerm && searchCategory) setFilteredData(searchByCategory(data, searchCategory).filter((dat) => dat.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())))
        if (!searchTerm && !searchCategory) setFilteredData(data)
    }, [data, searchTerm, searchCategory])

    //FILTRAR POR CATEGORIA
    //dat.category.name.toLowerCase().includes(filterCategory)
    /*const searchCategory = data.filter((dat)=>{
        return dat.category.name.toLowerCase().includes(filterCategory)
    })*/

    return (
        <ProductsContext.Provider value={{
            showMenu,
            setShowMenu,
            searchCategory,
            setSearchCategory,
            searchTerm,
            setSearchTerm,
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
            filteredData,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider }
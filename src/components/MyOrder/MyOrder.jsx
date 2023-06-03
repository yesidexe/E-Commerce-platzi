'use client'
import { ProductsContext } from "@/context";
import MyOrderCard from "../MyOrderCard/MyOrderCard";
import React from "react";
import Link from "next/link";
import { IconXMark } from "@/icons/Icons";

const currentDate = new Date();
const day = currentDate.getDate()
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

function MyOrder() {
    const { showMyOrder,
        setShowMyOrder,
        myOrder,
        setMyOrder,
        totalPricesOrder,
        myOrders,
        setMyOrders } = React.useContext(ProductsContext)

    const handleCheckout = () => {
        const orderToAdd = {
            date: `${day}.${month}.${year}`,
            products: myOrder,
            totalProducts: myOrder.length,
            totalPrice: totalPricesOrder(myOrder),
        }

        setMyOrders([...myOrders, orderToAdd])
        setMyOrder([])
        setShowMyOrder(false)
    }

    return (
        <>
            {showMyOrder &&
                <aside className="gap-5 z-10 justify-between flex drop-shadow-md bg-white py-8 h-[calc(100vh-64px)] w-96 flex-col border-l fixed right-0">
                    <div className="px-5 w-full flex justify-between items-center">
                        <h2 className="text-xl font-semibold">My order</h2>
                        <span
                            className="hover:scale-110 ease-linear duration-100 cursor-pointer hover:bg-yellow-300 w-8 h-8 grid place-content-center rounded-full"
                            onClick={() => setShowMyOrder(false)}>
                            <IconXMark w={5} h={5}/>
                        </span>
                    </div>
                    <div className="flex-1 w-full flex flex-col gap-4 overflow-auto">
                        {myOrder &&
                            myOrder.map((order) => {
                                return <MyOrderCard
                                    key={order.id}
                                    title={order.title}
                                    price={order.price}
                                    images={order.images[0]}
                                    id={order.id}
                                />
                            })
                        }
                    </div>
                    <div className="px-5 w-full flex flex-col gap-3">
                        <p className="flex justify-between items-center">
                            <span className="text-lg font-semibold">Total:</span>
                            <span className="text-xl font-semibold">$ {totalPricesOrder(myOrder)}</span>
                        </p>
                        <Link
                            onClick={handleCheckout}
                            className="grid place-content-center drop-shadow-md bg-yellow-300 rounded-2xl h-12 font-semibold text-lg hover:bg-yellow-950 hover:text-white ease-linear duration-200 w-full"
                            href='/my-orders'>
                            Checkout
                        </Link>
                    </div>
                </aside>
            }
        </>


    );
}

export default MyOrder;
import CurrentOrder from "@/components/CurrentOrder/CurrentOrder";
import { IconChevronLeft } from '@/icons/Icons'
import Link from "next/link";

function Order({ params }) {
    const { id } = params

    return (
        <div className="mt-12 md:mt-14 lg:mt-16 w-full flex flex-col items-center h-[82vh]">
            <div className="w-72 md:w-96 my-7 flex items-center">
                <Link 
                    className="hover:scale-105 ease-linear duration-100 hover:-translate-x-0.5"
                    href={'/my-orders'}>
                    <IconChevronLeft/>
                </Link>
                <h2 className="text-center flex-1 font-medium text-lg">My Order</h2>
            </div>
            <CurrentOrder id={id} />
        </div>
    );
}

export default Order;
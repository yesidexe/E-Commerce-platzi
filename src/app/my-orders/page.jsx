import MyOrdersList from "@/components/MyOrdersList/MyOrdersList";

function MyOrders() {
    return ( 
        <div className="mt-16 w-full flex flex-col items-center h-[calc(100vh-50px)]">            
            <h2 className="my-7 w-80 font-medium text-xl text-center">My Orders</h2>
            <MyOrdersList/>
        </div>        
    );
}

export default MyOrders;
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import SearchProduct from "@/components/SearchProduct/SearchProduct";

function Toys() {
    return ( 
        <main className="flex flex-col items-center mt-16">
            <SearchProduct />
            <ProductCard/>
            <ProductDetail />
        </main>
    );
}

export default Toys;
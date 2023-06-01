import SearchProduct from "@/components/SearchProduct/SearchProduct";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductDetail from "@/components/ProductDetail/ProductDetail";


export default function Home() {
  
  return (
    <main className="flex flex-col items-center mt-16">
      <SearchProduct/>
      <ProductCard/>   
      <ProductDetail/>   
    </main>
  )
}

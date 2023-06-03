import SearchProduct from "@/components/SearchProduct/SearchProduct";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductDetail from "@/components/ProductDetail/ProductDetail";


export default function Home() {
  
  return (
    <main className="flex flex-col items-center md:mt-14 lg:mt-16 mt-12">
      <SearchProduct/>
      <ProductCard/>   
      <ProductDetail/>   
    </main>
  )
}

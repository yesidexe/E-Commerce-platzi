function SearchProduct() {
    return (
        <div className="my-7 flex flex-col items-center gap-3">
            <label className="text-3xl font-semibold">Search Products</label>
            <input 
                className="border w-80 h-14 rounded-2xl outline-none px-5 py-2" 
                type="search"
                placeholder="Search a product"/>
        </div>    
    );
}

export default SearchProduct;
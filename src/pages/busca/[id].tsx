import { useRouter } from "next/router"
import { products } from "@/src/db/products"
import Header from "@/src/components/header/Header"
import Search from "@/src/components/search/Search"
import { useContext, useEffect, useState } from "react"
import { SearchContainer } from "@/src/styles/pages/search"
import { SearchContext } from "@/src/contexts/SearchContext"
import Products from "@/src/components/products/Products"



export default function SearchPage() {
    const router = useRouter()
    const { id } = router.query
    const { filtredList, handleSetFiltredList } = useContext(SearchContext)



    useEffect(() => {
        function handleSearchList() {
            if (typeof id === 'string') {

                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(id.toLocaleLowerCase()) ||
                    product.description.toLowerCase().includes(id.toLocaleLowerCase()) ||
                    product.type.toLowerCase().includes(id.toLocaleLowerCase())
                );
                handleSetFiltredList(filteredProducts)
                console.log(filteredProducts)
            }
        }
        handleSearchList()
        console.log(filtredList)
    }, [id])



    return (
        <>
            <Header />
            <Search />
            <SearchContainer>
                {filtredList.map((product) => {
                    return (
                        <Products product={product} key={product.id} />
                    )
                })}
            </SearchContainer>
        </>
    )
}


import { useRouter } from "next/router"
import { products } from "@/src/db/products"
import Image from "next/image"
import Header from "@/src/components/header/Header"
import Search from "@/src/components/search/Search"
import { ProductContainer, ProductContent } from "@/src/styles/pages/product"
import { ShoppingCart } from 'phosphor-react'
import { useContext } from "react"
import { CartContext } from "@/src/contexts/CartContext"
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Product() {
    const { cartList, addProductToCart } = useContext(CartContext)
    const { query } = useRouter()
    const product = products.find(product => product.id === query.id)

    function handleAddProductToCart() {
        if (product) addProductToCart(product)
        console.log(cartList)
        toast.success('Item adionado no carrinho',{
            theme: 'colored',
            position: "top-center",
        });
    }

    return (
        <>

            {product !== undefined ? (
                <>
                   
                    <Header />
                    <Search />
                    <ProductContainer key={product.id}>
                    <ToastContainer/>
                        <h2>{product.name}</h2>
                        <ProductContent>
                            <Image src={`/${product.image}`} width={320} height={240} alt='' />
                            {product.promotionPrice < product.price ?
                                (
                                    <div>
                                        <s>{`R$ ${product.price.toLocaleString()},00`}</s>
                                        <span>{`R$ ${product.promotionPrice.toLocaleString()},00`} </span>
                                        <p>{`ou 10x de R$ ${String(((product.promotionPrice / 10) + (1 * product.price) / 100).toFixed(2)).replace(/\./g, ',')}`}</p>
                                        <button onClick={handleAddProductToCart}>COMPRAR <ShoppingCart size={20} weight='bold' /></button>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <span>{`R$ ${String(product.price)},00`}</span>
                                        <p>{` ou 10x de R$ ${String(((product.price / 10) + (1 * product.price) / 100).toFixed(2)).replace(/\./g, ',')}`}</p>
                                        <button onClick={handleAddProductToCart}>COMPRAR <ShoppingCart size={20} weight='bold' /></button>
                                    </div>

                                )}

                        </ProductContent>

                    </ProductContainer>
                </>
            )
                :
                (
                    <></>
                )}

        </>
    )
}


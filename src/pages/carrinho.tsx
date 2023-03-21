import Header from "../components/header/Header"
import Search from "../components/search/Search"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import Image from "next/image"
import { CartContainer, CartProduct, NotEmptyCart, NumberOfProducts } from "../styles/pages/cart"
import { CaretRight, CaretCircleLeft, CaretCircleRight } from 'phosphor-react'
export default function Cart() {
    const { cartList, addProductToCart } = useContext(CartContext)
    return (
        <>
            <Header />
            <Search />
            <CartContainer>
                {cartList.length > 0 ?
                    (
                        <NotEmptyCart>
                            {cartList.map(product => {
                                return (
                                    <CartProduct key={product.id}>
                                        <div>
                                            <Image src={`/${product.image}`} width={128} height={128} alt='' />
                                            <p>{product.name}</p>
                                        </div>
                                        <NumberOfProducts>
                                            <CaretCircleLeft />
                                            <p>0</p>
                                            <CaretCircleRight />
                                        </NumberOfProducts>
                                        <div>
                                            <span>

                                                <s>{`R$ ${String(product.price)},00`}</s>
                                                <p> por </p>
                                                {`R$ ${String(product.promotionPrice)},00`}
                                            </span>
                                            <p>{`ou 10x de R$ ${String(((product.promotionPrice / 10) + (1 * product.promotionPrice) / 100).toFixed(2)).replace(/\./g, ',')}`}</p>
                                        </div>
                                    </CartProduct>
                                )
                            })}
                        </NotEmptyCart>
                    )
                    :
                    (
                        <h1>Seu carrinho está vazio</h1>
                    )}
            </CartContainer>

        </>
    )
}
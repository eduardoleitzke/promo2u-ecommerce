import { stringify } from "querystring";
import { createContext, ReactNode, useEffect, useState } from "react";
import { IProductProps } from "../@types/props";
interface ICartContextProviderProps {
    children: ReactNode
}

interface verifyTokenContextType {
    cartList: IProductProps[]
    addProductToCart: (product: IProductProps) => void
}

export const CartContext = createContext({} as verifyTokenContextType)

export function CartContextProvider({ children }: ICartContextProviderProps) {
  
    const [cartList, setCartList] = useState([] as IProductProps[])

    useEffect(()=>{
        let storedCartItens = null;
        if (typeof window !== "undefined" && window.localStorage.getItem('cart-promou2-v1.0')) {
            storedCartItens = window.localStorage.getItem("cart-promou2-v1.0");
            if(storedCartItens !== null){
                setCartList(JSON.parse(storedCartItens))
            }
        }
    }, [])

    function addProductToCart(cartProduct: IProductProps) {
       const cartListUpdated = cartList.concat(cartProduct)
       setCartList(cartListUpdated)
        localStorage.setItem('cart-promou2-v1.0', JSON.stringify(cartListUpdated))
    }

    return (
        <CartContext.Provider value={{ cartList, addProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}
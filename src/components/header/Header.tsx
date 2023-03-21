
import Image from 'next/image'
import { User } from 'phosphor-react'
import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/src/contexts/CartContext'
export default function Header() {
    const { cartList } = useContext(CartContext)
    const [cartLength, setCartLength] = useState(0)

    useEffect(()=>{
        if(cartList.length> 0) setCartLength(cartList.length)
    },[cartList])

    return (
        <HeaderContainer>
            <Image src="/logo.png" width={216} height={46} alt="" />
            <nav>
                <a><User size={32} weight="bold" /></a>
                <Link href='/carrinho'>
                    <ShoppingCart size={32} weight="bold" />
                    {cartLength>0 && (
                         <p>{cartList.length}</p>
                    )}
                   
                    </Link>
            </nav>
        </HeaderContainer>
    )
}
import { styled } from "..";
export const CartContainer = styled('div',{
    display: 'flex',
    
    justifyContent:'center',
    alignItems: 'center',
    height: 'calc(100vh - 8rem)',

})
export const NotEmptyCart = styled('div',{
    backgroundColor: '#d4b4c3',
    padding: '2.5rem',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '5rem'
})

export const CartProduct = styled('div',{
    display: 'flex',
    justifyContent: 'space-between'

    
})

export const NumberOfProducts = styled('div',{
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem'
})
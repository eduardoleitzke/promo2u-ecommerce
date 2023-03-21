import { styled } from "@/src/styles";

export const ProductContainer = styled('a', {
    width: '20rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    color:'Black',
    textDecoration: 'none',
    gap: '1rem',
    img:{
        width: '90%',
        heigth: '10rem',

    },

    p:{
        fontSize: '1.2rem'
    },

    span:{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        p:{
            display:'inline',
            fontWeight: '400,'
        }
    }
})
import { styled } from "@/src/styles";

export const SearchInput = styled('div', {
    
    position: 'absolute',
    right: 'calc(50% - 15rem)',
    top: '2rem',

    input:{
        padding: '1rem',
        borderRadius: '5px',
        border: '1px solid black',
        width: '30rem',
        position: 'relative',
        fontWeight: 'bold'
    },

    svg:{
        position: "relative",
        top: 'calc(2rem - 26px)',
        right: '3rem'
       
    }
    

})
import { styled } from "..";

export const ProductContainer = styled('div',{
    width: '100%',
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    h2:{
        color: '#2b2424',
        letterSpacing: '0.5px'
    }
})

export const ProductContent = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: '10rem',

    div:{
        display: 'flex',
        flexDirection: 'column'
    },
    
    s:{
        display: 'block',
    },
    span:{
        fontSize: '2.5rem',
        color: '#2b2424',
        fontWeight: 'bold'
    },

    button: {
       cursor: 'pointer',
        borderRadius: '5px',
        padding: '1rem',
        backgroundColor: '#2b3024',
        color: '#fff',
        marginTop: '5rem',
        fontWeight: 'bold',
        position: 'relative',
        border:  'none',
        display: 'flex',
        justifyContent: 'space-between',
        '&:hover':{
            transition: '0.1s',
            boxShadow: '0 0 0.5em black'
        },

    }
})
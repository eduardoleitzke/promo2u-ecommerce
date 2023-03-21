import { inherits } from "util";
import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
    width: '100%',
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
  



    nav: {
        display: 'flex',
        gap: '1rem',
        marginRight: '4rem',    
    },

    a:{
        cursor: 'pointer',
        padding: '0.5rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid transparent',
        color: 'inherit',
        textDecoration: 'none',
        position: 'relative',
        
        p:{
            position: 'absolute',
            top: '2.2rem',
            left: '2rem',
           
            
            borderBottom: '2px solid black',
            fontWeight: 'bold'
        },
        
    }
})
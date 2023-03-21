import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding:0,
        boxSizing: 'border-box'
    },

    body: {
        '-webkit-font-smoothing' : 'antialiased',
        background: '#fff',
        height: '100vh',
        overflow: 'scroll',
     
    },

    'body, input, textarea, button':{
        fontFamily: 'Roboto Condensed',
        fontWeight: 400
    }
})
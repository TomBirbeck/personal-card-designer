import { createContext } from "react";

const cardDesignContext = createContext<[{
    layout: number,
    height: number,
    width: number,
    font: string,
    fontSize: number,
    textAlign: string,
    border: boolean,
    borderStyle: string,
    borderWidth: number,
    borderRadius: number,
    borderColor: string,
}, 
    (properties: {
        layout: number,
        height: number,
        width: number,
        font: string,
        fontSize: number,
        textAlign: string,
        border: boolean,
        borderStyle: string,
        borderWidth: number,
        borderRadius: number,
        borderColor: string,
    }) => void ]>([{
        layout : 1,
        height: 150,
        width: 300,
        font: 'sans-serif',
        fontSize: 16,
        textAlign: 'left' ,
        border: false,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 0,
        borderColor: 'red',

}, () => {}])
export default cardDesignContext
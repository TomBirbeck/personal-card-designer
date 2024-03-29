import { createContext } from "react";

const cardDesignContext = createContext<[{
    layout: number,
    height: number,
    width: number,
    font: string,
    fontColor: string,
    fontSize: number,
    fontWeight: number,
    textAlign: string,
    border: boolean,
    borderStyle: string,
    borderWidth: number,
    borderRadius: number,
    borderColor: string,
    backgroundStyle: string,
    backgroundColorOne: string,
    backgroundColorTwo: string,
    imageUrl: string,
}, 
    (properties: {
        layout: number,
        height: number,
        width: number,
        font: string,
        fontColor: string,
        fontSize: number,
        fontWeight: number,
        textAlign: string,
        border: boolean,
        borderStyle: string,
        borderWidth: number,
        borderRadius: number,
        borderColor: string,
        backgroundStyle: string,
        backgroundColorOne: string,
        backgroundColorTwo: string,
        imageUrl: string,
    }) => void ]>([{
        layout : 1,
        height: 150,
        width: 300,
        font: 'sans-serif',
        fontColor: 'black',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'left' ,
        border: false,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 0,
        borderColor: 'red',
        backgroundStyle: 'solid',
        backgroundColorOne: '#FFFFFF',
        backgroundColorTwo: '',
        imageUrl: '',
        
}, () => {}])
export default cardDesignContext
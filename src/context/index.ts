import { createContext } from "react";

const cardDesignContext = createContext<[{layout: number, height: number, width: number, font: string, fontSize: number, textAlign: string}, 
    (properties: {layout: number, height: number, width: number, font: string, fontSize: number, textAlign: string}) => void ]>([{
        layout : 1,
        height: 150,
        width: 300,
        font: 'sans-serif',
        fontSize: 16,
        textAlign: 'left' 
}, () => {}])
export default cardDesignContext
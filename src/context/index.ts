import { createContext } from "react";

// const cardDesignContext = createContext<[{}, (properties: {}) => void ]>([{}, () => {}])
const cardDesignContext = createContext<[{}, (cardDesign: {}) => void]>([{}, () => {}])


export default cardDesignContext
import { useContext, useEffect, useState} from "react"
import cardDesignContext from "../../context"

const Card = () => {
    const props= useContext(cardDesignContext)
    const {height, width, font, fontSize, textAlign, border, borderStyle, borderWidth, borderRadius, borderColor} = props[0]
    const [borderType, setBorderType] = useState('')

    useEffect(() => {
        if (border) {
            setBorderType(`${borderStyle} ${borderWidth}px ${borderColor}`)
        } else {
            setBorderType('none')
        }

    }, [border, borderColor, borderStyle, borderWidth])

    console.log({textAlign})
    return (
        <div className="card"
        style={{
            padding: '0.5rem',
            height: `${height}px`,
            width : `${width}px`,
            fontFamily: `${font}`,
            fontSize: `${fontSize}px`,
            textAlign: `left`,
            backgroundColor: 'red',
            border: `${borderType}`,
            borderRadius: `${borderRadius}rem`
        }}
        >
            <h3>Card</h3>
        </div>
    )
}

export default Card
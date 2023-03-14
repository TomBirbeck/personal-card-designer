import './Card.css'
import { useContext, useEffect, useState} from "react"
import cardDesignContext from "../../context"

const Card = () => {
    const props= useContext(cardDesignContext)
    const {
        height,
        width,
        font,
        fontColor,
        fontSize,
        textAlign,
        border,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        backgroundStyle,
        backgroundColorOne,
        backgroundColorTwo,
    } = props[0]
    const [borderType, setBorderType] = useState('')
    const [styles, setStyles] = useState({
        padding: '0.5rem',
        height: `${height}px`,
        width : `${width}px`,
        fontFamily: `${font}`,
        fontSize: `${fontSize}px`,
        color: `${fontColor}`,
        TextAlign: `${textAlign}`,
        border: `${borderType}`,
        borderRadius: `${borderRadius}rem`,
        backgroundColor: `${backgroundColorOne}`,
        backgroundImage: `linear-gradient(${backgroundColorOne}, ${backgroundColorTwo})`,
    })

    useEffect(() => {
        if (border) {
            setBorderType(`${borderStyle} ${borderWidth}px ${borderColor}`)
        } else {
            setBorderType('none')
        }

    }, [border, borderColor, borderStyle, borderWidth])

    useEffect(() => {
        if (backgroundStyle === 'solid') {
            setStyles({...styles,
            height: `${height}px`,
            width : `${width}px`,
            fontFamily: `${font}`,
            color: `${fontColor}`,
            fontSize: `${fontSize}px`,
            TextAlign: `${textAlign}`,
            border: `${borderType}`,
            borderRadius: `${borderRadius}rem`,
            backgroundColor: `${backgroundColorOne}`,
            backgroundImage: `none`,
            })
        } else if (backgroundStyle === 'gradTop'){
            setStyles({...styles,
                height: `${height}px`,
                width : `${width}px`,
                fontFamily: `${font}`,
                color: `${fontColor}`,
                fontSize: `${fontSize}px`,
                TextAlign: `${textAlign}`,
                border: `${borderType}`,
                borderRadius: `${borderRadius}rem`,
                backgroundColor: `${backgroundColorOne}`,
                backgroundImage: `linear-gradient(${backgroundColorOne}, ${backgroundColorTwo})`,
        })} else if (backgroundStyle === 'gradLeft') {
            setStyles({...styles,
                height: `${height}px`,
                width : `${width}px`,
                fontFamily: `${font}`,
                color: `${fontColor}`,
                fontSize: `${fontSize}px`,
                TextAlign: `${textAlign}`,
                border: `${borderType}`,
                borderRadius: `${borderRadius}rem`,
                backgroundColor: `${backgroundColorOne}`,
                backgroundImage: `linear-gradient(to right,${backgroundColorOne}, ${backgroundColorTwo})`,
        })}
    }, [backgroundColorOne, height, width, font, fontSize, textAlign, borderType, borderRadius, backgroundColorTwo, backgroundStyle, fontColor, styles])

    // console.log({textAlign, backgroundStyle})
    return (
        <div className="card"
        style={styles}
        >
            <h3 style={{gridArea: 'zone2'}}>Jimmy Jones</h3>
            <p style={{gridArea: 'zone3'}}>tagline</p>
            <img style={{gridArea: 'zone1'}} src="" alt="image"/> 
        </div>
    )
}

export default Card
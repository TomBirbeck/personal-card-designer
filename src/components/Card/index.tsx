import './Card.css'
import { useContext, useEffect, useState} from "react"
import cardDesignContext from "../../context"
import fox from '../../assets/fox.jpg'
import { CardIProps } from '../../types'


const Card = ({name, tagline, cardRef}: CardIProps) => {
    const props= useContext(cardDesignContext)
    const {
        layout,
        height,
        width,
        font,
        fontColor,
        fontSize,
        fontWeight,
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
        layout: 2,
        padding: '0.5rem',
        height: `${height}px`,
        width : `${width}px`,
        fontFamily: `${font}`,
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
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
            fontWeight: `${fontWeight}`,
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
                fontWeight: `${fontWeight}`,
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
                fontWeight: `${fontWeight}`,
                color: `${fontColor}`,
                fontSize: `${fontSize}px`,
                TextAlign: `${textAlign}`,
                border: `${borderType}`,
                borderRadius: `${borderRadius}rem`,
                backgroundColor: `${backgroundColorOne}`,
                backgroundImage: `linear-gradient(to right,${backgroundColorOne}, ${backgroundColorTwo})`,
        })}
    }, [backgroundColorOne, height, width, font, fontSize, fontWeight, textAlign, borderType, borderRadius, backgroundColorTwo, backgroundStyle, fontColor])

    return (
        <div ref={cardRef}>
            {layout === 1?
            <div className="layout-one-card"
            style={styles}
            >
            <div className='layout-one-image-container'>
            <img className='layout-one-image' src={fox} alt=""/> 
            </div>
            <h3 className='layout-one-name'>{name}</h3>
            <p className='layout-one-tagline'>{tagline}</p>
             </div>   
            : layout === 2 ?
            <div className="layout-two-card"
            style={styles}>
            <div className='layout-two-image-container'>
            <img className='layout-two-image' src={fox} alt=""/> 
            </div>
            <h3 className='layout-two-name'>{name}</h3>
            <p className='layout-two-tagline'>{tagline}</p>
             </div>: layout === 3 ?
             <div className="layout-three-card"
             style={styles}>
             <div className='layout-three-image-container'>
             <img className='layout-three-image' src={fox} alt=""/> 
             </div>
             <h3 className='layout-three-name'>{name}</h3>
             <p className='layout-three-tagline'>{tagline}</p>
              </div> :
              <div className="layout-four-card"
              style={styles}>
              <div className='layout-four-image-container'>
              <img className='layout-four-image' src={fox} alt=""/> 
              </div>
              <h3 className='layout-four-name'>{name}</h3>
              <p className='layout-four-tagline'>{tagline}</p>
               </div>
             }   
        </div>
    )
}

export default Card
import './Card.css'
import { useContext, useEffect, useState} from "react"
import cardDesignContext from "../../context"
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
        imageUrl
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
        imageUrl: `${imageUrl}`
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
            imageUrl: `${imageUrl}`
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
                imageUrl: `${imageUrl}`
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
                imageUrl: `${imageUrl}`
            })}
    }, [backgroundColorOne, height, width, font, fontSize, fontWeight, textAlign, borderType, borderRadius, backgroundColorTwo, backgroundStyle, fontColor, imageUrl])

    return (
        <div ref={cardRef} data-testid='cardInContainer'>
            {layout === 1?
            <div className="layout-one-card"
            style={styles}
            >
            <div className='layout-one-image-container'style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <h3 className='layout-one-name'>{name}</h3>
            <p className='layout-one-tagline'>{tagline}</p>
             </div>   
            : layout === 2 ?
            <div className="layout-two-card"
            style={styles}>
            <div className='layout-two-image-container' style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <h3 className='layout-two-name'>{name}</h3>
            <p className='layout-two-tagline'>{tagline}</p>
             </div>: layout === 3 ?
             <div className="layout-three-card"
             style={styles}>
             <div className='layout-three-image-container' style={{backgroundImage: `url(${imageUrl})`}}>
             </div>
             <h3 className='layout-three-name'>{name}</h3>
             <p className='layout-three-tagline'>{tagline}</p>
              </div> :
              <div className="layout-four-card"
              style={styles}>
              <div className='layout-four-image-container' style={{backgroundImage: `url(${imageUrl})`}}>
              </div>
              <h3 className='layout-four-name'>{name}</h3>
              <p className='layout-four-tagline'>{tagline}</p>
               </div>
             }   
        </div>
    )
}

export default Card
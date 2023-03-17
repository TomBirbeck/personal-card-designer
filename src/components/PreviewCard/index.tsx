import './PreviewCard.css'
import fox from '../../../src/assets/fox.jpg'
import { PreviewCardContext } from '../../types'
import { useContext } from 'react'
import cardDesignContext from '../../context'


const PreviewCard = ({backgroundStyle, backgroundColorOne, backgroundColorTwo, border, borderStyle, borderRadius, borderWidth, borderColor, font, fontSize, fontColor, fontWeight} : PreviewCardContext) => {
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)
    
    const handleCardClick = () => {
        setCardProperties({...cardProperties, backgroundStyle: backgroundStyle, 
            backgroundColorOne: backgroundColorOne, 
            backgroundColorTwo: backgroundColorTwo,
            border: border,
            borderStyle: borderStyle || 'none',
            borderRadius: borderRadius || 0,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || '',
            font: font || 'sans-serif',
            fontSize: fontSize || 16,
            fontColor: fontColor || '#000000',
            fontWeight: fontWeight || 400
        })
    }

    return (
        <div className='preview-card-container'
        onClick={handleCardClick}
        >
        {backgroundStyle === 'solid' ?
        <div className="preview-card"
        style={{backgroundColor: `${backgroundColorOne}`, border: `${borderStyle}`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`, fontFamily: `${font}`, color: `${fontColor}`, fontWeight: `${fontWeight}`}}
        >
            <h3 className='preview-card-name'>Barry Jones</h3>
            <p className='preview-card-tagline'>Just testing things out mate</p>
            <div className='preview-card-image-container'>
            <img className='preview-card-image' src={fox} alt='profile pic'/>
            </div>
        </div>: backgroundStyle === 'gradTop' ?
        <div className="preview-card"
        style={{backgroundImage: `linear-gradient(${backgroundColorOne}, ${backgroundColorTwo})`,border: `${borderStyle}`, borderRadius: `${borderRadius}rem`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`,color: `${fontColor}`, fontFamily: `${font}`, fontWeight: `${fontWeight}`}}
        >
            <h3 className='preview-card-name'>Barry Jones</h3>
            <p className='preview-card-tagline'>Just testing things out mate</p>
            <div className='preview-card-image-container'>
            <img className='preview-card-image' src={fox} alt='profile pic'/>
            </div>
        </div>: backgroundStyle === 'gradLeft' ?
        <div className="preview-card"
        style={{backgroundImage: `linear-gradient(to right, ${backgroundColorOne}, ${backgroundColorTwo})`, borderRadius: `${borderRadius}rem`, border: `${borderStyle}`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`, color: `${fontColor}` ,fontFamily: `${font}`, fontWeight: `${fontWeight}`}}
        >
            <h3 className='preview-card-name'>Barry Jones</h3>
            <p className='preview-card-tagline'>Just testing things out mate</p>
            <div className='preview-card-image-container'>
            <img className='preview-card-image' src={fox} alt='profile pic'/>
            </div>
        </div> : null
        }
        </div>
    )
}


export default PreviewCard
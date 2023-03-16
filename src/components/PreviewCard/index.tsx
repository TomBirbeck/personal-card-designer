import './PreviewCard.css'
import fox from '../../../src/assets/fox.jpg'
import { PreviewCardContext } from '../../types'
import { useContext } from 'react'
import cardDesignContext from '../../context'


const PreviewCard = ({backgroundStyle, backgroundColorOne, backgroundColorTwo, borderStyle, borderRadius, borderWidth, borderColor, font, fontSize} : PreviewCardContext) => {
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)
    
    const handleCardClick = () => {
        setCardProperties({...cardProperties, backgroundStyle: backgroundStyle, 
            backgroundColorOne: backgroundColorOne, 
            backgroundColorTwo: backgroundColorTwo,
            borderStyle: borderStyle || 'none',
            borderRadius: borderRadius || 0,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || '',
            font: font || 'sans-serif',
            fontSize: fontSize || 16,
        })
    }

    console.log(cardProperties)

    return (
        <div className='preview-card-container'
        onClick={handleCardClick}
        >
        {backgroundStyle === 'solid' ?
        <div className="preview-card"
        style={{backgroundColor: `${backgroundColorOne}`, border: `${borderStyle}`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`}}
        >
            <h3 className='preview-card-name'>Barry Jones</h3>
            <p className='preview-card-tagline'>Just testing things out mate</p>
            <div className='preview-card-image-container'>
            <img className='preview-card-image' src={fox} alt='profile pic'/>
            </div>
        </div>: backgroundStyle === 'gradTop' ?
        <div className="preview-card"
        style={{backgroundImage: `linear-gradient(${backgroundColorOne}, ${backgroundColorTwo})`,border: `${borderStyle}`, borderRadius: `${borderRadius}rem`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`, fontFamily: `${font}`}}
        >
            <h3 className='preview-card-name'>Barry Jones</h3>
            <p className='preview-card-tagline'>Just testing things out mate</p>
            <div className='preview-card-image-container'>
            <img className='preview-card-image' src={fox} alt='profile pic'/>
            </div>
        </div>: backgroundStyle === 'gradLeft' ?
        <div className="preview-card"
        style={{backgroundImage: `linear-gradient(to right, ${backgroundColorOne}, ${backgroundColorTwo})`, borderRadius: `${borderRadius}rem`, border: `${borderStyle}`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`, fontFamily: `${font}`, fontSize: `${fontSize}px`}}
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
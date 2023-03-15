import './PreviewCard.css'
import fox from '../../../src/assets/fox.jpg'
import { PreviewCardContext } from '../../types'

// const person = {
//     backgroundStyle: 'gradleft',
//     backgroundColorOne: '#ffffff',
//     backgroundColorTwo: '#000000',
//     borderStyle: 'solid',
//     borderRadius: 0.5,
//     borderWidth: 2,
//     borderColor: '#000000'
// }


const PreviewCard = ({backgroundStyle, backgroundColorOne, backgroundColorTwo, borderStyle, borderRadius, borderWidth, borderColor} : PreviewCardContext) => {
    return (
        <div className='preview-card-container'
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
        style={{backgroundImage: `linear-gradient(${backgroundColorOne}, ${backgroundColorTwo})`,border: `${borderStyle}`, borderRadius: `${borderRadius}rem`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`}}
        >
            <h3 className='preview-card-name'>Barry Jones</h3>
            <p className='preview-card-tagline'>Just testing things out mate</p>
            <div className='preview-card-image-container'>
            <img className='preview-card-image' src={fox} alt='profile pic'/>
            </div>
        </div>: backgroundStyle === 'gradleft' ?
        <div className="preview-card"
        style={{backgroundImage: `linear-gradient(to right, ${backgroundColorOne}, ${backgroundColorTwo})`, borderRadius: `${borderRadius}rem`, border: `${borderStyle}`, borderWidth: `${borderWidth}px`, borderColor: `${borderColor}`}}
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
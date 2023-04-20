import PreviewCard from '../PreviewCard'
import './RightMenu.css'
import { people } from '../../utilities/sampleData'

const RightMenu = () => {
    const designs = people

    return (
        <div className='right-menu'>
            { designs.length > 1 &&
            designs.map((person) => { return (
                <PreviewCard 
                key={person.id}
                backgroundStyle={person.backgroundStyle}
                backgroundColorOne={person.backgroundColorOne}
                backgroundColorTwo={person.backgroundColorTwo}
                border={person.border}
                borderRadius={person.borderRadius}
                borderStyle={person.borderStyle}
                borderWidth={person.borderWidth}
                borderColor={person.borderColor}
                font={person.font}
                fontSize={person.fontSize}
                fontColor={person.fontColor}
                fontWeight={person.fontWeight}
                />
            )
            })}
        </div>
    )
    }

export default RightMenu
import PreviewCard from '../PreviewCard'
import './RightMenu.css'

const people = [{
    backgroundStyle: 'gradLeft',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    borderStyle: 'solid',
    borderRadius: 0.5,
    borderWidth: 2,
    borderColor: '#000000',
    font: 'Bona Nova',
    fontSize: 16,
},
{
    backgroundStyle: 'gradTop',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    borderStyle: 'solid',
    borderRadius: 0.5,
    borderWidth: 2,
    borderColor: '#000000',
    font: 'Roboto Condensed',
    fontSize: 22,
},
{
    backgroundStyle: 'gradTop',
    backgroundColorOne: '#ffff76',
    backgroundColorTwo: '#000000',
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 3,
    borderColor: '#000000'
},
{
    backgroundStyle: 'solid',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    font: 'Libre Baskerville',
    fontSize: 18,
    // borderStyle: 'solid',
    // borderRadius: 0.5,
    // borderWidth: 2,
    // borderColor: '#000000'
},
]

const RightMenu = () => {
    return (
        <div className='right-menu'>
            {people.map((person) => { return (
                <PreviewCard 
                backgroundStyle={person.backgroundStyle}
                backgroundColorOne={person.backgroundColorOne}
                backgroundColorTwo={person.backgroundColorTwo}
                borderRadius={person.borderRadius}
                borderStyle={person.borderStyle}
                borderWidth={person.borderWidth}
                borderColor={person.borderColor}
                font={person.font}
                fontSize={person.fontSize}
                />
            )
            })}
        </div>
    )
    }

export default RightMenu
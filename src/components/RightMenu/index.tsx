import PreviewCard from '../PreviewCard'
import './RightMenu.css'

const people = [{
    id: 1,
    backgroundStyle: 'gradLeft',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    border: true,
    borderStyle: 'solid',
    borderRadius: 0.5,
    borderWidth: 2,
    borderColor: '#000000',
    font: 'Bona Nova',
    fontSize: 16,
    fontColor: '#a52a2a',
    fontWeight: 700,
},
{   
    id: 2,
    backgroundStyle: 'gradTop',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    border: true,
    borderStyle: 'solid',
    borderRadius: 0.5,
    borderWidth: 2,
    borderColor: '#000000',
    font: 'Roboto Condensed',
    fontSize: 22,
},
{
    id: 3,
    backgroundStyle: 'gradTop',
    backgroundColorOne: '#ffff76',
    backgroundColorTwo: '#000000',
    border: true,
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 3,
    borderColor: '#000000'
},
{
    id: 4,
    backgroundStyle: 'solid',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    font: 'Libre Baskerville',
    fontSize: 18,
    fontColor: '#a52a2a',
    border: false,
    // borderStyle: 'solid',
    // borderRadius: 0.5,
    // borderWidth: 2,
    // borderColor: '#000000'
},
{
    id: 5,
    backgroundStyle: 'gradLeft',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    font: 'Libre Baskerville',
    fontSize: 18,
    fontColor: '#a52a2a',
    border: true,
    borderStyle: 'solid',
    borderRadius: 0.5,
    borderWidth: 2,
    borderColor: '#000000'
},
{
    id: 6,
    backgroundStyle: 'gradLeft',
    backgroundColorOne: '#ffffff',
    backgroundColorTwo: '#000000',
    font: 'Libre Baskerville',
    fontSize: 18,
    fontColor: '#a52a2a',
    border: true,
    borderStyle: 'solid',
    borderRadius: 0.5,
    borderWidth: 2,
    borderColor: '#000000'
},
]

const RightMenu = () => {
    return (
        <div className='right-menu'>
            {people.map((person) => { return (
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
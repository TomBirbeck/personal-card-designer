import { useEffect, useState } from 'react'
import PreviewCard from '../PreviewCard'
import {previewCards} from '../../types'
import './RightMenu.css'

const RightMenu = () => {
    const [designs, setDesigns] = useState<previewCards[]>([])

    const getDesigns = async () => {
        const res = await fetch('http://localhost:3001/designs')
        const data = await res.json()
        console.log(data.data)
        setDesigns(data.data)
    }

    useEffect(() => {
        getDesigns()
    },[])

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
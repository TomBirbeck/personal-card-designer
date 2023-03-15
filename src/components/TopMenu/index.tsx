import { ChangeEvent, useContext, useState } from 'react'
import cardDesignContext from '../../context'
import '../TopMenu/TopMenu.css'

const TopMenu = () => {
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)
    const [test, setTest] = useState({backgroundStyle: 'solid', backgroundColorOne: '', backgroundColorTwo: ''})

    const handleBackgroundStyle = (e: ChangeEvent<HTMLSelectElement>) => {
    setTest({...test, backgroundStyle: e.target.value})
    setCardProperties({...cardProperties, backgroundStyle: e.target.value})
}

const handleBackgroundColorOne = (e: ChangeEvent<HTMLInputElement>) => {
    setTest({...test, backgroundColorOne: e.target.value})
    setCardProperties({...cardProperties, backgroundColorOne: e.target.value})
}

const handleBackgroundColorTwo = (e: ChangeEvent<HTMLInputElement>) => {
    setTest({...test, backgroundColorTwo: e.target.value})
    setCardProperties({...cardProperties, backgroundColorTwo: e.target.value})
    }

    return (
        <div className='top-menu'>
            <select
        className='selections-top'
        onChange={handleBackgroundStyle}
        >
            <option value={''}>Background Style</option>
            <option value={'solid'}>solid</option>
            <option value={'gradTop'}>Gradient top - bottom</option>
            <option value={'gradLeft'}>Gradient left - right</option>
        </select>
        <label className='top-menu-label' htmlFor='background one color picker'>Background Colour 1
       <input className='top-color-picker' type={'color'} onChange={handleBackgroundColorOne}/>
        </label>
        <label className='top-menu-label' htmlFor='background two color picker' >Background Colour 2
       {cardProperties.backgroundStyle === 'solid' ? <input className='top-color-picker' type={'color'} onChange={handleBackgroundColorTwo} disabled/>:
        <input className='top-color-picker' type={'color'} onChange={handleBackgroundColorTwo}/>}
        </label>
        </div>
    )
}

export default TopMenu
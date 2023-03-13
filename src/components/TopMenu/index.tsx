import { ChangeEvent, useState } from 'react'
import '../TopMenu/TopMenu.css'

const TopMenu = () => {

    const [test, setTest] = useState({backgroundStyle: 'solid', backgroundColorOne: '', backgroundColorTwo: ''})

    const handleBackgroundStyle = (e: ChangeEvent<HTMLSelectElement>) => {
    setTest({...test, backgroundStyle: e.target.value})
    }

    const handleBackgroundColorOne = (e: ChangeEvent<HTMLInputElement>) => {
        setTest({...test, backgroundColorOne: e.target.value})
    }

    const handleBackgroundColorTwo = (e: ChangeEvent<HTMLInputElement>) => {
        setTest({...test, backgroundColorTwo: e.target.value})
    }

    console.log(test)
    return (
        <div className='top-menu'>
            <select
        className='selections-top'
        onChange={handleBackgroundStyle}
        >
            <option value={'solid'}>solid</option>
            <option value={'gradTop'}>Gradient top - bottom</option>
            <option value={'gradLeft'}>Gradient left - right</option>
            <option value={'radial'}>Gradient radial</option>
        </select>
        <label htmlFor='background one color picker'>background color 1
       <input type={'color'} onChange={handleBackgroundColorOne}/>
        </label>
        <label htmlFor='background two color picker' >background color 2
       {test.backgroundStyle === 'solid' ? <input type={'color'} onChange={handleBackgroundColorTwo} disabled/>:
        <input type={'color'} onChange={handleBackgroundColorTwo}/>}
        </label>
        </div>
    )
}

export default TopMenu
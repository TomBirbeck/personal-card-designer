import { ChangeEvent, useContext, useState } from 'react'
import cardDesignContext from '../../context'
import '../BottomMenu/BottomMenu.css'

const BottomMenu = () => {
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)

    const handleBorder = () => {
        setCardProperties({...cardProperties, border: !cardProperties.border})
    }

    const handleBorderWidth = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, borderWidth: Number(e.target.value)})
    }

    const handleBorderStyle = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, borderStyle: e.target.value})
    }

    const handleBorderRadius = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, borderRadius: Number(e.target.value)})
    }

    const handleBorderColor = (e: ChangeEvent<HTMLInputElement>) => {
        setCardProperties({...cardProperties, borderColor: e.target.value})
    }


    return (
        <div className="bottom-menu">
            <label className="switch">
                <input type="checkbox" onChange={handleBorder}/>
                <span className="slider round"></span>
                </label>
            <select
        className='selections-bottom'
        onChange={handleBorderStyle}
        >
            <option value={'solid'}>Border Style</option>
            <option value={'solid'}>solid</option>
            <option value={'dashed'}>dashed</option>
            <option value={'dotted'}>dotted</option>
            <option value={'ridge'}>ridge</option>
        </select>
            <select
        className='selections-bottom'
        onChange={handleBorderWidth}
        >
            <option value={1}>Border Width</option>
            <option value={1}>1px</option>
            <option value={2}>2px</option>
            <option value={3}>3px</option>
            <option value={4}>4px</option>
        </select>
            <select
        className='selections-bottom'
        onChange={handleBorderRadius}
        >
            <option value={0}>Border Radius</option>
            <option value={0.5}>8px</option>
            <option value={1}>16px</option>
            <option value={1.5}>24px</option>
            <option value={2}>32px</option>
        </select>
         <label className='bottom-menu-label' htmlFor='border color picker'>Border Colour
        <input className='bottom-color-picker' type={'color'} onChange={handleBorderColor}/>
        </label>
        </div>
    )
}

export default BottomMenu
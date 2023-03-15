import { ChangeEvent, useState, useContext } from 'react'
import './LeftMenu.css'
import cardDesignContext from '../../context';

const LeftMenu = () => {
    const [cardDesign, setCardDesign] = useState({layout: 1, height: 100, width: 300, font: 'sans-serif', fontSize: 16, textAlign: 'left'})
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)

    const handleLayout = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardDesign({...cardDesign, layout: Number(e.target.value)})
        setCardProperties({...cardProperties, layout: Number(e.target.value)})
    }
    
    const handleCardSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardDesign({...cardDesign, width: Number(e.target.value), height: Number(e.target.value)/2})
        setCardProperties({...cardProperties, width: Number(e.target.value), height: Number(e.target.value)/2})
    }
    
    const handleFont = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardDesign({...cardDesign, font: e.target.value})
        setCardProperties({...cardProperties, font: e.target.value})
    }

    const handleFontColor = (e: ChangeEvent<HTMLInputElement>) => {
        setCardProperties({...cardProperties, fontColor: e.target.value})
    }
    
    const handleFontSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardDesign({...cardDesign, fontSize: Number(e.target.value)})
        setCardProperties({...cardProperties, fontSize: Number(e.target.value)})
    }
    
    const handleTextAlign = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardDesign({...cardDesign, textAlign: e.target.value})
        setCardProperties({...cardProperties, font: e.target.value})
    }

    return (<div className="left-menu">
        <select
        className='selections-left'
        onChange={handleLayout}
        >
            <option value={1}>Layout</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            </select>
        <select
        className='selections-left'
        onChange={handleCardSize}
        >
            <option value={200}>Size</option>
            <option value={300}>300 x 150</option>
            <option value={330}>330 x 165</option>
            <option value={370}>370 x 185</option>
            <option value={400}>400 x 200</option>
            <option value={450}>450 x 225</option>
        </select>
        <select
        className='selections-left'
        onChange={handleFont}
        >
            <option>Font</option>
            <option value={'Bona Nova'}>Bona Nova</option>
            <option value={'Charm'}>Charm</option>
            <option value={'Libre Baskerville'}>Libre Baskerville</option>
            <option value={'Roboto Condensed'}>Roboto Condensed</option>
            <option value={'Tangerine'}>Tangerine</option>
        </select>
        <label className='left-menu-labels' htmlFor='font color'>Font Colour
        <input className='font-color-picker' type={'color'} onChange={handleFontColor}/>
        </label>
        <select
        className='selections-left'
        onChange={handleFontSize}
        >
            <option>Font Size</option>
            <option value={12}>12px</option>
            <option value={14}>14px</option>
            <option value={16}>16px</option>
            <option value={18}>18px</option>
            <option value={20}>20px</option>
            <option value={24}>24px</option>
            <option value={28}>28px</option>
            <option value={32}>32px</option>
        </select>
        {/* <label>
        Upload your photo
        <input style={{width: '5rem'}} type='file' accept='image/*'/>
        </label> */}
        <button className='buttons'>Save</button>
        <button className='buttons'>Download</button>
    </div>
    )
}

export default LeftMenu
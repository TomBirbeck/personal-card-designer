import { ChangeEvent, useState, useContext } from 'react'
import './LeftMenu.css'
import cardDesignContext from '../../context';
import deer from '../../assets/deer.png'
import bear from '../../assets/bear.png'
import cat from '../../assets/cat.png'
import dog from '../../assets/dog.png'
import hamster from '../../assets/hamster.png'
import pig from '../../assets/pig.png'
import panda from '../../assets/panda.png'
import raccoon from '../../assets/raccoon.png'

const LeftMenu = () => {
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)
    // const [image, setImage] = useState()

    const handleLayout = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, layout: Number(e.target.value)})
    }
    
    const handleCardSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, width: Number(e.target.value), height: Number(e.target.value)/2})
    }
    
    const handleFont = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, font: e.target.value})
    }

    const handleFontColor = (e: ChangeEvent<HTMLInputElement>) => {
        setCardProperties({...cardProperties, fontColor: e.target.value})
    }
    
    const handleFontSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, fontSize: Number(e.target.value)})
    }

    const handleFontWeight = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, fontWeight: Number(e.target.value)})
    }
    
    const handleTextAlign = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, font: e.target.value})
    }

    // const handleImage = (e: any) => {
    //     setImage(e.target.value)
    //     setCardProperties({...cardProperties, imageUrl: e.target.value})
    // }

    const handlePicture = (e: ChangeEvent<HTMLSelectElement>) => {
        setCardProperties({...cardProperties, imageUrl: e.target.value})
    }
  

    // const stored = localStorage.getItem('cardStyles')

    // if (stored) {

    //     console.log(JSON.parse(stored))
    // }

    return (<div className="left-menu">
        <select
        className='selections-left'
        onChange={handleLayout}
        >
            <option>Layout</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            </select>
        <select
        className='selections-left'
        onChange={handleCardSize}
        >
            <option>Size</option>
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
            <option value={'Amatic SC'}>Amatic SC</option>
            <option value={'Bona Nova'}>Bona Nova</option>
            <option value={'Charm'}>Charm</option>
            <option value={'Libre Baskerville'}>Libre Baskerville</option>
            <option value={'Lobster Two'}>Lobster</option>
            <option value={'Rajdhani'}>Rajdhani</option>
            <option value={'Roboto Condensed'}>Roboto Condensed</option>
            <option value={'Sono'}>Sono</option>
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
        <select
        className='selections-left'
        onChange={handleFontWeight}
        >
            <option>Font Weight</option>
            <option value={400}>Normal</option>
            <option value={700}>Bold</option>
        </select>
        <select
        className='selections-left'
        onChange={handlePicture}
        >
            <option>Choose Avatar</option>
            <option value={cat}>Cat</option>
            <option value={dog}>Dog</option>
            <option value={hamster}>Hamster</option>
            <option value={panda}>Panda</option>
            <option value={pig}>Pig</option>
            <option value={deer}>Deer</option>
            <option value={bear}>Bear</option>
            <option value={raccoon}>Raccoon</option>
        </select>
        {/* <label>
        Upload your photo
        <input style={{width: '5rem'}} type='file' accept='image/*' onChange={handleImage}/>
        </label> */}
        {/* <button className='buttons'>Download</button> */}
    </div>
    )
}

export default LeftMenu
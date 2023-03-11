import { ChangeEvent, useState } from 'react'
import './LeftMenu.css'

const LeftMenu = () => {
    const [layout, setLayout] = useState<number>(1);
    const [size, setSize] = useState<number>(200);
    const [font, setFont] = useState<string>('sans-serif');
    const [fontSize, setFontSize] = useState<number>(16);
    const [textAlign, setTextAlign] = useState<string>('left');

    const handleLayout = (e: ChangeEvent<HTMLSelectElement>) => {
        setLayout(Number(e.target.value));
    }

    const handleCardSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setSize(Number(e.target.value));
    }

    const handleFont = (e: ChangeEvent<HTMLSelectElement>) => {
        setFont(e.target.value);
    }

    const handleFontSize = (e: ChangeEvent<HTMLSelectElement>) => {
        setFontSize(Number(e.target.value));
    }

    const handleTextAlign = (e: ChangeEvent<HTMLSelectElement>) => {
        setTextAlign(e.target.value);
    }

    console.log({layout, size, font, fontSize, textAlign});

    return (<div className="left-menu">
        <h2>left menu</h2>
        <select
        className='selections'
        onChange={handleLayout}
        >
            <option value={1}>Layout</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            </select>
        <select
        className='selections'
        onChange={handleCardSize}
        >
            <option value={200}>Size</option>
            <option value={200}>200px x 100px</option>
            <option value={250}>250px x 125px</option>
            <option value={300}>300px x 150px</option>
            <option value={400}>400px x 200px</option>
        </select>
        <select
        className='selections'
        onChange={handleFont}
        >
            <option>Font</option>
            <option value={12}>font 1</option>
            <option value={14}>font 2</option>
            <option value={16}>font 3</option>
        </select>
        <select
        className='selections'
        onChange={handleFontSize}
        >
            <option>Font Size</option>
            <option value={12}>12px</option>
            <option value={14}>14px</option>
            <option value={16}>16px</option>
            <option value={18}>18px</option>
            <option value={20}>20px</option>
        </select>
        <select
        className='selections'
        onChange={handleTextAlign}
        >
            <option>Text Alignment</option>
            <option value={'left'}>Left</option>
            <option value={'center'}>Center</option>
            <option value={'right'}>Right</option>
        </select>
    </div>
    )
}

export default LeftMenu
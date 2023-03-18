import { ChangeEvent, useRef, useState, useContext } from "react"
import Card from "../Card"
import '../CardContainer/CardContainer.css'
import html2canvas from "html2canvas"
import { CardContext } from "../../types"
import cardDesignContext from "../../context"

const CardContainer = () => {
    const [name, setName] = useState<string>('John Johnson')
    const [tagline, setTagline] = useState<string>('Wow! Such tagline')
    const [cardProperties, setCardProperties] = useContext(cardDesignContext)
    const cardRef = useRef(null)


    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleTagline = (e: ChangeEvent<HTMLInputElement>) => {
        setTagline(e.target.value)
    }

    const handleSave = (cardDesign : CardContext) => {
        const cardStyles = {
            backgroundStyle: cardDesign.backgroundStyle,
            backgroundColorOne: cardDesign.backgroundColorOne,
            backgroundColorTwo: cardDesign.backgroundColorTwo,
            border: cardDesign.border,
            borderStyle: cardDesign.borderStyle,
            borderWidth: cardDesign.borderWidth,
            borderColor: cardDesign.borderColor,
            font: cardDesign.font,
            fontColor: cardDesign.fontColor,
            fontWeight: cardDesign.fontWeight,
            fontSize: cardDesign.fontSize,
        }
        localStorage.setItem('cardStyles', JSON.stringify(cardStyles))

    }

    const handleDownloadImage = async () => {
        const element = cardRef.current;
        if (element){
            const canvas = await html2canvas(element, {backgroundColor: null});
            const data = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            
            if (typeof link.download === 'string') {
                link.href = data;
                link.download = 'image.png';
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
              window.open(data);
            }
    }
  };

    return (
        <div className="container">
            <Card name={name} tagline={tagline} cardRef={cardRef}/>
            <div className="inputs-and-buttons">
            <label htmlFor="name" className="card-labels">
                Name
            <input className="card-inputs" type={'text'} placeholder='Enter Name' onChange={handleName}></input>
            </label>
            <label htmlFor="tagline" className="card-labels">
                Tagline
            <input className="card-inputs" type={'text'} placeholder='Enter Tagline' onChange={handleTagline}></input>
            </label>
        <button className='buttons' onClick={()=> {handleSave(cardProperties)}}>Save</button>
            <button className="buttons" type="button" onClick={handleDownloadImage}>
            Download
            </button>
            </div>
        </div>
    )
}

export default CardContainer
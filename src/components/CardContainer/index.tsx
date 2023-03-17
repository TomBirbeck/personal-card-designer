import { ChangeEvent, useState } from "react"
import Card from "../Card"
import '../CardContainer/CardContainer.css'

const CardContainer = () => {
    const [name, setName] = useState<string>('John Johnson')
    const [tagline, setTagline] = useState<string>('Wow! Such tagline')

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleTagline = (e: ChangeEvent<HTMLInputElement>) => {
        setTagline(e.target.value)
    }

    return (
        <div className="container">
            <Card name={name} tagline={tagline}/>
            <div>
            <label htmlFor="name" className="card-labels">
                Name
            <input className="card-inputs" type={'text'} placeholder='Enter Name' onChange={handleName}></input>
            </label>
            <label htmlFor="tagline" className="card-labels">
                Tagline
            <input className="card-inputs" type={'text'} placeholder='Enter Tagline' onChange={handleTagline}></input>
            </label>
            </div>
        </div>
    )
}

export default CardContainer
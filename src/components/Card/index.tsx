import { useContext} from "react"
import cardDesignContext from "../../context"

const Card = () => {
    const props= useContext(cardDesignContext)
    const {height, width, font, fontSize, textAlign} = props[0]

    return (
        <div className="card"
        style={{
            height: `${height}px`,
            width : `${width}px`,
            fontFamily: `${font}`,
            fontSize: `${fontSize}px`,
            // textAlign: `${textAlign}`,
            backgroundColor: 'red',
        }}
        >
            <h3>Card</h3>
        </div>
    )
}

export default Card
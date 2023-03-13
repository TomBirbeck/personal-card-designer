import { useContext} from "react"
import cardDesignContext from "../../context"

const Card = () => {
    const props= useContext(cardDesignContext)

    return (
        <div className="card"
        style={{
            height: `${props[0].height}px`,
            width : `${props[0].width}px`,
            fontSize: `${props[0].fontSize}px`,
            backgroundColor: 'red',
        }}
        >
            <h3>Card</h3>
        </div>
    )
}

export default Card
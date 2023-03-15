import './PreviewCard.css'

const person = {
    name: "Barry Jones",
    tagline: "Just testing things out mate",
}


const PreviewCard = () => {
    return (
        <div className="preview-card">
            <h1 style={{fontFamily: 'Bona Nova'}}>Test</h1>
            <h4>
            {person.name}
            </h4>
            <p>{person.tagline}</p>
            <img src='' alt='profile pic'/>
        </div>
    )
}

export default PreviewCard
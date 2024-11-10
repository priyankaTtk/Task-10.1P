import './Again.css'

function Again(props) {
    return (
        <div className="trailer-item">
            <img src={props.img} alt='Trialer' className="trailer-image"/>
            <h3 className="trailer-article">{props.article}</h3>
            <h4 className="trailer-description">Description: {props.description}</h4>
            <p className="trailer-example">{props.eg}</p>
            <hr className="trailer-divider"/>
            <h5 className="trailer-author">{props.author}</h5>
        </div>
    );
}

export default Again
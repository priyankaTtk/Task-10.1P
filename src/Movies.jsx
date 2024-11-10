import './Movies.css'

function Movies(props) {
    return (
        <div className="movie-item">
            <img src={props.img} alt='Movie' className="movie-image"/>
            <h3 className="movie-article">{props.article}</h3>
            <h4 className="movie-description">Description: {props.description}</h4>
            <p className="movie-example">{props.eg}</p>
            <hr className="movie-divider"/>
            <h5 className="movie-author">Rate 4 ⭐:{props.author}</h5>
        </div>
    );
}

export default Movies
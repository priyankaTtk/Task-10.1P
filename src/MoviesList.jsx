import Movies from './Movies';
import ListM from './ListM';
import './Movies.css';

function MoviesList() {
    return (
        <div className="movies-container">
            <h2 className="featured-movies-title">Featured Movies</h2>
            <div className='movies-grid'>
                {ListM.map((movie) => (
                    <Movies
                        key={movie.key}
                        img={movie.img}
                        article={movie.article}
                        description={movie.description}
                        eg={movie.eg}
                        author={movie.author}
                    />
                ))}
            </div>
        </div>
    );
}

export default MoviesList;
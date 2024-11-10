import Movies from './Again';
import ListM from './ListA';
import './Again.css';

function AgainList() {
    return (
        <div className="trailer-container">
            <h2 className="featured-trailer-title">Featured Trailers</h2>
            <div className='trailer-grid'>
                {ListM.map((trailer) => (
                    <Movies
                        key={trailer.key}
                        img={trailer.img}
                        article={trailer.article}
                        description={trailer.description}
                        eg={trailer.eg}
                        author={trailer.author}
                    />
                ))}
            </div>
        </div>
    );
}

export default AgainList;
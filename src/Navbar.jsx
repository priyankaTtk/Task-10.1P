import './Navbar.css'
function Navbar()
{
    return(
        <div className="navbar">
            <div className="navbar-brand">
                <a href="/">Movies</a>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search your movies here"></input>
            </div>
            <div className="navbar-buttons">
                <button className="btn">Search</button>
                <button className="btn">browse</button>
            </div>

        </div>
    );
}

export default Navbar;
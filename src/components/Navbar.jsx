import { useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import DataContext from '../state/DataContext';


function Navbar() {
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Online Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Catalog">Catalog</Link>
                            </li>
                               <li className="nav-item">
                                <Link className="nav-link" to="About">About</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <span className=' btn btn-outline-dark btn-user'>
                                {user.name}
                            </span>
                            
                            <Link className="btn btn-outline-dark" to="/cart">
                             {cart.length}
                            View Cart </Link>
  
                           
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
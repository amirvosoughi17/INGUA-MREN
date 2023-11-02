import './navbar.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Hope ! </h1>
            <div className="nav-items">
                <Link className='nav-item' to='/'>Home</Link>
                <Link className='nav-item' to='/addblog'>add blog</Link>
            </div>
        </nav>
    </div>
  )
}

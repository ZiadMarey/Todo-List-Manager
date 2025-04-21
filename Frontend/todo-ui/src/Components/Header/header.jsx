import './header.css';
import { Link, useLocation } from 'react-router-dom';

function Header(){
    const location = useLocation();

    function Locate(){
        if (location.pathname === "/add-update"){
            return <Link to='/' className='add-link'>Back To The List</Link>
        }
        else{
            return <Link to='/add' className='add-link'>Add A New Task</Link>
        }
    }

    return(


    <div className='header'>
        <Link to='/' className='title'> Todo List Manager </Link>
        
        <div className='link-container'>
            {Locate()}
        </div>
    </div>
    );
}

export default Header;
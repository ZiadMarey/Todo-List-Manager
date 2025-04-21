import './header.css';
import { Link, useLocation, useMatch } from 'react-router-dom';

function Header(){
    const location = useLocation();

    function Locate(){
        const isUpdatePage = useMatch('/update/:id');
        // if (location.pathname === "/add" || new RegExp('^/update/\\d+$').test(location.pathname) )
        // this above if works too
        if (location.pathname === "/add" || isUpdatePage  ){
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
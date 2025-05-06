import { isUserLoggedIn, logout } from '../../Services/AuthService';
import './header.css';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';

function Header(){
    const location = useLocation();

    const navigator = useNavigate();

    function handleLogout(){
        logout();
        navigator('/login');
    }

    function mainPageLink(){
        const isAuth = isUserLoggedIn();
        if(isAuth){
            return <Link to='/todos' className='title'> Todo List Manager </Link>
        }
        else{
            
            return <Link to='/login' className='title'> Todo List Manager </Link>
        }
    }

    function Locate(){
        const isUpdatePage = useMatch('/update/:id');
        const isAuth = isUserLoggedIn();
        
        // if (location.pathname === "/add" || new RegExp('^/update/\\d+$').test(location.pathname) )
        // this above if works too
        if(isAuth){
            
            if (location.pathname === "/add" || isUpdatePage  ){
                return (
                    <>
                        <Link to='/todos' className='add-link'>Back To The List</Link>
                        <Link to='/' className='logout-link' onClick={handleLogout}>Logout</Link>
                    </>
                );
            }
            else if(location.pathname === "/todos" || isUpdatePage  ){
                return (
                    <>
                        <Link to='/add' className='add-link'>Add A New Task</Link>
                        <Link to='/' className='logout-link' onClick={handleLogout}>Logout</Link>
                    </>
                );
            }
        }
        else{
            
            return(<></>)
        }
        
    }

    return(


    <div className='header'>
        {mainPageLink()}
        
        <div className='link-container'>
            {Locate()}
        </div>
    </div>
    );
}

export default Header;
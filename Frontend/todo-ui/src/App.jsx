import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import './index.css'
import './App.css'
import TodoList from './Pages/TodoList/todo-list'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import AddUpdateTodo from './Pages/AddUpdateTodo/add-update-todo';
import Register from './Pages/RegisterPage/register';
import Login from './Pages/LoginPage/login';
import { isUserLoggedIn } from './Services/AuthService';


function App() {

  function AuthenticatedRoute({children}){
    const isAuth =  isUserLoggedIn();

    if(isAuth){
      return children;
    }

    return <Navigate to='/' />
  }

  return (
    <Router>
      <Header />

      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/todos' element={
            <AuthenticatedRoute >
              <TodoList />
            </AuthenticatedRoute>    
        } />

        <Route path='/add' element={
            <AuthenticatedRoute >
              <AddUpdateTodo />
            </AuthenticatedRoute>
        } />
        <Route path='/update/:id' element = { 
            <AuthenticatedRoute >
              <AddUpdateTodo /> 
            </AuthenticatedRoute>
        } />

        <Route path='/register' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
      
      {/* <Footer /> */}
    </Router>
  )
}

export default App

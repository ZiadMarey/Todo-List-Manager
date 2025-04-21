import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css'
import './App.css'
import TodoList from './Pages/TodoList/todo-list'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import AddUpdateTodo from './Pages/AddUpdateTodo/add-update-todo';


function App() {


  return (
    <Router>
      <Header />

      <Routes>

        <Route path='/' element={<TodoList />} />
        <Route path='/todos' element={<TodoList />} />

        <Route path='/add' element={<AddUpdateTodo />} />
        <Route path='/update/:id' element = { <AddUpdateTodo /> }></Route>
      </Routes>
      
      {/* <Footer /> */}
    </Router>
  )
}

export default App

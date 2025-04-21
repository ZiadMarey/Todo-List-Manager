import { useEffect, useState } from 'react';
import './todo-list.css'
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo } from '../../Services/TodoService';
import BackgroundSVG from '../../Components/SVGs/Background.svg'
import { useNavigate } from 'react-router-dom';

function TodoList(){
    const navigator = useNavigate();
    const[todos,setTodos] = useState([]);
    
    useEffect(() =>{
        listTodos();
    },[]);

    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function updateTodo(id){
        console.log(id)
        navigator(`/update/${id}`);
    }

    function removeTodo(id){
        
        deleteTodo(id).then((response) => {
            console.log(response.data);
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    function markCompleteTodo(id){
        completeTodo(id).then((response) => {
            console.log(response.data);
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    function markIncompleteTodo(id){
        inCompleteTodo(id).then((response) => {
            console.log(response.data);
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    return(
        <div className='container'>
            <h2 className='text-center title-text'>List Of Todos</h2>

            <div>
                <table className="table table-striped table-bordered alternate">
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Desctiption</th>
                            <th>Todo Completed</th>
                            <th width="35%">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td width={'25%'}>{todo.completed ? 'Yes' : 'No'}</td>
                                    <td>
                                    <button className='update-button' onClick ={() => updateTodo(todo.id)} >Update</button>
                                    <button className='delete-button' onClick={() => removeTodo(todo.id)}>Delete</button>
                                    <button className='complete-button' onClick={() => markCompleteTodo(todo.id)}>Completed</button>
                                    <button className='incomplete-button' onClick={() => markIncompleteTodo(todo.id)}>Unfinished</button>
                                    </td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList
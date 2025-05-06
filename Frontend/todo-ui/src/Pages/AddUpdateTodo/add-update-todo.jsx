import { useNavigate, useParams } from 'react-router-dom'
import './add-update-todo.css'
import { useEffect, useState } from 'react';
import { getTodo, saveTodo, updateTodo } from '../../Services/TodoService';

function AddUpdateTodo(){
    const {id} = useParams();
    const navigator = useNavigate();

    const[title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)

    function addOrUpdateTodo(e){
        e.preventDefault()

        const todo = {title,description, completed}
        console.log(todo)

        if(id){
            updateTodo(id,todo).then((response) => {
                console.log(response.data);
                navigator("/");
            }).catch(error => {
                console.error(error);
            })
        }
        else{
            saveTodo(todo).then((response) =>{
                console.log(response.data);
                
                navigator('/')
    
            }).catch(error => {
                console.error(error);
            })
        }

        

        
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleComplete = (e) => {
        setCompleted(e.target.value === true);
    }

    useEffect( () => {
        if(id){
            getTodo(id).then((response) => {
                console.log(response.data)
                setTitle(response.data.title);
                setDescription(response.data.description);
                setCompleted(response.data.completed);
                
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function pageTitle(){
        if(id){
            return <div className="login-box-b">Edit A Task</div>
        } else{
            return <div className="login-box-b">Add A Task</div>
        }
    }
    return(
        <div className="body1">
        <div className="bgimage-c"></div>
        <div className="wrapper-b">
          {pageTitle()}
          <form /*onSubmit={handleLogin}*/>
            <div className="input-box-b">
              <input
                type="text"
                id="firstName"
                value={title}
                onChange={handleTitle}
                required
                
              />
              {/* { errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>} */}
              <label>Task Title</label>
            </div>
            <div className="input-box-b">
              <input
                type="text"
                id="password"
                value={description}
                onChange={handleDescription}
                required
                
              />
              {/* { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>} */}
              <label>Task Description</label>
            </div>

            <p className='completed-text'>Completed Task</p>

            <div id="firstFilter" className="filter-switch">
                <input checked="" value="false" onChange={handleComplete} id="option1" name="options" type="radio" />
                <label className="option" htmlFor="option1">No</label>
                <input  id="option2" value="true" onChange={handleComplete} name="options" type="radio" />
                <label className="option" htmlFor="option2">Yes</label>
                <span className="background"></span>
            </div>
            
            <button
              className="signin-button-b"
              onClick={(e) => addOrUpdateTodo(e)}
            >
              Submit
            </button>
            
          </form>
        </div>
      </div>
    )

}

export default AddUpdateTodo
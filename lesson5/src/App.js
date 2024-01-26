import './App.css';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import Button from './components/button/Button';
import Todo from './components/todo/Todo';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [local, setLocal] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [tasks, setTasks] = useState([])

  const handleShow = () => setShow(prevState => !prevState);

  const BASE_URL = 'https://jsonplaceholder.typicode.com/'

  const getTodos = async (endpoint) => {
    const data = await fetch(BASE_URL + endpoint)
    const todos = await (data.json())
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getFromLocalStorage = () => {
    setLocal(JSON.parse(localStorage.getItem('todos')))
  }


  const handleAdd = () => {
    setTasks(prev => [ ...prev, {
        id: tasks.length===0 ? 1 : tasks[tasks.length -1].id+1,
        task: input
      }
      ]
    );
  };

  const handleEdit = (newTitle)=> {
    tasks.map(task => {
      if(task.id === newTitle.id) {
        return task.task = newTitle.task
      }
    })
    setTasks(tasks)
  }

  const handleDone = (id) => {
    tasks.map(task => {
      if(task.id === id) {
        return task.completed = !task.completed
      }
      return tasks
    })
    setTasks([...tasks])
  }

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = (event) => {
      setSearchInput(event.target.value)
    const filteredTasks = tasks.filter(task =>
      task.task.toLowerCase().includes(event.target.value.toLowerCase()))
    setTasks(filteredTasks)
  }

  const handleDelete = (id) => {
    const deleted = tasks.filter(task => task.id !== id)
    setTasks(deleted)
  }

  useEffect(() => {
    const myLocalStorage = JSON.parse(localStorage.getItem('todos'))
    if (myLocalStorage === null) {
      return localStorage.setItem('todos', JSON.stringify(tasks))
    }
    if (myLocalStorage.length !== 0) {
      setTasks(myLocalStorage)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <div>
      {
        show &&
        <Modal
          handleShow={handleShow}
          onChangeInput={onChangeInput}
          handleAdd={handleAdd}
        >

        </Modal>
      }

      <Button action={() => getTodos('todos')} text={'getTodos'}/>
      <Button action={() => getFromLocalStorage()} text={'getFromLocalStorage'}/>
      <Button action={handleShow} text={'открыть'}/>
      <Input placeholder={'поиск'} type={'search'} onChangeInput={ handleSearch }/>
      <TodoList
        tasks={tasks}
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
      />
    </div>
  );
}


export default App;

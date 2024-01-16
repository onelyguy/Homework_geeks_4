import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import User from './components/user/User';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import List from './components/list/List';

function App() {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState('')

  const tasks = [
    {
      id:1 , 
      task: 'coding'
    },
    {
        id:2,
        task: 'eat'
    },
    {
        id:3,
        task: 'sleep'
    }
  ]
  
  const handleShow = () => setShow(!show)

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  return (
    <div>
      <CountPage/>
      {/* <User name={'Ermek'} age={18}/> */}
      <h1>{input}</h1>
      <Input placeholder={'name'} type={'text'} onChangeInput={onChangeInput}/>
      {
        show && <Modal handleShow={handleShow}>
          <h1>Content</h1>
        </Modal>
      }
      <button onClick={handleShow}>открыть</button>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;

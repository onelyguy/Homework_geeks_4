import { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import List from './components/list/List';
import Button from './components/button/Button';

function App() {
  const [show, setShow] = useState(false)

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

  return (
    <div>
      {
        show && <Modal handleShow={handleShow}>
          <h1>Content</h1>
        </Modal>
      }
      <Button action={handleShow} text={'Открыть'}/>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;

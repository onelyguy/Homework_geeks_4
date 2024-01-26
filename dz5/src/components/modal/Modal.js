import React from 'react';
import classes from './modal.module.css';
import Button from '../button/Button';
import Input from '../input/Input';


function Modal (
  {
    children,
    handleShow,
    onChangeInput,
    handleAdd
  }) {

  return (
    <>
      <div className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
        <Button text={'Закрыть'} action={handleShow}/>
        <Input placeholder={'добавление задачи'} onChangeInput={onChangeInput}/>
        <Button text={'Добавить'} action={handleAdd}/>
        {children}
      </div>
    </>
  );
};

export default Modal;

import React from 'react'
import classes from './modal.module.css'
import Button from '../button/Button'
import Input from '../input/Input'

function Modal(
    {
        handleAdd,
        children, 
        handleShow, 
        onChangeInput
    }) {

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button action={handleShow} text={'Закрыть'}/>
                <Input placeholder={'Добавление задачи'} onChangeInput={onChangeInput}/>
                <Button action={handleAdd} text={'Добавить'}/>
                {children}
            </div>
        </>
    )
}

export default Modal
import React, { Children } from 'react'
import classes from './modal.module.css'
import Button from '../button/Button'

function Modal({children, handleShow}) {

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button action={handleShow} text={'Закрыть'}/>
                {children}
            </div>
        </>
    )
}

export default Modal
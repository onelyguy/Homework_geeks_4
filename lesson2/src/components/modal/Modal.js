import React, { Children } from 'react'
import classes from './modal.module.css'

function Modal({children, handleShow}) {

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>Закрыть</button>

                {children}
            </div>
        </>
    )
}

export default Modal
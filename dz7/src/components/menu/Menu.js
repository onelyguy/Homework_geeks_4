import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./menu.module.css"

const Menu = () => {
    return (
        <ul>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? `${classes.active}` : ''}
                >Главная</NavLink>
            </li>
            <li>
                <NavLink
                    to="/FormPage"
                    className={({ isActive }) => isActive ? `${classes.active}` : ''}
                >Form</NavLink>
            </li>
            <li>
                <NavLink
                    to="/CountPage"
                    className={({ isActive }) => isActive ? `${classes.active}` : ''}
                >Count</NavLink>
            </li>
            <li>
                <NavLink
                    to="/UsersPage"
                    className={({ isActive }) => isActive ? `${classes.active}` : ''}
                >Users</NavLink>
            </li>
        </ul>
    )
}

export default Menu
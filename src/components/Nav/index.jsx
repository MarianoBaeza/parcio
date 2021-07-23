import React from 'react';
import s from './Nav.module.scss';

export const Nav = () => {
    return (
        <div class={`p-3 d-flex justify-content-between ${s.nav}`}>
            <img src='./img/logo.png' class={s.logo} />
            <input type='text' class={s.searchbar} placeholder='Search ' />
        </div>
    )
}

export default Nav;
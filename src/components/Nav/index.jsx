import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getParkingLots } from '../../actions';
import { BsSearch } from 'react-icons/bs';
import s from './Nav.module.scss';

export const Nav = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    function handleSearchChange(location) {
        setSearch(location)
    };
    function handleSubmit(event) {
        dispatch(getParkingLots(search))
        setSearch('');
        event.preventDefault()
    }
    return (
        <div className={`p-3 d-flex justify-content-between ${s.nav}`}>
            <img alt='logo' src='./img/logo.png' className={s.logo} />
            <div className={s.searchContainer}>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input type='text' placeholder='Search...' className={s.searchbar} onChange={(event) => handleSearchChange(event.target.value)} value={search} />
                </form>
                <button className={s['search-button']} onClick={() => dispatch(getParkingLots(search))}>
                    <BsSearch color='white' />
                </button>
            </div>
        </div>
    )
}

export default Nav;
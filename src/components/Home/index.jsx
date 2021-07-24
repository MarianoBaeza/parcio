import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BsSearch } from 'react-icons/bs';
import { getParkingLots } from '../../actions';
import ParkingList from './ParkingList';
import s from './Home.module.scss';

export const Home = () => {
    const dispatch = useDispatch();
    const { parkingLots } = useSelector((state) => ({ ...state }));

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
        <div className={`d-flex flex-column ${s['main-container']}`}>
            {
                parkingLots ?
                    <ParkingList />
                    :
                    <div className={`d-flex justify-content-center flex-column flex-grow-1 align-items-center`}>
                        <h1 className={`text-dark ${s.title}`}>Welcome to Parcio</h1>
                        <div className={s.searchbar}>
                            <form onSubmit={(event) => handleSubmit(event)} className={s.form}>
                                <input type='text' placeholder='Search country' className={s['search-input']} onChange={(event) => handleSearchChange(event.target.value)} value={search} />
                            </form>
                            <button className={s['search-button']} onClick={() => dispatch(getParkingLots(search))}>
                                <BsSearch color='white' />
                            </button>
                        </div>

                    </div>

            }
        </div>

    )
}

export default Home;
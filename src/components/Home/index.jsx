import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getParkingLots } from '../../actions';

import s from './Home.module.scss';
import {BsSearch} from 'react-icons/bs';

export const Home = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    function handleSearchChange(location) {
        setSearch(location)
    };

    return (
        <div>
            <div class={`d-flex flex-column vh-100`}>
                <div class={`d-flex justify-content-center flex-column flex-grow-1 align-items-center ${s['main-bg']}`} style={{backgroundImage: "url('./img/avenue.jpg')"}} >
                    <h1 class={`text-light ${s.title}`}>Welcome to Parcio</h1>
                    <div class={s.searchbar}>
                        <input type='text' placeholder='Search country' class={s['search-input']} onChange={(event) => handleSearchChange(event.target.value)}
                        value={searched}/>
                        <button class={s['search-button']}>
                            <BsSearch color='white' onClick={() => getParkingLots(search)}/>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
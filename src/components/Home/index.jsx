import React from 'react';
import Nav from '../Nav';
import s from './Home.module.scss';
import {BsSearch} from 'react-icons/bs';

export const Home = () => {
    return (
        <div>
            <div class={`d-flex flex-column vh-100`}>
                <Nav />
                <div class={`d-flex justify-content-center flex-column flex-grow-1 align-items-center ${s['main-bg']}`} style={{backgroundImage: "url('./img/avenue.jpg')"}} >
                    <h1 class={`text-light ${s.title}`}>Welcome to Parcio</h1>
                    <div class={s.searchbar}>
                        <input type='text' placeholder='Search country' class={s['search-input']} />
                        <button class={s['search-button']}>
                            <BsSearch color='white' />
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
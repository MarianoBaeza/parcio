import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import s from './ListItem.module.scss';

export const ListItem = ({ image, address, starRating, reviewCount, url, city }) => {


    let score = (reviewCount * starRating) / (reviewCount + 1);
    let stars = rating(starRating);

    function rating(starRating) {
        let totalStars = [];
        let fillStars = Math.floor(starRating);
        for (let i = 0; i < 3; i++) {
            fillStars = fillStars - 1;
            if (fillStars >= 0) {
                totalStars.push(0);
            }
        }
        if (Math.floor(starRating) !== starRating) {
            totalStars.push(1);
        }
        return totalStars;
    }
    return (
        <div className={s.item} >
            <div className={s['image-container']} >
                <img alt='parking' src={image} className={s.image} />
            </div>
            <div className={s.starsContainer}>
                {
                    stars.map((star, index )=> {
                        if (star === 0) {
                            return <BsStarFill key={index} className={s.star} />
                        } else if (star === 1) {
                            return <BsStarHalf key={index} className={s.star} />
                        }
                    })
                }
            </div>
            <div className={s.info}>
                <span>Parking lot Score: {score.toFixed(2)}</span>
                <h5>Reviews: {reviewCount}</h5>
                <h5>City: {city}</h5>
                <h5>Address: {address}</h5>
            </div>
            <a href={url} className={s.link}> See more</a>
        </div>
    )
};

export default ListItem;
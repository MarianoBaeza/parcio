import React from 'react';
import ListItem from './ListItems';
import { useSelector } from "react-redux";
import s from './ParkingList.module.scss';

export const ParkingList = () => {
    const { parkingLots } = useSelector((state) => ({ ...state }));

    return (
        <div className={s.list}>
            {
                parkingLots && parkingLots.businesses.map(parking => {
                    if (parking.rating <= 3) {
                        return (
                            <ListItem key={parking.alias} image={parking.image_url} address={parking.location.address1} city={parking.location.city} starRating={parking.rating} reviewCount={parking.review_count} url={parking.url} />
                        )
                    }
                })
            }
        </div>
    )
};

export default ParkingList;
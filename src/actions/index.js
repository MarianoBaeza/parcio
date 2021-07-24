import Axios from 'axios';
import { API_KEY } from '../env';

export const GET_PARKING_LOTS = 'GET_PARKING_LOTS';

let config = {
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
      }
}

export function getParkingLots(location) {
    return (dispatch) => {
        return Axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=parking&location=' + location, config)
            .then(res => res.data)
            .then(res => {
                dispatch({ type: GET_PARKING_LOTS, payload: res })
            })
    }
};
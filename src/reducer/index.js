import {GET_PARKING_LOTS} from '../actions'

const initialState = {
    parkingLots: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PARKING_LOTS:
            return {
                ...state,
                parkingLots = action.payload
            }
    }
}

export default reducer;
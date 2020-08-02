import {FETCH_ROLE} from "../stateConstants/actionConstants";
const initialState = {
    roles:[],
    loading:true,
    role:{}

}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_ROLE:
            return {
                ...state,
                roles: action.payload,
                loading: false
            }
        default:
            return state
    }

}
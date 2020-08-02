import {STORE_NEW_BANK, FETCH_ADMIN_BANKS, UPDATE_BANK} from "../actionConstants/adminActionConstants";
const initialState = {
    response:{
        status:false,
        message:'',
        data:{}
    },
    banks:[],
    loading:true
}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_ADMIN_BANKS:
            return {
                ...state,
                banks: action.payload,
                loading: false
            }
        case STORE_NEW_BANK:
            return{
                ...state,
                response: action.payload
            }
        case UPDATE_BANK:
            return {
                ...state,
                response: action.payload
            }
        default:
            return state

    }
}

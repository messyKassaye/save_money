import {FETCH_ADMIN_BANKS, STORE_NEW_BANK, UPDATE_BANK} from "../actionConstants/adminActionConstants";
import axios from 'axios'
import {ADMIN_API_URL} from "../../../../constants/constants";

const PATH='banks'

export const fetchAdminBanks = ()=>dispatch=>{
    axios.get(`${ADMIN_API_URL}${PATH}`)
        .then(response=>response.data)
        .then(res=>dispatch({
            type:FETCH_ADMIN_BANKS,
            payload: res.data
        }))
}

export const updateBank = (data,id)=>dispatch=>{
    axios.put(`${ADMIN_API_URL}${PATH}/${id}`,data)
        .then(response=>response.data)
        .then(res=>dispatch({
            type:UPDATE_BANK,
            payload:res
        }))
}
export const storeBank = (data)=>dispatch=>{
    axios.post(`${ADMIN_API_URL}${PATH}`,data)
        .then(response=>response.data)
        .then(res=>dispatch({
            type:STORE_NEW_BANK,
            payload:res
        }))
}

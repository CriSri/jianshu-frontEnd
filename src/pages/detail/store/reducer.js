import { fromJS } from 'immutable'
import {CHANGE_DETAIL} from './constants'
const defaultState = fromJS({
    postid: "",
    title: '',
    content: '',
    owner: '',
    timestamp: ''
});

export default (state = defaultState,action)=>{
    switch(action.type){
        case CHANGE_DETAIL:
            return state.merge({
                postid: action.postid,
                title: action.title,
                content: action.content,
                owner: action.owner,
                timestamp: action.timestamp
            })
        default :
                 return state
    }

   
}
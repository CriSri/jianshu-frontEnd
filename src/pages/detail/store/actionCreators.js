
import axios from 'axios'
import {CHANGE_DETAIL} from './constants'
const changeDetail = (postid,title,content,owner,timestamp) => ({
    type: CHANGE_DETAIL,
    postid,
    title,
    content,
    owner,
    timestamp,
})
export const getDetail = (postid) => {
    return (dispatch) => {
        axios.get(`/api/detail/${postid}`)
        .then((res)=>{
            console.log(res)
            const result = res.data.data
            dispatch(changeDetail(result.postid,result.title,result.content,result.owner,result.timestamp))

        })
    }
}
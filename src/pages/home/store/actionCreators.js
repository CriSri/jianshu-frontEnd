import axios from 'axios'
import {CHANGE_HOME_DATA } from "./constants"
export const getHomeInfo = ()=> {
    return (dispatch) => {
    axios.get('/api/home.json')
        .then((res)=>{
            const result = res.data.data
            console.log(result)
            const action = {
                type: CHANGE_HOME_DATA ,
                articleList: result.articleList,
                recommendList: result.recommendList,
                topicList: result.topicList
            }
            dispatch(action)
        })
        .catch(()=>{
            console.log('error')
        })
        
    }
}
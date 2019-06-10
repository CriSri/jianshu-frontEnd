import axios from 'axios'
import {CHANGE_HOME_DATA , ADD_ARTICLE_LIST,TOGGLE_TOP_SHOW} from "./constants"
import {fromJS} from 'immutable'
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
const addHomeList = (list) => ({
    type: ADD_ARTICLE_LIST,
    list: fromJS(list)
})
export const getMoreList = () => {
    return (dispatch)=> {
        axios.get('/api/homeList.json')
        .then((res)=>{
            const result = res.data.data
            dispatch(addHomeList(result))
        })
        .catch((error)=>[
            console.log('error')
        ])
    }
}
export const toggleTopShow = (show) => ({
    type: TOGGLE_TOP_SHOW,
    show
})
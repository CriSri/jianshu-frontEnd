import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOGGLE_TOP_SHOW } from './constants';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll: true
});

export default (state = defaultState,action)=>{
    switch(action.type){
        case CHANGE_HOME_DATA : 
           return(
               state.merge({
                    topicList: fromJS(action.topicList),
                    articleList: fromJS(action.articleList),
                    recommendList: fromJS(action.recommendList),
               })
           )
        case ADD_ARTICLE_LIST : 
               return (
                   state.set('articleList',state.get('articleList').concat(action.list))
               )
        case TOGGLE_TOP_SHOW : 
                return (
                    state.merge({
                        'showScroll': action.show
                    })
                )
        default :
                 return state
    }

   
}
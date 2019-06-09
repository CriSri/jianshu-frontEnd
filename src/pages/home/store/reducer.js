import { fromJS } from 'immutable'
const defaultState = fromJS({
    topicList: [
    {
        id:1,
        title:'JavaScript',
        imgURL: '//upload.jianshu.io/collections/images/226506/Unofficial_JavaScript_logo_2.svg.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    },
    {
        id:2,
        title:'TypeScript',
        imgURL: '//upload.jianshu.io/collections/images/226506/Unofficial_JavaScript_logo_2.svg.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }],
    

});

export default (state = defaultState,action)=>{
    switch(action.type){
       
        default :
                 return state
    }

   
}
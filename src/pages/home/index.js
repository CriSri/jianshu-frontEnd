import React ,{Component} from 'react'
import {List,Topic,Writer,Recommend} from './components'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'
export default class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>left
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>right
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
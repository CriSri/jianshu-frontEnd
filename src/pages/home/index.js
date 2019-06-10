import React ,{Component} from 'react'
import {List,Topic,Writer,Recommend} from './components'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
 class Home extends Component {
    componentDidMount(){
      this.props.change_home_data()
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
// const mapStateToProps = ({

// })
const DispatchActionToProps =(dispatch) =>  ({
    change_home_data(){
      const action = actionCreators.getHomeInfo();
      dispatch(action)
    }
})
export default connect(null,DispatchActionToProps)(Home)
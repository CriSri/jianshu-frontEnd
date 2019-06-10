import React ,{Component} from 'react'
import {List,Topic,Writer,Recommend} from './components'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
 class Home extends Component {
    componentDidMount(){
      this.props.change_home_data()
      this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents =() => {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    handleScrollTop = () => {
        window.scrollTo(0,0)
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
                {
                    this.props.showScroll ? 
                            <BackTop onClick={this.handleScrollTop}>
                            顶部
                         </BackTop> : null

                }
                
            </HomeWrapper>
        )
    }
}
// const mapStateToProps = ({

// })
const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const DispatchActionToProps =(dispatch) =>  ({
    change_home_data(){
      const action = actionCreators.getHomeInfo();
      dispatch(action)
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState,DispatchActionToProps)(Home)
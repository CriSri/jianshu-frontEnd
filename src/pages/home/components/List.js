import React ,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    ListWrapper,
    ListInfo,
    LoadMore,
} from '../style'
import {Link , Route} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'
class List extends PureComponent {
    render(){
        return (
            <div>
                {
                    this.props.articleList.map((item,index)=>{
                       return(
                        <Link key= {index} to={'/detail/' + item.get('id')}>
                       
                            <ListWrapper>
                                <img className="pic" src={item.get('imgUrl')} alt=""/>
                                <ListInfo key={item.get('id')}>
                                    <a className="title" href="https://www.jianshu.com/">{item.get('title')}</a>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                                
                            </ListWrapper>
                        </Link>
                   )})
                }
                <LoadMore onClick={this.props.getMoreList}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapState = (state)=>({
    articleList: state.getIn(['home','articleList'])
});
const mapDispatch = (dispatch) => ({
    getMoreList(){
        const action = actionCreators.getMoreList()
        dispatch(action)
    }
})
export default connect(mapState,mapDispatch)(List)
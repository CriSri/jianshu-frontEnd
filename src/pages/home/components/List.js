import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {
    ListWrapper,
    ListInfo,
    LoadMore,
} from '../style'
class List extends Component {
    render(){
        return (
            <div>
                {
                    this.props.articleList.map((item)=>{
                       return(
                        <ListWrapper>
                            <img className="pic" src={item.get('imgUrl')} alt=""/>
                            <ListInfo key={item.get('id')}>
                                <a className="title" href="https://www.jianshu.com/">{item.get('title')}</a>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                            
                        </ListWrapper>
                   )})
                }
                <LoadMore>加载更多</LoadMore>
            </div>
        )
    }
}
const mapState = (state)=>({
    articleList: state.getIn(['home','articleList'])
});
export default connect(mapState,null)(List)
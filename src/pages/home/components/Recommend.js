import React ,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem
}from '../style'
class Recommend extends PureComponent {
    render(){
        return (
            <RecommendWrapper>
               {
                   this.props.recommendList.map((item)=>
                     <RecommendItem imgUrl={item.get('imgUrl')}/>
                   )
                   
               }
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => ({
    recommendList: state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend)
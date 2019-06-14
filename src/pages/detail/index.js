import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {
    DetailWrapper,
    Header,
    Content,
} from './style'
import { actionCreators } from './store';
 class Detail extends Component {
     componentDidMount(){
        this.props.getDetail()
     }
    render(){
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
            </DetailWrapper>
        )
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(){
        const action = actionCreators.getDetail();
        dispatch(action);
    }
})
export default connect(mapState,mapDispatch)(Detail)

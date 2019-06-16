import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {
    DetailWrapper,
    Header,
    Content,
} from './style'
import { actionCreators } from './store';
 class Detail extends Component {
     constructor(props){
        super(props)
        this.postid = props.match.params.id
        console.log(props.match.params.id)
     }
     componentDidMount(){
        this.props.getDetail(this.postid)
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
    getDetail(postid){
        const action = actionCreators.getDetail(postid);
        dispatch(action);
    }
})
export default connect(mapState,mapDispatch)(Detail)

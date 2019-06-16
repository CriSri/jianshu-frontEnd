import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {GlobalStyle} from "../../resource/iconfont/iconfont"
import {
    Container,
    RegisterHeader,
    Formdata
} from './styled'
import {Link} from 'react-router-dom'
class Register extends Component { 
    render(){
        return (
            <div style={{background: '#f1f1f1',padding:'50px 0 15px 78px'}}>
                <GlobalStyle/>
                <Link to="/">
                    <img style={{width: '100px'}}src="https://i.loli.net/2019/06/14/5d033adf648b289385.png" alt=""/>
                </Link>
                <Container>
                    <RegisterHeader>
                        <div>
                            <Link to="/login">
                                <a href="">登陆</a>
                            </Link>
                            <b>|</b>
                            <a href="" className="active">注册</a>
                        </div>
                    </RegisterHeader>
                    <Formdata action="/register" method="post">
                        <div style={{position:"relative"}}>
                            <i className="iconfont ic-phone">&#xe648;</i>
                            <input type="text" name="name" placeholder="手机号或邮箱"/>
                        </div>
                        <div style={{position:"relative"}}>
                            <i className="iconfont ic-pw">&#xe608;</i>
                            <input class="pw" type="password" name="password" placeholder="注册密码"/>
                        </div>
                        <div style={{position:"relative"}}>
                            <i className="iconfont ic-pw">&#xe608;</i>
                            <input class="repeatPW" type="password" name="repeat_password" placeholder="重复密码"/>
                        </div>
                        
                        <button>Register</button>
                    </Formdata>
                </Container>
            </div>
          )
    }
}
const mapState = (state) => ({

})
const mapDispatch = (dispatch) => ({

})
export default connect(mapState,mapDispatch)(Register)
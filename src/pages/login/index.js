import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {GlobalStyle} from "../../resource/iconfont/iconfont"
import {
    Container,
    LoginHeader,
    Formdata
} from './styled'
import {Link} from 'react-router-dom'
class Login extends Component { 
    render(){
        return (
            <div style={{background: '#f1f1f1',padding:'50px 0 15px 78px'}}>
                <GlobalStyle/>
                <Link to="/">
                    <img style={{width: '100px'}}src="https://i.loli.net/2019/06/14/5d033adf648b289385.png" alt=""/>
                </Link>
                <Container>
                    <LoginHeader>
                        <div>
                            <a href="" className="active">登陆</a>
                            <b>  |  </b>
                            <Link to="/register">
                                <a href="">注册</a>
                            </Link>
                        </div>
                    </LoginHeader>
                    <Formdata action="/login" method="post">
                        <div>   
                            <i className="iconfont iconUser">&#xe671;</i>
                            <input type="text" name="name" placeholder="手机号或邮箱"/>
                        </div>
                        <div style={{position:'relative'}}>
                            <i className="iconfont iconPW">&#xe608;</i>
                            <input class="pw" type="password" name="password" placeholder="密码"/>
                        </div>
                        <button>Login</button>
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
export default connect(mapState,mapDispatch)(Login)

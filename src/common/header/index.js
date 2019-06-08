import React from 'react';
import {connect} from 'react-redux'
import {GlobalStyle} from "../../resource/iconfont/iconfont"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'
import {actionCreators} from './store'
import {CSSTransition} from 'react-transition-group'
const Header = (props) => {
    
        return (
           
           <HeaderWrapper>
               <GlobalStyle/>
               <Logo/>
               <Nav>
                   <NavItem className="left active" >首页</NavItem>
                   <NavItem className="left download">下载App</NavItem>
                   <NavItem className="right">登陆</NavItem>
                   <NavItem className="right">
                       <i className="iconfont">&#xe601;</i>
                   </NavItem>
                   <SearchWrapper>
                        <CSSTransition 
                            in={props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch onFocus={props.handleFocus} onBlur={props.handleBlur} className={props.focused? 'focused' : ''}></NavSearch>
                           
                        </CSSTransition>
                        <i  className={props.focused? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
                    </SearchWrapper>
               </Nav>
               <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe605;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
               </Addition>
           </HeaderWrapper>
        )
    }

const mapStateToProps = (state)=>{
        return {
           focused: state.header.get('focused')
        }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleFocus(){
            dispatch(actionCreators.searchFocus())
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Header)
import React, {Component} from 'react';
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
import {CSSTransition} from 'react-transition-group'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            focused: false,
        }
    }
    handleFocus = ()=>{
        this.setState({
            focused: true
        })
    }
    handleBlur = ()=>{
        this.setState({
            focused: false
        })
    }
    render(){
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch onFocus={this.handleFocus} onBlur={this.handleBlur} className={this.state.focused? 'focused' : ''}></NavSearch>
                           
                        </CSSTransition>
                        <i  className={this.state.focused? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
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
}
export default  Header
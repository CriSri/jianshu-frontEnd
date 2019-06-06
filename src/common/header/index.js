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
class Header extends Component{
    render(){
        return (
           
           <HeaderWrapper>
           <GlobalStyle/>
               <Logo/>
               <Nav>
                   <NavItem className="left active" >首页</NavItem>
                   <NavItem className="left">下载App</NavItem>
                   <NavItem className="right">登陆</NavItem>
                   <NavItem className="right">
                       <i className="iconfont">&#xe601;</i>
                   </NavItem>
                   <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe600;</i>
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
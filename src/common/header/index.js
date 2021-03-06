import React,{Component} from 'react';
import {connect} from 'react-redux'
import { toJS } from 'immutable'
import {GlobalStyle} from "../../resource/iconfont/iconfont"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style'
import {actionCreators} from './store'
import {CSSTransition} from 'react-transition-group'
import { Link } from 'react-router-dom'
class Header extends Component{
    getListArea = (show)=>{
        const {page,focused,list,mouseIn,totalpage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
        let pageList = [];  
        let newList = list.toJS();
        if(newList.length){
            for(let i = (page - 1) * 10; i < page * 10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
       
        if(show || mouseIn){
            return <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <SearchInfoTitle>
                                    热门搜索
                            
                            <SearchInfoSwitch className='searchtitle' onClick={() => handleChangePage(page,totalpage,this.spinIcon)}>
                                <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                                <div style={{overflow: 'hidden'}}>
                                    {
                                        pageList
                                    }
                                </div>
                            </SearchInfo>
        }else {
            return null
        }
    }
    render(){
        return(
         <HeaderWrapper>
               <GlobalStyle/>
               <Link to="/">
                    <Logo/>
               </Link>
               <Nav>
                   <NavItem className="left active" >首页</NavItem>
                   <NavItem className="left download">下载App</NavItem>
                   <Link to="/login">
                    <NavItem className="right">登陆</NavItem>
                   </Link>
                   
                   <NavItem className="right">
                       <i className="iconfont">&#xe601;</i>
                   </NavItem>
                   <SearchWrapper>
                        <CSSTransition 
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch onFocus={this.props.handleFocus} onBlur={this.props.handleBlur} className={this.props.focused? 'focused' : ''}></NavSearch>
                           
                        </CSSTransition>
                        <i  className={this.props.focused? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe600;</i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
               </Nav>
               <Addition>
                   <Link to="/editor">
                        <Button className="writing">
                            <i className="iconfont">&#xe605;</i>
                            写文章
                        </Button>
                   </Link>
                   <Link to="/register">
                    <Button className="reg">注册</Button>
                   </Link>
                    
               </Addition>
           </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state)=>{
        return {
           focused: state.getIn(['header','focused']),
           list: state.getIn(['header','list']),
           page: state.get('header').get('page'),
           mouseIn: state.getIn(['header','mouseIn']),
           totalpage: state.getIn(['header','totalpage'])
        }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalpage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,"")
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate('+ (originAngle + 360)+ 'deg)'
            if(page < totalpage){
                dispatch(actionCreators.changePage(page + 1))
            }else if(page == totalpage){
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Header)
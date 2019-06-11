import styled from 'styled-components'
import logoPic from '../../resource/logo.png'
export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`
export const Logo = styled.div`

    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:58px;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    height: 100%;
    width: 960px;
    padding-right: 70px; 
    box-sizing: border-box;
    margin: 0 auto;
    
`
export const NavItem = styled.div`
     line-height: 58px;
     padding: 0px 15px;
     font-size: 17px;
     color: #333;
     cursor: pointer;
     &.left{
         float: left;
     }
     &.download:hover{
         background-color: #f5f5f5
     }
     &.right{
        float: right;
        color: #969696
     }
     &.active{
         color: #ea6f5a
     }
`
export const SearchWrapper = styled.div`
     
     float:left;
     position: relative;
     
     .zoom{
         position: absolute;
         right: 5px;
         bottom: 5px;
         width: 30px;
         line-height: 30px;
         border-radius: 15px;
         text-align: center;
         &.focused{
             color: white;
             background-color: #777;
         }
     }
`
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
    box-sizing: border-box;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    width:160px;
    height: 38px;
    border: none;
    outline: 0;
    border-radius: 19px; 
    background-color: #eee
    &::placeholder{
        color: #969696
    }
    &.focused{
        width: 240px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top:58px;
    width:240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;

`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696
    span:hover{
        color:#2f2f2f
    }
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .3s ease-out;
        tranform-origin: center center;
    }
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    margin-right: 10px;
    margin-bottom: 15px;
    border-radius: 3px;
    color: #787878;
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 58px;
    box-sizing: border-box;

`
export const Button = styled.div`
    float:right;
    cursor: pointer;
    line-height:39px;
    padding: 0 20px;
    margin-top: 15px;
    margin-right: 20px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    &.reg{
        color: #ec6149;
    }
    &.reg:hover{
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236,97,73,.05);
    }
    &.writing{
        background-color: #ea6f5a;
        color: white;
    }
    &.writing:hover{
        background-color: #ec6149;
        color: white;
    }
`
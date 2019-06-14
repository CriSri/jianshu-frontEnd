import styled from 'styled-components'
export const Container = styled.div`
    margin: 0 auto;
    padding: 50px;
    width: 400px;
    height: 500px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background: #fff;
    box-sizing:border-box;
    z-index:1
`
export const LoginHeader = styled.h4`
    margin: 0 auto;
    padding: 10px;
    height: 104px;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    text-align:center;
    .active{
        border-bottom: 2px solid #ea6f5a;
        color: #ea6f5a;
    }
    a{
        padding: 10px;
        color: #969696;
        
    }
    a:hover{
        border-bottom: 2px solid #ea6f5a;
        text-decoration: none;
    }
`
export const Formdata = styled.form`
    display: block; 
    input{
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 4px 4px 0 0;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
       
    }
    .pw{
        border-top: 0px;
        border-radius: 0 0 4px 4px;
    }
    button{
        margin-top: 20px;
        width: 100%;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background: #3194d0;
        cursor: pointer;
        outline: none;

    }
    button:hover{
        background: #187cb7;
    }
`
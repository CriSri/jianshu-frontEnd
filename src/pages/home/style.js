import styled from 'styled-components'
export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;

`
export const HomeLeft = styled.div`
    float: left;    
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{
        height: 270px;
        width: 625px;
    }
   
`
export const HomeRight = styled.div`
    width: 240px;
    float: right
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    overflow:hidden;
`
export const TopicItem = styled.div`
    background: #f7f7f7;
    margin-left: 18px;
    margin-bottom: 18px;
    float:left;
    height: 32px;
    line-height:32px;
    font-size: 14px;
    color: #000;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;

    .topic-pic{
        margin-right: 10px;
        display: block;
        float: left;
        width:32px;
        height: 32px;
    }
`
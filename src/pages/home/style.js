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
        border-radius: 6px;
        height: 270px;
        width: 625px;
    }
   
`
export const HomeRight = styled.div`
   
    width: 280px;
    float: right
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    overflow:hidden;
    border-bottom: 1px solid #dcdcdc;
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
export const ListWrapper = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc
    .pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 4px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color:  #333;
        text-decoration: none
    }
    .title:hover{
        text-decoration: underline
    }
    .desc{
        line-height: 24px;
        color:#999;
        font-size: 13px;
    }

`

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 25px 0;
`
export const RecommendItem =styled.div`
    width: 280px;
    height: 50px;
    cursor: pointer;
    margin-bottom: 6px;
    background: url(${(props)=>props.imgUrl});
    background-size: contain;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    cursor: pointer;
    line-height: 40px;
    margin: 30px 0;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5
    :hover{
        background-color: #979797
    }
`
export const BackTop = styled.div`
    position: fixed;
    right : 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height:60px;
    background: green;
`
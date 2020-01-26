import React from 'react';     
import { Layout } from 'antd';
import Head from '../head/Head'
import VideoCard from '../card/Card'
import VideoPagination from '../pagination/VideoPagination'

const { Header, Footer, Content } = Layout;
const cards = [1,2,3,4,5,6,7,8,9]
function ListCard(){
    var items = [];
    console.log('into listCard function');
    for(let i = 0;i<10;i++){
        console.log(i);
        items.push(<VideoCard/>);
    }
    return(
        <div style={{}}>{items}</div>
    );
    
}
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                <Header><Head></Head></Header>
                <Content>
                    <div style={{float:"left",display:"inline"}}>
                        <ListCard/>
                        <VideoPagination/>
                    </div>
                </Content>
                <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}
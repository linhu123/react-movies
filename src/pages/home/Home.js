import React from 'react';     
import { Layout,Divider} from 'antd';
import Head from '../head/Head'
import VideoCard from '../card/Card'
import VideoPagination from '../pagination/VideoPagination'
import './Home.css'
import API from '../../configs/api'
const { Header, Footer, Content } = Layout;

function getMoviesListData(){
    API.get('movies/list').then(res=>{
        console.log(res.data.data[0]);
        console.log("123")
    })
}

function ListCard(){
    var items = [];
    console.log('into listCard function');
    API.get('movies/list').then(
        res=>{
            console.log(res);
            let result = res.data.data[0]
            if(result.code === '200'){
                result.data.map(index=>{
                    console.log(index.mId);
                })
            }
        }
    );
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
                <Footer>
                    <Divider />
                    <div className="bottomLable">
                        <span>使用条款和隐私条款。版权所有，保留一切权利。 赞助商：中国linflix-tec有限公司。 蒙ICP备xxxxxx01号</span>
                    </div>
                </Footer>
                </Layout>
            </div>
        );
    }
}

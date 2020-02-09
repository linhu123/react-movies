import React from 'react';     
import { Layout,Divider} from 'antd';
import Head from '../head/Head'
import VideoCard from '../card/Card'
import VideoPagination from '../pagination/VideoPagination'
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";  
import API from '../../configs/api';
import VideoPlay from '../video/VideoPlay';
const { Header, Footer, Content } = Layout;
function MYV() {
    let id = "test";
    console.log(id);
};
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            movies:[]
         };
    }
    componentWillMount(){
        API.get('movies/list').then(res=>{
            let result = res.data;
            if(result.code === 200){
                this.setState({
                    movies:result.data
                });
            }
        })
    }
    render(){
        return(
            <div>
                <Layout>
                <Header><Head></Head></Header>
                <Content>
                    <div style={{float:"left",display:"inline"}}>
                        <div>
                            {
                                this.state.movies.map((item,index)=>{
                                    console.log(item);
                                    return(
                                        <Link to={"/video/"+item.mId}>
                                        <VideoCard key={index} movie={JSON.stringify(item)}/>
                                        </Link>
                                    );
                                })
                            }
                        </div>
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

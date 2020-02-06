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
    var tulr = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";
    console.log('into listCard function');
    this.state.movies.map((item,index)=>{
        return(
            <VideoCard></VideoCard>
        );
    })
}
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
                                        <VideoCard key={index} movie={JSON.stringify(item)}/>
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

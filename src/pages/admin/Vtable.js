import React from "react";
import AddT from "../addT/AddT";
import { Table, Divider, Breadcrumb, Tag,Button} from 'antd';
import API from "../../configs/api"
export default class Vtable extends React.Component{
    constructor(){
        super();
        this.state={
            buttonValue:"新增",
            pageFlag:0,//0 table 1 add 2 edit
            columns:[
                {
                    title: '电影名称',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '播放量',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '电影图片',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '标签',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: tags => (
                        <span>
                            {tags.map(tag => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';
                                if (tag === 'loser') {
                                    color = 'volcano';
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </span>
                    ),
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            <a onClick={this.detailOnclick.bind(this,record.key)}>详情</a>
                            <Divider type="vertical" />
                            <a onClick={this.moviesDelete.bind(this,record.key)}>删除</a>
                        </span>
                    ),
                },
            ],
            data:[
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    key: '4',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '5',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '6',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
                {
                    key: '7',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '8',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '9',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ]            
        };
    };
    
    componentWillMount(){
        API.get("/react/movies").then(response=>{
            let tmp = response.data.data.columns;
            // console.log(tmp.columns);
            // console.log(JSON.parse(tmp));
            this.setState({
                // columns:tmp
            });
        })
    }
    render(){
        if(this.state.pageFlag==0){
            return(
                <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
                <Button type="primary" onClick={this.buttonAddOnclick.bind(this)}>{this.state.buttonValue}</Button>
            </div>
            );
        }
        else if (this.state.pageFlag==1) {
            return(
                <div>
                    <AddT></AddT>
                </div>
            );
        }
    };
    detailOnclick(moviesId){
        console.log("detail"+moviesId);
    }
    moviesDelete(moviesId){
        console.log("delete"+moviesId);
    }
    buttonAddOnclick(){
        console.log("buttonAddOnclick");
        this.setState({
            pageFlag:1
        });
    }
}
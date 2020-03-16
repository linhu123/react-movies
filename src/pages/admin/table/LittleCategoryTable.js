import React from "react";
import AddT from "../../addT/AddT";
import { Table, Divider, Breadcrumb, Tag,Button} from 'antd';
import API from "../../../configs/api"
export default class BigCategoryTable extends React.Component{
    constructor(){
        super();
        this.state={
            buttonValue:"新增",
            pageFlag:0,//0 table 1 add 2 edit
            columns:[
                {
                    title: '小分类名称',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '创建时间',
                    dataIndex: 'createTime',
                    key: 'createTime',
                },
                {
                    title: '修改时间',
                    dataIndex: 'updateTime',
                    key: 'updateTime',
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
            data:[]            
        };
    };
    
    componentWillMount(){
       this.updatePage(); 
    }
    updatePage(){
        API.get("/admin/littleCategoryList").then(response=>{
            let tmp = response.data.data;
            this.setState({
                data:tmp,
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
                    <AddT addFlag = "littleCategoryTable"></AddT>
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
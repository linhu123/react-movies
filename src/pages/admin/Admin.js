import React from "react";
import { Menu, Icon, Button,Breadcrumb } from 'antd';
import { Layout } from 'antd';
import AdminHead from './adminHead/AdminHead';
import "./Admin.css";
import Vtable from './Vtable';
import AddT from "../addT/AddT";
import BigCategoryTable from "./table/BigCategoryTable";
import LittleCategoryTable from "./table/LittleCategoryTable";
import AreaTable from "./table/AreaTable";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Admin extends React.Component {
    state = {
        collapsed: false,
        adminContent:"",
        videoCategory:""
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    menuVideoOnClick = onClick =>{
        this.setState({
            adminContent:<Vtable/>
        });
    };

    videoBigCategoryOnClick = onClick =>{
        console.log("videoCategoryOnClick")
        this.setState({
            adminContent:<BigCategoryTable/>
        });
    }
    videoLittleCategoryOnClick = onClick =>{
        this.setState({
            adminContent:<LittleCategoryTable/>
        });
    }
    videoAreaOnclick = onClick =>{
        console.log("videoAreaOnclick");
        this.setState({
            adminContent:<AreaTable/>
        });
    }
   

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.menuVideoOnClick}>
                            <Icon type="desktop" />
                            <span>视频管理</span>
                        </Menu.Item> 
                        <Menu.Item key="3" onClick={this.videoBigCategoryOnClick}>
                            <Icon type="desktop" />
                            <span>视频分类</span>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={this.menuVideoOnClick}>
                            <Icon type="desktop" />
                            <span>视频上传</span>
                        </Menu.Item>
                        <Menu.Item key="5" onClick={this.menuVideoOnClick}>
                            <Icon type="desktop" />
                            <span>联系我们</span>
                        </Menu.Item>   
                        <Menu.Item key="6" onClick={this.videoAreaOnclick}>
                            <Icon type="desktop" />
                            <span>视频归属</span>
                        </Menu.Item>
                        <Menu.Item key="7" onClick={this.videoLittleCategoryOnClick}>
                            <Icon type="desktop" />
                            <span>视频小分类</span>
                        </Menu.Item>                                         
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                            <AdminHead></AdminHead>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.state.adminContent}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

import React from "react";
import { Table, Divider, Tag } from 'antd';
import { Menu, Icon, Button } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  
  const data = [
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
  ];
  

export default class Admin extends React.Component{
      render() {
        return (
            <div style={{width:"100%",height:"100%"}}>
                <AdminLayout/>
            </div>
        );
      }
}

function VideoTable() {
    return(
        <Table columns={columns} dataSource={data} />
    );
};
export class AdminMenu extends React.Component{
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render(){
        return(
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                  <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
                >
                  <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="mail" />
                        <span>Navigation One</span>
                      </span>
                    }
                  >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="appstore" />
                        <span>Navigation Two</span>
                      </span>
                    }
                  >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                      <Menu.Item key="11">Option 11</Menu.Item>
                      <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                </Menu>
              </div>
        );
    };
}

function AdminLayout() {
    return(
        <div style={{width:"100%",height:"100%"}}>
          <Layout>
            <Header>Header</Header>  
            <Layout>
              <Sider><AdminMenu/></Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>

          </Layout>
        </div>
      );
          
}

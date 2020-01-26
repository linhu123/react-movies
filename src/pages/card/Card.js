import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class VideoCard extends React.Component{
    render(){
        return(
            <div style={{float:"left",marginLeft:"30px"}}>
                 <Card
                    style={{ width: 300}}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>,
            </div>
        );
    }
}

import React from 'react'
import { Pagination } from 'antd';

function showTotal(total) {
    return `Total ${total} items`;
}

export default class VideoPagination extends React.Component{
    render(){
        return(
            <div style={{ position:"absolute",/* 相对于容器绝对定位 */
                bottom:"1%"}}>
                <Pagination size="small" total={50} showSizeChanger showQuickJumper />
            </div>
        );
    }
}

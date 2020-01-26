import React from 'react'
import { Pagination } from 'antd';

function showTotal(total) {
    return `Total ${total} items`;
}

export default class VideoPagination extends React.Component{
    render(){
        return(
            <div style={{bottom:"1%",width:"100%",float:"right",paddingLeft:"60%"}}>
                <Pagination size="small" total={50} showSizeChanger showQuickJumper />
            </div>
        );
    }
}

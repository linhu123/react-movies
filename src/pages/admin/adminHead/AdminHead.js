import React from "react";
import { Avatar } from 'antd';
export default class AdminHead extends React.Component{
    constructor(){
        super();
    };
    render(){
        return(
            <div>
                <Avatar size="large" icon="user" style={{float:"right",marginRight:"30px",marginTop:"10px"}}/>
            </div>
        );
    };
}
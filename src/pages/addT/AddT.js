import React from "react";
import { Input,Button } from 'antd';
import API from "../../configs/api"
export default class AddT extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:""
        };
    }
    
    render(){
        return(
            <div>
                <label>视频大分类名：</label>
                <Input onChange={this.inputChange}></Input>
                <Button type="primary">确认</Button>
            </div>
        );
    }
    inputChange=(e)=>{
        this.setState({
            inputChange:e.target.value,
        });
    }
    videoBigCategory=()=>{
        API.get("/").then();


    }
}
function addVideo(params) {
        
}
function addLittleCategory(params) {
    return(
        <div>
            <label>视频分类名：</label>
            <Input></Input>
        </div>
    ); 
}


function addVideoArea(params) {
    
}
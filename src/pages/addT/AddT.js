import React from "react";
import {Input,Button,Alert} from 'antd';
import API from "../../configs/api"
export default class AddT extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            alertMessage:""
        };
    }
    render(){
        var addFlag = this.props.addFlag;
        if (addFlag === "bigCategoryTable") {
            return(
                <div>
                    <label>视频大分类名：</label>
                    <Input onChange={this.inputChange}></Input>
                    <Button type="primary" onClick={this.addBigCategory}>确认</Button>
                </div>
            );
        }else if(addFlag === "areaTable"){
            return(
                <div>
                    <label>视频归属：</label>
                    <Input onChange={this.inputChange}></Input>
                    <Button type="primary" onClick={this.addArea}>确认</Button>
                </div>
            );
        }else if(addFlag === "littleCategoryTable"){
            return(
                <div>
                <label>视频小分类：</label>
                <Input onChange={this.inputChange}></Input>
                <Button type="primary" onClick={this.addLittleCategory}>确认</Button>
            </div> 
            );
        }
        
    }
    messageAlert=()=>{
        return(
            <div>
                <Alert message={this.state.alertMessage} type="success"></Alert>
            </div>
        );
    }
    inputChange=(e)=>{
        this.setState({
            inputValue:e.target.value,
        });
    }
    addBigCategory=()=>{
        API.get("/admin/addBigCategory",{
            params:{
                bigCategory:this.state.inputValue,
            }
        }).then(response=>{
            if (response.data.code == 200) {
                console.log(200);
                alert(response.data.message);
            }else{
                alert(response.data.message);
            }
        });
    }
    addArea=()=>{
        API.get("/admin/addArea",{
            params:{
                areaContent:this.state.inputValue,
            }
        }).then(response=>{
            if (response.data.code == 200) {
                console.log(200);
                alert(response.data.message);
            }else{
                alert(response.data.message);
            }
        });
    }
}
function addVideo(params) {
        
}
function addLittleCategory(params) {
    API.get("/admin/addLittleCategory",{
        params:{
            littleCategory:this.state.inputValue,
        }
    }).then(response=>{
        if (response.data.code == 200) {
            console.log(200);
            alert(response.data.message);
        }else{
            alert(response.data.message);
        }
    }); 
}


function addVideoArea(params) {
    
}
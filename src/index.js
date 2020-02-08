import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './pages/home/Home'
// import Head from "./pages/head/Head";
import VideoPlayer from './pages/video/VideoPlay';
ReactDOM.render(<VideoPlayer image={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"} 
video={"http://192.168.43.237/1.mp4"}/>, document.getElementById('root'));


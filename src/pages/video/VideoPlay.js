import React from 'react';
import { Player } from 'video-react';
import { render } from '@testing-library/react';
import API from '../../configs/api';
// import "node_modules/video-react/dist/video-react.css"; // import css
import "C:\\Users\\linhu\\Desktop\\react-movies\\node_modules\\video-react\\dist\\video-react.css"
export default class VideoPlay extends React.Component{
    constructor(props){
      super(props);
      this.state={
        movies:{}
      };
    }
    componentWillMount(){
      let mId = this.props.match.params.mId;
      console.log("VideoPlayer:"+mId);
      API.get("/movies/playId",{
        params:{
          mId:mId
        }
      }).then(
        res=>{
          console.log(res);
          let result = res.data;
          this.setState({
            movies:result.data
          });
        }
      );
    }
    render(){
      return(
        <div style={{margin:"auto auto",width:"60%",height:"50%"}}>
            <Player ref={player => {    
            this.player = player;
          }} aspectRatio="16:9"
        playsInline
        poster={this.state.movies.mPicture}
        src={this.state.movies.mUrl}
      />
        </div>
        
      );
  };
} 
import React from 'react';
import { Player } from 'video-react';
import { render } from '@testing-library/react';
// import "node_modules/video-react/dist/video-react.css"; // import css
import "C:\\Users\\linhu\\Desktop\\react-movies\\node_modules\\video-react\\dist\\video-react.css"
export default class VideoPlay extends React.Component{
    render(){
      return(
        <div style={{margin:"auto auto",width:"60%",height:"50%"}}>
            <Player ref={player => {    
            this.player = player;
          }} aspectRatio="16:9"
        playsInline
        poster={this.props.image}
        src={this.props.video}
      />
        </div>
        
      );
  };
} 
import React, { Component } from 'react';
import './app.css';
import ReactPlayer from 'react-player';

export default class App extends Component {
  state = { videos: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then((searchResult) => {
        this.setState({ videos: searchResult });
        console.log(searchResult)
      });
  }

  renderVideos() {
    return this.state.videos.videoResults.map(((video, idx) => (

      <div className="card" key={idx} style={{width:'30%'}}>
        <ReactPlayer url={video.link} width='100%'/>
        <p>{video.title}</p>
      </div>


    )));
  }

  render() {

    if (!this.state.videos) {
      return null;
    }
    return (
      <div className="row">
        {this.renderVideos()}
      </div>
    );
  }
}

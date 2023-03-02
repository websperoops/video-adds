import './App.css';
import videojs from 'video.js';
import 'videojs-contrib-ads';
import 'videojs-ima';

function App() {

  const test = ()=>{
    const videourl = document.getElementById('videoId').value;
    var videoOptions = {
      controls: true,
      sources: [{
          // src: 'https://storage.googleapis.com/gvabox/media/samples/android.mp4',
          src: videourl,
          type: 'video/mp4',
      }]
    };
    
    var player = videojs('content_video', videoOptions);
    
    var imaOptions = {
      adTagUrl: 'https://scte-35-media-convert.s3.ap-south-1.amazonaws.com/Ad/ads.xml'
    };
    
    player.ima(imaOptions);
  }

  return (
    <div className="App">
      <input type="text" id="videoId" />
      <h1><button onClick={()=>test()}>click</button></h1>
      {/* <video id="content_video" class="video-js vjs-default-skin"
        controls preload="auto" width="640" height="360">
      <source src="https://storage.googleapis.com/gvabox/media/samples/android.mp4"
          type="video/mp4" />
    </video> */}
    <video id='content_video' className="video-js">
        <p className='vjs-no-js'>
            To view this video, please enable JavaScript and consider upgrading to a web browser that
            <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
        </p>
    </video>
    </div>
  );
}

export default App;

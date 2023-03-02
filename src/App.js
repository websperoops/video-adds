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
      adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator='
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

import React from 'react';


const BackgroundVideo = () => (
  <video autoPlay loop className="video-background" muted plays-inline="">
      <source src="./assets/images/demorolex.mp4" type="video/mp4" />
  </video>
);

export default BackgroundVideo;

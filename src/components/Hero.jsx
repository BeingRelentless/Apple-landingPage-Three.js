import React, { use, useEffect } from "react";

const Hero = () => {
    const videoRef = React.useRef(null);

   useEffect(() => {``
    if(videoRef.current) {
      videoRef.current.playbackRate = 2.5;
    }
   }, []);

  return <section id="hero">
    <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Pro" />
    </div>

    <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

    <button>Buy</button>
    <p>From $1599 or $133.25/mo. for 12 mo.*</p>

  </section>;
};

export default Hero;

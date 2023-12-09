import React from "react";

function Video() {
  return (
    <video
      className="w-screen h-screen object-cover"
      src="/lesArcs.mp4"
      autoPlay
      playsinline
      loop
      muted
      preload
    ></video>
  );
}

export default Video;

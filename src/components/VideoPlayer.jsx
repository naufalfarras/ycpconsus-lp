"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoPlayer = ({ url }) => {
  return <ReactPlayer url={url} />;
};

export default VideoPlayer;

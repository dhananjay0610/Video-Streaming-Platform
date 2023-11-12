import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="p-2 m-3 w-72 shadow-lg ">
      <img
        className="rounded-lg "
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="font-bold">{title}</div>
      <div>{channelTitle}</div>
      <div>{statistics?.viewCount}</div>
    </div>
  );
};

export default VideoCard;

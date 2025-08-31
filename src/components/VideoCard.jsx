import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  function formatViews(views) {
    const v = parseInt(views, 10);
    if (v < 1000) return v;
    if (v < 1000000) return parseInt(v / 1000, 10) + "K";
    return (v / 1000000).toFixed(1).replace(".0", "") + "M";
  }

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="mt-6 w-92 rounded-lg">
      <img
        className="rounded-lg w-92"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div>
        <h1 className="font-bold text-lg my-2">{title}</h1>
        <h4>{channelTitle}</h4>
        <h4>{formatViews(statistics?.viewCount || 0)} views</h4>
      </div>
    </div>
  );
};

export default VideoCard;

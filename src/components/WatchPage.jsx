import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_API } from "../utils/constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoInfo, setVideoInfo] = useState(null);

  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    const res = await fetch(YOUTUBE_API);
    const json = await res.json();
    const video = json.items.find((item) => item.id === videoId);
    setVideoInfo(video?.snippet || null);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 rounded-xl flex w-full">
        <div className="">
          <iframe
            className="rounded-xl"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      {videoInfo && (
        <h1 className="font-bold text-xl my-2 mx-5 w-250">{videoInfo.title}</h1>
      )}
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

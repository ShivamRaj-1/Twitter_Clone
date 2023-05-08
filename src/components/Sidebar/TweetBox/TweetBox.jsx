import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import { Button } from "@mui/base";
import { reRender } from "../../../atoms/reRender";
import { useRecoilState } from "recoil";

import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import MoodIcon from "@mui/icons-material/Mood";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PublicIcon from '@mui/icons-material/Public';

import TweetOptions from "./TweetOptions";

function TweetBox() {
  const [userTweet, setuserTweet] = useState("");

  const [atomRerender, setAtomRerender] = useRecoilState(reRender);

  function handleTweetClick() {
    const newTweet = {
      content: userTweet,
      likeCount: 0,
      commentCount: 0,
      reTweetsCount: 0,
    };

    const oldTweetList = JSON.parse(localStorage.getItem("userTweetList"));

    if (oldTweetList) {
      localStorage.setItem("userTweetList", JSON.stringify([newTweet, ...oldTweetList]));
    } else {
      localStorage.setItem("userTweetList", JSON.stringify([newTweet]));
    }

    setuserTweet("");

    setAtomRerender(!atomRerender);
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg" />

          <div>
          <textarea
            type="text"
            className="tweetBox_imageInput"
            placeholder="What's happenig?"
            value={userTweet}
            onChange={(e) => setuserTweet(e.target.value)}
          />



          <TweetOptions />

          <hr />

          <div className="Main-tweet">
            <div className="tweet-conte">
              <CropOriginalIcon />
              <GifBoxIcon />
              <PollIcon />
              <MoodIcon />
              <WorkHistoryIcon />
              <LocationOnIcon />
            </div>


            <Button onClick={handleTweetClick} className="tweetBox_tweetButton">
              Tweet
            </Button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
}


export default TweetBox;


import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";


import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import MoodIcon from "@mui/icons-material/Mood";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PublicIcon from '@mui/icons-material/Public';

import { reRender } from "../../../atoms/reRender";
import { useRecoilState } from "recoil";


import "./TweetDialogue.css";

import TweetOptions from "../TweetBox/TweetOptions";

export default function FormDialog({ open, handleClose }) {
  const [userTweet, setuserTweet] = React.useState("");

  const [atomRerender, setAtomRerender] = useRecoilState(reRender);

  function handleTweetClick() {
    const newTweet = {
      content: userTweet,
      likeCount: 0,
      commentCount: 0,
      reTweetsCount: 0,
      isLiked: false,
    };

    const oldTweetList = JSON.parse(localStorage.getItem("userTweetList"));

    if (oldTweetList) {
      localStorage.setItem(
        "userTweetList",
        JSON.stringify([newTweet, ...oldTweetList])
      );
    } else {
      localStorage.setItem("userTweetList", JSON.stringify([newTweet]));
    }

    setuserTweet("");
    handleClose();
    setAtomRerender(!atomRerender);

  }
  return (
    <div >
      <Dialog open={open} onClose={handleClose}  >
        <p className="Cross" onClick={handleClose} >
          ❌
        </p>
        <DialogContent>
          <div style={{ display: "flex" }}>
            <div className="image">
              <img
                height="50px"
                src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"
              />
            </div>
            <div className="textArea">
              <textarea
                type="text"
                className="tweetBoxInput"
                placeholder="What's happenig?"
                value={userTweet}
                onChange={(e) => setuserTweet(e.target.value)}
              />

              <TweetOptions />

              <hr />
              <div className="tweet-icons">
                <CropOriginalIcon />
                <GifBoxIcon />
                <PollIcon />
                <MoodIcon />
                <WorkHistoryIcon />
                <LocationOnIcon />
              </div>

              <Button onClick={handleTweetClick}>Tweet</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

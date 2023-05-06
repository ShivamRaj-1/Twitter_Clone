import React, { useEffect, useState } from 'react'
import "./TweetBox.css"
import { Button } from '@mui/base';
import { reRender } from '../../../atoms/reRender';
import { useRecoilState } from 'recoil';

function TweetBox() {

  const [userTweet, setuserTweet] = useState('')

  const [atomRerender, setAtomRerender]=useRecoilState(reRender)
  function handleTweetClick() {
    const newTweet = {
      'content': userTweet,
      "likeCount": 0,
      "commentCount": 0,
      "reTweetsCount": 0,
      "isLiked": false
    }
    const oldTweetList = JSON.parse(localStorage.getItem('userTweetList'))
    if(oldTweetList){
      localStorage.setItem('userTweetList', JSON.stringify([newTweet, ...oldTweetList ]) )
    }
    else{
      localStorage.setItem('userTweetList', JSON.stringify([newTweet]) )
    }
  
    setuserTweet('')    
    setAtomRerender(!atomRerender)
  }

  return (
    <div className='tweetBox'>
        <form >
            <div className='tweetBox_input'>
                 <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"  />

                <textarea type="text"
                    className='tweetBox_imageInput'
                    placeholder="What's happenig?"
                    value={userTweet}
                    onChange={(e)=> setuserTweet(e.target.value) }
                />
                <Button onClick={handleTweetClick} className="tweetBox_tweetButton">Tweet</Button>
            </div>
        </form>
    </div>
  )
}
export default TweetBox
import React from 'react'
import "./TweetBox.css"
import { Button } from '@mui/base';
function TweetBox() {
  return (
    <div className='tweetBox'>
        <form >
            <div className='tweetBox_input'>
                 <img src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"  />

                <textarea type="text"
                    className='tweetBox_imageInput'
                    placeholder="What's happenig?"
                />

                <Button className="tweetBox_tweetButton">Tweet</Button>
            </div>
        </form>

    </div>
  )
}

export default TweetBox
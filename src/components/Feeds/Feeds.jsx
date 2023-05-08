import React, { useState } from 'react'
import './Feeds.css'
import { TweetsData } from '../../utils/TweetsData';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import { useRecoilState } from 'recoil';
import {reRender} from '../../atoms/reRender' 


export default function Feeds({ show }) {

    const [atomRerender, setAtomRerender] = useRecoilState(reRender)

    const [feedCount, setFeedCount] = useState(10)

    function handleLikeClick(elem) {
        if (elem.isLiked === true) {
            elem['isLiked'] = false;
            elem['likeCount'] = elem.likeCount - 1
            setAtomRerender(!atomRerender)
        } else {
            elem['isLiked'] = true;
            elem['likeCount'] = elem.likeCount  + 1
            setAtomRerender(!atomRerender)
        }

        // console.log(elem.isLiked);
    }

    function handleCommentClick(elem) {
        if (elem.isCommented === true) {
          elem["isCommented"] = false;
          elem["commentCount"] = elem.commentCount - 1;
          setAtomRerender(!atomRerender)
        } else {
          elem["isCommented"] = true;
          elem["commentCount"] = elem.commentCount  + 1;
          setAtomRerender(!atomRerender)
        }
        // console.log(elem.isCommented);
      }

      function handleShareClick(elem) {
        if (elem.isShared === true) {
          elem["isShared"] = false;
          elem["reTweetsCount"] = elem.reTweetsCount - 1;
          setAtomRerender(!atomRerender)
        } else {
          elem["isShared"] = true;
          elem["reTweetsCount"] = elem.reTweetsCount  + 1;
          setAtomRerender(!atomRerender)
        }
        // console.log(elem.isShared);
      }

    return (

        <>
            {
                show ? (
                    <div>


                        {
                            JSON.parse(localStorage.getItem('userTweetList')) ?
                                (
                                    JSON.parse(localStorage.getItem('userTweetList')).map((elem, i) => {
                                        return (
                                            <div className='feeds_main_container' key={i}>
                                                <div>
                                                    <Avatar alt="Remy Sharp" src="" />
                                                </div>
                                                <section className='feeds_content_section' >
                                                    <div className='feeds_content_header'>
                                                        <div>
                                                            <b>{JSON.parse(localStorage.getItem('currentUser')).name}</b>
                                                            <VerifiedIcon fontSize='small' htmlColor='#2196f3' /> &nbsp;
                                                            @{JSON.parse(localStorage.getItem('currentUser')).name}
                                                        </div>
                                                        <div><MoreHorizIcon /></div>
                                                    </div>

                                                    <div className='feeds_content_body' >
                                                        <p>{elem.content}</p>
                                                    </div>

                                                    <div className='feeds_content_activity' >
                                                        <p><ChatBubbleOutlineOutlinedIcon /><span>{elem.commentCount}</span></p>
                                                        <p><LoopOutlinedIcon /><span>{elem.reTweetsCount}</span></p>
                                                        <p onClick={() => handleLikeClick(elem)} >
                                                            <FavoriteBorderOutlinedIcon htmlColor={elem.isLiked ? 'red' : ""} />
                                                            <span>{elem.likeCount}</span>
                                                        </p>
                                                        <p><BarChartRoundedIcon /><span>1</span></p>
                                                    </div>
                                                </section>
                                            </div>
                                        )
                                    })
                                ) : ''

                        }

                        {
                            TweetsData.filter((e, i) => i < feedCount).map((elem, i) => {
                                return (
                                    <div className='feeds_main_container' key={elem.id}>
                                        <div>
                                            <Avatar alt="Remy Sharp" src="" />
                                        </div>
                                        <section className='feeds_content_section' >
                                            <div className='feeds_content_header'>
                                                <div>
                                                    <b>{elem.tweetedBy.name}</b> <VerifiedIcon fontSize='small' htmlColor='#2196f3' /> &nbsp; @{elem.tweetedBy.name} . 15h
                                                </div>
                                                <div><MoreHorizIcon /></div>
                                            </div>


                                            <div className='feeds_content_body' >
                                                <p>{elem.content}</p>
                                            </div>

                                            <div className='feeds_content_imgDiv' >
                                                <img src={elem.image} alt="" />
                                            </div>

                                            <div className='feeds_content_activity' >
                                                <p onClick={() => handleCommentClick(elem)}>
                                                    <ChatBubbleOutlineOutlinedIcon htmlColor={elem.isCommented ? 'blue' : ""} />
                                                    <span>{elem.commentCount}</span>
                                                </p>

                                                <p onClick={() => handleShareClick(elem)}>
                                                    <LoopOutlinedIcon htmlColor={elem.isShared ? 'green' : ""} />
                                                    <span>{elem.reTweetsCount}</span>
                                                </p>

                                                <p onClick={() => handleLikeClick(elem)} >
                                                    <FavoriteBorderOutlinedIcon htmlColor={elem.isLiked ? 'red' : ""} />
                                                    <span>{elem.likeCount}</span>
                                                </p>
                                                <p><BarChartRoundedIcon /><span>205.2K</span></p>
                                            </div>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div>
                        {
                            TweetsData.filter((felm) => felm.tweetedBy.name === "Charlie Lynch").filter((e, i) => i < feedCount).map((elem, i) => {
                                return (
                                    <div className='feeds_main_container' key={elem.id}>
                                        <div>
                                            <Avatar alt="Remy Sharp" src="" />
                                        </div>
                                        <section className='feeds_content_section' >
                                            <div className='feeds_content_header'>
                                                <div>
                                                    <b>{elem.tweetedBy.name}</b> <VerifiedIcon fontSize='small' htmlColor='#2196f3' /> &nbsp; @{elem.tweetedBy.name} . 15h
                                                </div>
                                                <div><MoreHorizIcon /></div>
                                            </div>
                                            <div className='feeds_content_body' >
                                                <p>{elem.content}</p>
                                            </div>
                                            <div className='feeds_content_imgDiv' >
                                                <img src={elem.image} alt="" />
                                            </div>
                                            <div className='feeds_content_activity' >
                                                <p><ChatBubbleOutlineOutlinedIcon /><span>{elem.commentCount}</span></p>
                                                <p><LoopOutlinedIcon /><span>{elem.reTweetsCount}</span></p>
                                                <p onClick={() => handleLikeClick(elem)} >
                                                    <FavoriteBorderOutlinedIcon htmlColor={elem.isLiked ? 'red' : ""} />
                                                    <span>{elem.likeCount}</span>
                                                </p>
                                                <p><BarChartRoundedIcon /><span>205.2K</span></p>
                                            </div>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

            <button
                className='feeds_loadMoreBtn'
                onClick={() => setFeedCount(feedCount + 10)}
            >Load More</button>
        </>

    )
}

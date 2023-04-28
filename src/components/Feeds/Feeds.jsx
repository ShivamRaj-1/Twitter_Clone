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


export default function Feeds({ show }) {

    const [likeCount, setLikeCount] = useState(0)
    const [feedCount, setFeedCount] = useState(10)

    function handleLikeClick(elem) {
        if (elem.isLiked === true) {
            elem['isLiked'] = false;
            elem['likeCount'] = elem.likeCount - 1
            setLikeCount(elem.likeCount)
        } else {
            elem['isLiked'] = true;
            elem['likeCount'] = elem.likeCount + 1
            setLikeCount(elem.likeCount)
        }

        // console.log(elem.isLiked);
    }

    return (

        <>
            {
                show ? (
                    <div>
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
                ) : (
                    <div>
                        {
                            TweetsData.filter((felm)=> felm.tweetedBy.name === "Charlie Lynch" ).filter((e, i) => i < feedCount).map((elem, i) => {
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

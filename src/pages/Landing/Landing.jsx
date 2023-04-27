import React from 'react'
import land from './Landing.module.css';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GoogleBtn from '../../components/GoogleBtn/GoogleBtn';
import AppleBtn from '../../components/AppleBtn/AppleBtn';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
export default function Landing() {
    return (
        <>
            <div className={land.landing_background}>

                {/* SIDEBAR section of landing page */}
                <section className={land.landing_sidebar} >
                    <div><TwitterIcon htmlColor='#2196f3' fontSize='large' /></div>
                    <div>
                        <p><TagIcon /> <span>Explore</span></p>
                        <p><SettingsOutlinedIcon /> <span>Settings</span></p>
                    </div>
                </section>

                {/* FEED section of landing page */}
                <section className={land.landing_feed} >
                    <nav>
                        <h3>Explore</h3>
                        <span><SettingsOutlinedIcon/></span>
                    </nav>

                    <div>
                        <div><Avatar alt="Remy Sharp" src="" /></div>
                        <section className={land.feed_content}>
                            <div>
                                <div><b>Film Updates</b>@FilmUpdates . 15h</div>
                                <div><MoreHorizIcon /></div>
                            </div>
                            <div>
                                <p>Ryan Gosling on playing Ken in ‘BARBIE’: “Up until this point, I only knew Ken from afar. I didn't know Ken from within. I doubted my Ken-ergy. I didn't see it. But Margot [Robbie] and Greta [Gerwig] conjured this out of me.”</p>
                            </div>
                            <div>
                                <img src="https://pbs.twimg.com/media/Fuo1aVmXoAA143W?format=jpg&name=small" alt="" />
                            </div>
                            <div>
                                <p><ChatBubbleOutlineOutlinedIcon /><span>42</span></p>
                                <p><LoopOutlinedIcon /><span>1,701</span></p>
                                <p><FavoriteBorderOutlinedIcon /><span>12.1K</span></p>
                                <p><BarChartRoundedIcon /><span>205.2K</span></p>
                            </div>
                        </section>
                    </div>
                    <div>
                        <div><Avatar alt="Remy Sharp" src="" /></div>
                        <section className={land.feed_content}>
                            <div>
                                <div><b>Film Updates</b>@FilmUpdates . 15h</div>
                                <div><MoreHorizIcon /></div>
                            </div>
                            <div>
                                <p>Ryan Gosling on playing Ken in ‘BARBIE’: “Up until this point, I only knew Ken from afar. I didn't know Ken from within. I doubted my Ken-ergy. I didn't see it. But Margot [Robbie] and Greta [Gerwig] conjured this out of me.”</p>
                            </div>
                            <div>
                                <img src="https://pbs.twimg.com/media/Fuo1aVmXoAA143W?format=jpg&name=small" alt="" />
                            </div>
                            <div>
                                <p><ChatBubbleOutlineOutlinedIcon /><span>42</span></p>
                                <p><LoopOutlinedIcon /><span>1,701</span></p>
                                <p><FavoriteBorderOutlinedIcon /><span>12.1K</span></p>
                                <p><BarChartRoundedIcon /><span>205.2K</span></p>
                            </div>
                        </section>
                    </div>

                </section>

                {/* WIDGET section of landing page */}
                <section className={land.landing_widget} >
                    <div>
                        <h3>New to Twitter?</h3>
                        <p>Sign up now to get your own personalized timeline!</p>
                        <GoogleBtn />
                        <AppleBtn />
                        <p>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>.</p>
                    </div>
                </section>

            </div>


        </>
    )
}

export function LandingFooter() {
    return (
        
        < section className={land.landing_footer} >
            <div>
                <h2>Don’t miss what’s happening</h2>
                <p>People on Twitter are the first to know.</p>
            </div>
            <div>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </ section >

    )
}



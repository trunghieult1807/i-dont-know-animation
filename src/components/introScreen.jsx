import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import '../styles/introScreen.css';
import '../styles/magnetizeButton.css';
import logo from '../images/logo.jpeg';
import smoke from '../images/smoke.gif';
import {Link} from 'react-router-dom';
import $ from "jquery";
import {Cursor} from "../utils/magnetize";


const Hero = () => {
    useEffect(() => {
        const cursor = new Cursor()
        cursor.init();
        const SoundHover = $("#sound-hover")[0];
        $(".trigger-audio").on('mouseenter', function () {
            SoundHover.play();
        });
    });
    return (
        <div>
            <div className="cursor-wrap js-cursor-wrap">
                <div className="cursor js-cursor">
                    <svg height="60" width="60" className="circle">
                        <circle cx="30" cy="30" r="26" stroke="#fff" strokeWidth=".8" fill="transparent"/>
                    </svg>
                </div>
            </div>
            <div className="heroContainer">
                <div className="videoContainerIntro">
                    {/*<img src={smoke} alt="" className="smokeFilter"></img>*/}
                    <ReactPlayer
                        url="videos/intro.mp4"
                        width="100%"
                        height="100%"
                        position="relative"
                        overflow="hidden"
                        controls={false}
                        playing={true}
                        loop={true}
                        muted={true}
                        config={{youtube: {playerVars: {disablekb: 1, modestbranding: 0, controls: 0}}}}
                    />
                </div>
                <div className="titleContainer">
                    <h1 className="tracking-in-expand-fwd">Một chút Lofi </h1>
                    <img className="heroLogo" src={logo} alt=""/>
                    <div className="note-position-1 note-amination">&#9835;</div>
                    <div className="note-position-2 note-amination animation-delay-5">
                        &#9833;
                    </div>
                    <h3 className="subTitle">Lofi cho một ngày buồn ngủ</h3>

                    <div className="wrap">
                        <Link to="/music">
                            <button className="cerchio trigger-audio" data-dist="7">Géc gô</button>
                        </Link>
                    </div>

                    <audio className="invisible" id="sound-hover" controls="controls" preload="auto" muted={false}
                           autoPlay={true} loop={false}>
                        <source src="https://gnrm.se/norman/dist/upload/hover-sound.ogg"></source>
                    </audio>
                </div>
            </div>
        </div>
    )
}

export default Hero

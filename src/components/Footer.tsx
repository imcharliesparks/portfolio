import React from 'react';
import {FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/sparksfullstack/'},
    {Social: <FaGithub /> , link: 'https://github.com/SparksFullStack'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/SparksFullStack'},
    {Social: <FaEnvelope /> , link: 'mailto:sparksfullstack@gmail.com'},
]

const Footer = () => {
    return (
        <div id='contact' className="footer-style-2 ptb--15 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12">
                        {/* <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/home-one">
                                    <img src="/assets/images/logo/logo.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a target='_blank' rel='noopener noreferrer' href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="inner text-center mt--20">
                            <div className="text">
                                <p>Copyright Charlie Sparks© 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
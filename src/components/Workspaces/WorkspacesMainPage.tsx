import React, { Component, FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { AiFillHome } from "react-icons/ai";
import { FaNewspaper, FaFileContract, FaBook } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOrganization, GrUserSettings } from "react-icons/gr";
import { GiKing } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
import styled from "styled-components";
import { Post } from "./Post";

export const SliderComponent: FC = () => {
    let settings = {
        dot: true,
        infinity: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
    };
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="test">testuje</div>
                    <div className="iconWrap">
                        <div className="icon">
                            <AiFillHome />
                        </div>
                        <p>Corporate</p>
                    </div>
                    <div className="info"></div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="test"></div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    {" "}
                    <div className="test"></div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    {" "}
                    <div className="test"></div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="test">testuje</div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="test"></div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    {" "}
                    <div className="test"></div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    {" "}
                    <div className="test"></div>
                </div>
            </div>
        </Slider>
    );
};

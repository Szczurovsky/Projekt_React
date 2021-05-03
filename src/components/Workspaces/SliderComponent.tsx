import React, { Component, FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { Workspace } from "./WorkspaceComp";
import { AiFillHome } from "react-icons/ai";
import { FaNewspaper, FaFileContract, FaBook } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOrganization, GrUserSettings } from "react-icons/gr";
import { GiKing } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";

export const SliderComponent: FC = (props: any) => {
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
            {/* <div className="card-wrapper">
                <div className="card">
                    <div className="test"></div>
                    <div className="iconWrap">
                        <div className="icon">
                            <FaFileContract />
                        </div>
                        <p>Client contract</p>
                    </div>
                    <div className="info">
                        <p>
                            <FaFileContract />
                            Contract
                        </p>
                        <p>
                            <BsFillPeopleFill />
                            {Math.floor(Math.random() * 150)} users
                        </p>
                    </div>
                    <p>Last update {Math.floor(Math.random() * 30)} days ago</p>
                </div>
            </div> */}
            <Workspace
                icon={<FaFileContract />}
                workspace="Client contract"
                info="Contract"
                numberOfUsers={Math.floor(Math.random() * 150)}
                numberOfDays={Math.floor(Math.random() * 30)}
            />
            <Workspace
                icon={<FaFileContract />}
                workspace="Supplier Contract"
                info="Contract"
                numberOfUsers={Math.floor(Math.random() * 150)}
                numberOfDays={Math.floor(Math.random() * 30)}
            />
            <Workspace
                icon={<CgOrganisation />}
                workspace="Corporate"
                info="Corporate"
                numberOfUsers={Math.floor(Math.random() * 150)}
                numberOfDays={Math.floor(Math.random() * 30)}
            />
            <Workspace
                icon={<FaBook />}
                workspace="Group norms"
                info="Norms"
                numberOfUsers={Math.floor(Math.random() * 150)}
                numberOfDays={Math.floor(Math.random() * 30)}
            />{" "}
            <Workspace
                icon={<FaNewspaper />}
                workspace="Real estate contracts"
                info="Estate contracts"
                numberOfUsers={Math.floor(Math.random() * 150)}
                numberOfDays={Math.floor(Math.random() * 30)}
            />
            {/* <div className="card-wrapper">
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
            </div> */}
        </Slider>
    );
};

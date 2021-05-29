import React, { Component, FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Workspaces from "../WorkspacesComp/Workspaces";
import { Workspace } from "./WorkspaceComp";
import { AiFillHome } from "react-icons/ai";
import { FaNewspaper, FaFileContract, FaBook } from "react-icons/fa";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOrganization, GrUserSettings } from "react-icons/gr";
import { GiKing } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";

export const SliderComponent: FC = (props: any) => {
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
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
            <Link
                to={{
                    pathname: "/workspaces",
                    state: {
                        icon: "<FaFileContract />",
                        workspace: "Client Contract",
                        from: "root",
                        url: photosList?.[1]?.url,
                    },
                }}
            >
                <Workspace
                    icon={<FaFileContract />}
                    workspace="Client contract"
                    info="Contract"
                    numberOfUsers={Math.floor(Math.random() * 150)}
                    numberOfDays={Math.floor(Math.random() * 30)}
                />
            </Link>
            <Link
                to={{
                    pathname: "/workspaces",
                    state: {
                        icon: "<FaFileContract />",
                        workspace: "Supplier Contract",
                        from: "root",
                        url: photosList?.[2]?.url,
                    },
                }}
            >
                <Workspace
                    icon={<FaFileContract />}
                    workspace="Supplier Contract"
                    info="Contract"
                    numberOfUsers={Math.floor(Math.random() * 150)}
                    numberOfDays={Math.floor(Math.random() * 30)}
                />
            </Link>
            <Link
                to={{
                    pathname: "/workspaces",
                    state: {
                        icon: "<CgOrganisation />",
                        workspace: "Corporate",
                        from: "root",
                        url: photosList?.[3]?.url,
                    },
                }}
            >
                <Workspace
                    icon={<CgOrganisation />}
                    workspace="Corporate"
                    info="Corporate"
                    numberOfUsers={Math.floor(Math.random() * 150)}
                    numberOfDays={Math.floor(Math.random() * 30)}
                />
            </Link>
            <Link
                to={{
                    pathname: "/workspaces",
                    state: {
                        icon: "<FaBook />",
                        workspace: "Group norms",
                        from: "root",
                        url: photosList?.[4]?.url,
                    },
                }}
            >
                <Workspace
                    icon={<FaBook />}
                    workspace="Group norms"
                    info="Norms"
                    numberOfUsers={Math.floor(Math.random() * 150)}
                    numberOfDays={Math.floor(Math.random() * 30)}
                />
            </Link>

            <Link
                to={{
                    pathname: "/workspaces",
                    state: {
                        icon: "<FaNewspaper />",
                        workspace: "Real Estate Contracts",
                        from: "root",
                        url: photosList?.[5]?.url,
                    },
                }}
            >
                <Workspace
                    icon={<FaNewspaper />}
                    workspace="Real estate contracts"
                    info="Estate contracts"
                    numberOfUsers={Math.floor(Math.random() * 150)}
                    numberOfDays={Math.floor(Math.random() * 30)}
                />
            </Link>

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

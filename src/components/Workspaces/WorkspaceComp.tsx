import React, { Component, FC } from "react";
import Slider from "react-slick";
import "./index.css";
import { AiFillHome } from "react-icons/ai";
import { FaNewspaper, FaFileContract, FaBook } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOrganization, GrUserSettings } from "react-icons/gr";
import { GiKing } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
interface IProps {
    icon: object;
    workspace: string;
    info: string;
    numberOfUsers: number;
    numberOfDays: number;
}
export const Workspace: FC<IProps> = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card">
                    <div className="test"></div>
                    <div className="iconWrap">
                        <div className="icon">{props.icon}</div>
                        <p>{props.workspace}</p>
                    </div>
                    <div className="info">
                        <p>
                            {props.icon}
                            {props.info}
                        </p>
                        <p>
                            <BsFillPeopleFill />
                            {props.numberOfUsers} users
                        </p>
                    </div>
                    <p>Last update {props.numberOfDays} days ago</p>
                </div>
            </div>
        </>
    );
};

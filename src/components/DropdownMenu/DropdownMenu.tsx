import React, { FC } from "react";
import styled from "styled-components";
import * as AllTypes from "react-icons";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { AiFillHome } from "react-icons/ai";
import { FaNewspaper, FaFileContract, FaBook } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrOrganization, GrUserSettings } from "react-icons/gr";
import { GiKing } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { SiGnuprivacyguard } from "react-icons/si";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const InnerWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0px;
    width: 15vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;

    z-index: 100;
`;

const WrapLinks = styled.div`
    width: 100%;

    height: 80%;
    color: black;
    text-align: left;
    overflow-y: scroll;
`;
const WrapProfile = styled.div`
    width: 100%;
    text-align: left;
    color: black;
`;
const Linked = styled.p`
    display: block;
    color: #272727;
    text-decoration: none;
    padding-left: 20px;
    padding: 2px 0 2px 20px;
`;

const Filter = styled.input`
    width: 80%;

    margin: 5% 10%;
    color: gray;
`;
const Subtitles = styled.div`
    color: gray;
    width: 100%;
    padding-left: 30px;
    text-align: left;
    font-size: 0.8em;
`;
const Links = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: roboto, sans-serif;
    letter-spacing: 0.5px;
`;
const Cos = styled.div`
    height: 10%;
`;
const Line = styled.div`
    padding: 0;
    width: 100%;
    border: 1px solid black;
`;
// const Category = styled.div`
//     font-size: 0.8rem;
//     color: gray;
// `;
export const DropdownMenu: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
        ...globalState.users,
    }));
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
    return (
        <InnerWrapper>
            <Filter placeholder="Filter..." />

            <WrapLinks>
                <Subtitles>Platform</Subtitles>

                <Linked>
                    <Links to="/">
                        <AiFillHome /> Home
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/publications">
                        <FaNewspaper /> Publications
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/people">
                        <BsFillPeopleFill /> People
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/entities">
                        {" "}
                        <GrOrganization /> Entities
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/administration">
                        {" "}
                        <GiKing /> Administration
                    </Links>
                </Linked>

                <Line />

                <Subtitles>Workspaces</Subtitles>

                <Linked>
                    <Links to="/clientContract">
                        {" "}
                        <FaFileContract /> Client contract
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/supplierContract">
                        {" "}
                        <FaFileContract /> Supplier contract
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/corporate">
                        {" "}
                        <CgOrganisation /> Corporate
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/groupNorms">
                        {" "}
                        <FaBook /> Group Norms
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/realEstateContracts">
                        {" "}
                        <FaFileContract /> Real estate contracts
                    </Links>
                </Linked>

                <Line />
            </WrapLinks>
            <Subtitles>Account</Subtitles>
            <WrapProfile>
                <Linked>
                    <Links to="/profile">
                        <img src={photosList[1].url} alt="" />
                        {usersList[1].name}
                    </Links>
                </Linked>
            </WrapProfile>
        </InnerWrapper>
    );
};

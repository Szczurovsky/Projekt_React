import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./LeftMenu.css";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { GrOrganization } from "react-icons/gr";
import { FaNewspaper } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiMeshNetwork } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineUserAdd } from "react-icons/ai";

const WrapMenu = styled.div`
    display: flex;
    background-color: #fff;
    width: 70%;
    height: 20%;
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    align-items: center;
`;

const WrapImage = styled.div`
    position: relative;
`;
const Image = styled.div`
    border-radius: 90%;
`;
const Name = styled.div`
    color: royalblue;
`;
const JobTitle = styled.div`
    color: gray;
    font-size: 0.8em;
`;
const FastMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 70%;
    height: 10%;
    margin-top: 1%;
    align-items: space-between;
    justify-content: center;
`;
const ShortcutWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 10%;
    margin-top: 30px;
    align-items: space-between;
    justify-content: center;
`;
const Linked = styled(Link)`
    /* width: 100%; */
    color: black;
    margin: 5px 0;
`;
const IconNetwork = styled(CgProfile)`
    font-size: 15px;
    margin-right: 5px;
`;
const IconEco = styled(GiMeshNetwork)`
    font-size: 25px;
    margin-right: 5px;
`;
const IconNews = styled(FaNewspaper)`
    font-size: 15px;
    margin-right: 5px;
`;
const IconNews1 = styled(FaNewspaper)`
    font-size: 25px;
    margin-right: 5px;
`;
const IconEntities = styled(GrOrganization)`
    font-size: 25px;
    margin-right: 5px;
`;
const ButtonAdd = styled.button`
    margin-left: 3px;
    width: 30px;
    border: 1px solid black;
    border-radius: 5px;
`;
export const Profil: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
        ...globalState.users,
    }));
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );

    return (
        <React.Fragment>
            <WrapMenu>
                <WrapImage>
                    <Image>
                        <img
                            src={photosList?.[1]?.url}
                            alt="profilowe"
                            className="profilowe"
                        />
                        <Name>
                            <Linked to="/profile">
                                {usersList?.[1]?.name}
                            </Linked>
                        </Name>
                        <JobTitle>Job title - Company</JobTitle>
                    </Image>
                </WrapImage>
            </WrapMenu>
            <FastMenu>
                <Linked to="/network">
                    <IconNetwork />
                    Your network
                    <ButtonAdd>
                        <AiOutlineUserAdd />
                    </ButtonAdd>
                </Linked>

                <Linked to="/publications">
                    <IconNews />
                    Your publications{" "}
                    <ButtonAdd>
                        {" "}
                        <AiOutlinePlus />
                    </ButtonAdd>
                </Linked>
            </FastMenu>
            <ShortcutWrap>
                <Linked to="/publications">
                    <IconNews1 />
                    Publications
                </Linked>

                <Linked to="/network">
                    <IconEco />
                    Ecosystem
                </Linked>
                <Linked to="/entities">
                    <IconEntities />
                    Entities
                </Linked>
            </ShortcutWrap>
        </React.Fragment>
    );
};

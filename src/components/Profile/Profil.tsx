import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
import { AiOutlineEdit } from "react-icons/ai";
import * as AllTypes from "react-icons";
import "./style/form.css";
interface IProps {
    mode: any;
    imie: any;
    company?: any;
    address?: any;
    username?: any;
    phone?: number;
    email?: any;
    // expertise?: any;
    // specialities?: any;
    // admission?: any;
    // counties?: any;
}

const MainWrapper = styled.div`
    /* width: 70%; */
    width: 100%;
    height: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const Photo = styled.div`
    padding-left: 30px;
    width: 6%;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Name = styled.div`
    width: 60%;
    background-color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Contact = styled.div`
    width: 35%;
    background-color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const PhotoComponent = styled.img`
    display: block;
    border-radius: 90%;
`;
const Link = styled.a``;
const FirstSection = styled.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SecondSection = styled.div`
    height: 500%;
    background-color: blue;
`;
const Info = styled.p`
    letter-spacing: 2px;
    margin: 2px 0;
    font-size: 20px !important;
`;
export const Profil: FC<IProps> = (props) => {
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
        ...globalState.users,
    }));
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
    return (
        <MainWrapper>
            <FirstSection>
                <Photo>
                    <PhotoComponent src={photosList?.[0]?.url} />
                    <Link>See profile</Link>
                </Photo>
                <Name>
                    <Info>{props.imie}</Info>
                    <Info>{props.company}</Info>
                    <Info>{props.address}</Info>
                    <Info>{props.username}</Info>
                    {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}
                </Name>
                <Contact>
                    {" "}
                    <button
                        className="buttonProfil"
                        onClick={() => props.mode(false)}
                    >
                        {<AiOutlineEdit />}
                    </button>
                    <Info>{props.phone}</Info>
                    <Info>{props.email}</Info>
                </Contact>
            </FirstSection>
            {/* <SecondSection>sss</SecondSection> */}
        </MainWrapper>
    );
};

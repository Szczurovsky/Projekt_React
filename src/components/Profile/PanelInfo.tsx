import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
interface IProps {
    mode: any;

    expertise?: any;
    specialities?: any;
    admission?: any;
    counties?: any;
}

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Name = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Subtitle = styled.p`
    font-size: 16px;
    color: gray;
`;
const Contact = styled.div`
    width: 50%;
    height: 100%;
    display: flex;

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
`;
const Info = styled.p``;
export const PanelInfo: FC<IProps> = (props) => {
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
                <Name>
                    <Subtitle>Expertise</Subtitle>
                    <Info>{props.expertise}</Info>
                    <Subtitle>Specialities</Subtitle>
                    <Info>{props.specialities}</Info>
                    <Subtitle>Admission</Subtitle>
                    <Info>{props.admission}</Info>
                    <Subtitle>Counties</Subtitle>
                    <Info>{props.counties}</Info>
                    {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}
                </Name>
                <Contact>
                    {" "}
                    <button onClick={() => props.mode(false)}>Edit</button>
                </Contact>
            </FirstSection>
            {/* <SecondSection>sss</SecondSection> */}
        </MainWrapper>
    );
};

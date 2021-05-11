import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
interface IProps {
    mode: any;
    imie: any;
}

const MainWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Photo = styled.div`
    width: 10%;
    background-color: red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Name = styled.div`
    width: 40%;
    background-color: yellow;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Contact = styled.div`
    width: 50%;
    background-color: violet;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const PhotoComponent = styled.img`
    display: block;
    border-radius: 90%;
`;
const Link = styled.a``;
const Info = styled.p``;
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
            <Photo>
                <PhotoComponent src={photosList?.[0]?.url} />
                <Link>See profile</Link>
            </Photo>
            <Name>
                <Info>{props.imie}</Info>
                <Info>{usersList?.[2]?.company.name}</Info>
                <Info>{usersList?.[2]?.address.city}</Info>
                <Info>{usersList?.[2]?.username}</Info>
                {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}
            </Name>
            <Contact>
                {" "}
                <button onClick={() => props.mode(false)}>Edit</button>
                <Info>{usersList?.[2]?.phone}</Info>
                <Info>{usersList?.[2]?.email}</Info>
            </Contact>
        </MainWrapper>
    );
};

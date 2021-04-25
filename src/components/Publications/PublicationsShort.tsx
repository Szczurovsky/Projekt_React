import React, { FC, useState, ChangeEvent } from "react";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
import wieżowiec from "../../icons/skyscraper.jpg";
// import { getUsers } from "../../actions/userActions";
// import { getPhotos } from "../../actions/photoActions";
import styled from "styled-components";

const MainWrapper = styled.div`
    height: 40vh;
    display: flex;
    /* background-color: black; */
    align-items: center;
    justify-content: space-around;
`;
const LeftSide = styled.div`
    width: 30%;
    height: 100%;
`;
const RightSide = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
`;
const Img = styled.div`
    width: 100%;
    height: 100%;
    max-height: 1000px !important;
    background-image: url(${wieżowiec});
    background-position: center !important;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    box-shadow: inset 0 0 0 50vw rgba(3, 18, 150, 0.486);
`;
const Text = styled.p`
    /* position: absolute;
    bottom: 0; */
    display: flex;
    color: white;
    align-items: center;
    margin-left: 10px !important;
    margin-bottom: 10px;
    text-align: left;
`;
const Photo = styled.img`
    border-radius: 90%;
    margin: 0 10px;
`;
const PhotoPost = styled.img`
    order: 0;
    flex: 0 2 auto;
    align-self: stretch;
    margin: 0 10px;
`;
const Post = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
`;
const TextPost = styled.div`
    align-self: center;
    flex-direction: column;
`;
const Title = styled.p`
    display: flex;
    /* color: white; */
    align-self: flex-start;
`;
const Author = styled.div``;
const Content = styled.div``;
// const Time = styled.time`
//     position: absolute;
//     bottom: 0;
//     color: white;
//     margin-left: 10px !important;
//     margin-bottom: 10px;
//     text-align: left;
// `;

export const PublicationsShort: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
        ...globalState.users,
    }));
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
    const { postsList } = useSelector<IState, IPostsReducer>((globalState) => ({
        ...globalState.posts,
    }));
    return (
        <MainWrapper>
            <LeftSide>
                <Img>
                    <Text>
                        {postsList?.[0]?.title.charAt(0).toUpperCase() +
                            postsList?.[0]?.title.slice(1)}
                    </Text>
                    <Text>
                        {data.getDate()} {months[data.getMonth()]}{" "}
                        {data.getFullYear()}
                        {}
                        <Photo src={photosList?.[0]?.url}>
                            {/* <img src={photosList?.[0]?.url} alt="" /> */}
                        </Photo>
                        {usersList?.[9]?.name}
                    </Text>
                </Img>
            </LeftSide>
            <RightSide>
                <Title>Latest publications</Title>
                <Post>
                    <PhotoPost src={photosList?.[0]?.url}>
                        {/* <img src={photosList?.[0]?.url} alt="" /> */}
                    </PhotoPost>
                    <TextPost>
                        <Content>
                            {postsList?.[0]?.title.charAt(0).toUpperCase() +
                                postsList?.[0]?.title.slice(1)}
                        </Content>
                        <Author>{usersList?.[9]?.name}</Author>
                    </TextPost>
                </Post>
                <Post>
                    <PhotoPost src={photosList?.[0]?.url}>
                        {/* <img src={photosList?.[0]?.url} alt="" /> */}
                    </PhotoPost>
                    <TextPost>
                        <Content>
                            {postsList?.[0]?.title.charAt(0).toUpperCase() +
                                postsList?.[0]?.title.slice(1)}
                        </Content>
                        <Author>{usersList?.[9]?.name}</Author>
                    </TextPost>
                </Post>
                <Post>
                    <PhotoPost src={photosList?.[0]?.url}>
                        {/* <img src={photosList?.[0]?.url} alt="" /> */}
                    </PhotoPost>
                    <TextPost>
                        <Content>
                            {postsList?.[0]?.title.charAt(0).toUpperCase() +
                                postsList?.[0]?.title.slice(1)}
                        </Content>
                        <Author>{usersList?.[9]?.name}</Author>
                    </TextPost>
                </Post>
                <a href="../Publications/Publication">See more Publications</a>
            </RightSide>
        </MainWrapper>
    );
};

const data = new Date();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

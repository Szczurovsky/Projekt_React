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
    height: 45vh;
    display: flex;
    background-color: white;
    align-items: center;
    font-family: roboto;
    /* justify-content: space-around; */
`;
const LeftSide = styled.div`
    width: 40%;
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
    margin-right: 10px !important;
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
    height: 100px !important;
    min-height: 100px;
`;
const Post = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
    align-content: stretch;
    /* align-items: center; */
`;
const TextPost = styled.div`
    align-self: flex-end;
    flex-direction: column;
    /* letter-spacing: 2px; */
`;
const Title = styled.p`
    display: flex;
    /* color: white; */
    align-self: flex-start;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-left: 10px !important;
`;
const Author = styled.div`
    display: flex;
    align-self: flex-start;
    border-top: 1px solid red;
    letter-spacing: 2px;
    margin-top: 20px;
    padding-top: 10px;
`;
const Content = styled.div`
    word-wrap: wrap;
    display: flex;
    align-self: flex-end !important;
    overflow: hidden;
`;
// const Time = styled.time`
//     position: absolute;
//     bottom: 0;
//     color: white;
//     margin-left: 10px !important;
//     margin-bottom: 10px;
//     text-align: left;
// `;
const Link = styled.a`
    align-self: flex-start;
    margin-left: 10px !important;
    margin-bottom: 10px;
`;

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
    // postsList?.forEach((id) =>{

    // })
    // for (let item in postsList) {
    //     // console.log(`${postsList[item].userId}`);
    //     switch (item) {
    //         case "1":
    //             array1.push(postsList?.filter((numer) => numer.userId === 1));
    //             break;
    //         case "2":
    //             array2.push(postsList?.filter((numer) => numer.userId === 2));
    //             break;
    //         case "3":
    //             array3.push(postsList?.filter((numer) => numer.userId === 3));
    //             break;
    //         case "4":
    //             array4.push(postsList?.filter((numer) => numer.userId === 4));
    //             break;
    //         case "5":
    //             array5.push(postsList?.filter((numer) => numer.userId === 5));
    //             break;
    //         case "6":
    //             array6.push(postsList?.filter((numer) => numer.userId === 6));
    //             break;
    //         case "7":
    //             array7.push(postsList?.filter((numer) => numer.userId === 7));
    //             break;
    //         case "8":
    //             array8.push(postsList?.filter((numer) => numer.userId === 8));
    //             break;
    //         case "9":
    //             array9.push(postsList?.filter((numer) => numer.userId === 9));
    //             break;
    //         case "10":
    //             array10.push(postsList?.filter((numer) => numer.userId === 10));
    //             break;
    //     }
    // }
    //  {
    //     switch (postsList?.[i]?.userId) {
    //         case 1:
    //             array1.push(postsList?.filter((numer) => numer.userId === 1));
    //             break;
    //         case 2:
    //             array2.push(postsList?.filter((numer) => numer.userId === 1));
    //             break;
    //     }
    // }
    // const id = postsList?.filter((numer) => numer.userId === 1);

    // //jedyne dzialajace
    // for (let i = 0; i < postsList?.length; i++) {
    //     if (usersList?.[1].id === postsList?.[i].userId)
    //         array1.push({
    //             id: usersList?.[1].id,
    //             userId: postsList?.[i].userId,
    //             postId: postsList?.[i].id,
    //             name: usersList?.[1].name,
    //             body: postsList?.[i].body,
    //             title: postsList?.[i].title,
    //         });
    //     if (usersList?.[2].id === postsList?.[i].userId)
    //         array1.push({
    //             id: usersList?.[2].id,
    //             userId: postsList?.[i].userId,
    //             postId: postsList?.[i].id,
    //             name: usersList?.[2].name,
    //             body: postsList?.[i].body,
    //             title: postsList?.[i].title,
    //         });
    //     if (usersList?.[3].id === postsList?.[i].userId)
    //         array1.push({
    //             id: usersList?.[3].id,
    //             userId: postsList?.[i].userId,
    //             postId: postsList?.[i].id,
    //             name: usersList?.[3].name,
    //             body: postsList?.[i].body,
    //             title: postsList?.[i].title,
    //         });
    //     console.log(array1);
    // }
    // for (let i = 0; i <100; i++){
    //     let zmiennaUser:number = 1
    //     switch(postsList){

    //     }
    // }

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
                        <Photo src={photosList?.[0]?.url}></Photo>
                        {usersList?.[9]?.name}
                    </Text>
                </Img>
            </LeftSide>

            <RightSide>
                <Title>Latest publications</Title>
                <Post>
                    <PhotoPost src={photosList?.[0]?.url}></PhotoPost>
                    <TextPost>
                        <Content>
                            {postsList?.[0]?.title.charAt(0).toUpperCase() +
                                postsList?.[0]?.title.slice(1)}
                        </Content>
                        <Author>
                            {data.getDate()} {months[data.getMonth()]}{" "}
                            {data.getFullYear()}
                            {} {usersList?.[9]?.name}
                        </Author>
                    </TextPost>
                </Post>
                <Post>
                    <PhotoPost src={photosList?.[0]?.url}></PhotoPost>
                    <TextPost>
                        <Content>
                            {postsList?.[0]?.title.charAt(0).toUpperCase() +
                                postsList?.[0]?.title.slice(1)}
                        </Content>
                        <Author>
                            {data.getDate()} {months[data.getMonth()]}{" "}
                            {data.getFullYear()}
                            {} {usersList?.[9]?.name}
                        </Author>
                    </TextPost>
                </Post>
                <Post>
                    <PhotoPost src={photosList?.[0]?.url}>
                        {/* <img src={photosList?.[0]?.url} alt="" /> */}
                    </PhotoPost>
                    <TextPost>
                        <Content>
                            {postsList?.[46]?.title.charAt(0).toUpperCase() +
                                postsList?.[46]?.title.slice(1)}
                        </Content>
                        <Author>
                            {data.getDate()} {months[data.getMonth()]}{" "}
                            {data.getFullYear()}
                            {} {usersList?.[9]?.name}
                        </Author>
                    </TextPost>
                </Post>
                <Link href="../Publications/Publication">
                    See more Publications
                </Link>
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

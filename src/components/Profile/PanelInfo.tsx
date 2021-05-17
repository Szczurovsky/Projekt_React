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
    fee?: any;
    terms?: any;
    attachment?: any;
    services?: any;
    internalCorr?: any;
    propName?: any;
    propEntity?: any;
    propLocation?: any;
    propExpertise?: any;
    propDate?: any;
    propFirm?: any;
    interName?: any;
    interEntity?: any;
    interLocation?: any;
    interExpertise?: any;
    interDate?: any;
    amountYear?: any;
    amountCost?: any;
    amountTotal?: any;
    amountLaw?: any;
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
    width: 5%;
    height: 100%;
    display: flex;
    margin-right: 20px;
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
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SecondSection = styled.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Panel = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Info = styled.p``;
const ProfWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
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
                </Contact>{" "}
            </FirstSection>
            <Panel>
                <Subtitle>Fee</Subtitle>
                <Info>{props.fee}</Info>
                <Subtitle>Terms {"&"} Conditions</Subtitle>
                <Info>{props.terms}</Info>
                <Info>{props.attachment}</Info>
                <Subtitle>Services {"&"} projects</Subtitle>
                <Info>{props.services}</Info>
                <Subtitle>Internal correspondants</Subtitle>
                <ProfWrap>
                    <img src={photosList?.[0]?.url} alt="" />
                    <Info>{props.internalCorr}</Info>
                </ProfWrap>
            </Panel>

            {/* <SecondSection>sss</SecondSection> */}
        </MainWrapper>
    );
};

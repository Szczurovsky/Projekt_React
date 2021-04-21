import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../actions/userActions";
import { getPhotos } from "../../actions/photoActions";
import styled from "styled-components";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { TopBar } from "../TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Publications } from "../Publications/Publications";
import { People } from "../People/People";
import { Entities } from "../Entities/Entities";
import { Administration } from "../Administration/Administration";
import { ClientContract } from "../ClientContract/ClientContract";
import { SupplierContract } from "../SupplierContract/SupplierContract";
import { Contract } from "../Contract/Contract";
import { GroupNorms } from "../GroupNorms/GroupNorms";
import { RealEstateContracts } from "../RealEstateContracts/RealEstateContracts";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
const Wrapper = styled.div`
    background-color: #e6e6e6;
    display: flex;
    height: 100%;
    /* overflow: hidden; */
    /* display: flex; */
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    /* background-color: red; */
    /* height: 50vh; */
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: black; */
`;
const PublicationsDiv = styled.div`
    display: flex;
    width: 100%;
    background-color: red;
`;
const WorkspacesDiv = styled.div`
    width: 100%;
    background-color: green;
`;
const Subtitles = styled.div`
    margin: 20px 0;
    text-align: left;
    font-size: 18px;
    letter-spacing: 1px;
`;
const ResYourWork = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    width: 100%;
    background-color: red;
`;
const Tested = styled.div`
    margin: 20px 0;
    /* height: 20vh; */
    background-color: #fff;
`;

export const MainPage: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
    }, []);
    return (
        <Router>
            <TopBar />
            <Wrapper>
                <LeftMenu />
                <ContentWrapper>
                    <Content>
                        <Switch>
                            <Route path="/publications">
                                <Publications />
                            </Route>
                            <Route path="/people">
                                <People />
                            </Route>
                            <Route path="/entities">
                                <Entities />
                            </Route>
                            <Route path="/administration">
                                <Administration />
                            </Route>
                            <Route path="/clientContract">
                                <ClientContract />
                            </Route>
                            <Route path="/supplierContract">
                                <SupplierContract />
                            </Route>
                            <Route path="/contract">
                                <Contract />
                            </Route>
                            <Route path="/groupNorms">
                                <GroupNorms />
                            </Route>
                            <Route path="/realEstateContracts">
                                <RealEstateContracts />
                            </Route>
                            <Route path="/">
                                <Subtitles>Publications</Subtitles>
                                <PublicationsDiv></PublicationsDiv>
                                <Subtitles>Workspaces</Subtitles>
                                <WorkspacesDiv></WorkspacesDiv>
                                <Subtitles>Resume Your Work</Subtitles>
                                <ResYourWork>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                    <Tested></Tested>
                                </ResYourWork>
                            </Route>
                        </Switch>
                    </Content>
                </ContentWrapper>
            </Wrapper>
        </Router>
    );
};

export default MainPage;

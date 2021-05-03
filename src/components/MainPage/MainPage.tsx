import React, { FC, useEffect, useState, ChangeEvent } from "react";
import Pagination2 from "../Pagination/Pagination2";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUsers } from "../../actions/userActions";
import { getPosts } from "../../actions/postActions";
import { getPhotos } from "../../actions/photoActions";
import styled from "styled-components";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { SliderComponent } from "../Workspaces/SliderComponent";
import { TopBar } from "../TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Publications } from "../Publications/Publications";
import { PublicationsShort } from "../Publications/PublicationsShort";
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
type GetPosts = ReturnType<typeof getPosts>;
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
    flex-wrap: nowrap;

    width: 100%;
`;
const Tested = styled.div`
    margin: 20px 0;
    /* height: 20vh; */
    background-color: #fff;
`;
const SliderContainer = styled.div`
    /* display: flex;
    max-width: 100%; */
    /* background-color: red; */
    /* height: 50vh; */
    /* align-items: center;
    justify-content: center; */
`;
const Filter = styled.input`
    width: 80%;

    margin: 5% 10%;
    color: gray;
`;
export const MainPage: FC = (props) => {
    const [page, setPage] = useState(1);
    const totalPages = 15;
    const handlePages = (updatePage: number) => setPage(updatePage);
    //
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/comments"
            );
            setPosts(res.data);
            setLoading(false);
        };
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
        fetchPosts();
    }, []);
    const indexOfLastPost = currentPage + postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };
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
                            <Route path="/corporate">Corporate</Route>
                            <Route path="/">
                                <Subtitles>Publications</Subtitles>
                                <PublicationsShort />
                                <Subtitles>Workspaces</Subtitles>
                                <SliderContainer className="container mt-5 carousel">
                                    <SliderComponent />
                                </SliderContainer>
                                <Subtitles>Resume Your Work</Subtitles>
                                <ResYourWork>
                                    <Pagination2
                                        publications="/publications"
                                        people="/people"
                                        entities="/entities"
                                        administration="/administration"
                                        clientContract="/clientContract"
                                        supplierContract="/supplierContract"
                                        corporate="/corporate"
                                        groupNorms="/groupNorms"
                                        realEstateContracts="/realEstateContracts"
                                        number={Math.floor(Math.random() * 10)}
                                    />
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

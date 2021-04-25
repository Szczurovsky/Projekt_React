import React, { FC, useState, ChangeEvent } from "react";
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
    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };
    return (
        <InnerWrapper>
            <Filter
                type="text"
                value={inputText}
                onChange={inputHandler}
                placeholder="Wprowadź tekst"
            />

            <WrapLinks>
                <Subtitles>Platform</Subtitles>

                <Linked>
                    <Links to="/">
                        {"Home"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <AiFillHome />
                                Home
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/publications">
                        {"Publications"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <FaNewspaper /> Publications
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/people">
                        {"People"
                            .toLocaleLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <BsFillPeopleFill /> People)
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/entities">
                        {"Entities"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <GrOrganization /> Entities
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/administration">
                        {" "}
                        {"Administration"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <GiKing /> Administration
                            </>
                        )}
                    </Links>
                </Linked>

                <Line />

                <Subtitles>Workspaces</Subtitles>

                <Linked>
                    <Links to="/clientContract">
                        {"Client contract"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <FaFileContract /> Client contract
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/supplierContract">
                        {"Supplier contract"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <FaFileContract /> Supplier contract
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/corporate">
                        {"Corporate"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <CgOrganisation /> Corporate
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/groupNorms">
                        {"Group Norms"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <FaBook /> Group Norms
                            </>
                        )}
                    </Links>
                </Linked>

                <Linked>
                    <Links to="/realEstateContracts">
                        {"Real Estates"
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <FaFileContract /> Real estate contracts
                            </>
                        )}
                    </Links>
                </Linked>

                <Line />
            </WrapLinks>
            <Subtitles>Account</Subtitles>
            <WrapProfile>
                <Linked>
                    <Links to="/profile">
                        {usersList?.[1]?.name
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) && (
                            <>
                                <img src={photosList?.[1]?.url} alt="" />

                                {usersList?.[1]?.name}
                            </>
                        )}
                        {console.log(usersList)}
                    </Links>
                </Linked>
            </WrapProfile>
        </InnerWrapper>
    );
};

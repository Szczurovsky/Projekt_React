import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Test } from "./Test";
import useDropdown from "react-dropdown-hook";
import { AiOutlineInsertRowLeft, AiFillCaretDown } from "react-icons/ai";
import "./App.css";
interface IFoo {
    people: string;
    publications: string;
    entities: string;
    administration: string;
    clientContract: string;
    supplierContract: string;
    corporate: string;
    groupNorms: string;
    realEstateContracts: string;
    number?: number;
}
interface IBoo {
    link: string;
    workspace: string;
    number?: number;
}
const Filter = styled.input`
    width: 80%;

    margin: 5% 10%;
    color: gray;
`;
const RowWrapper = styled.div`
    height: 50px;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Followed = styled.button`
    align-items: center;
    padding: 0 10px;
    height: 30px;
    display: flex;
    flex-direction: row;
    border: 1px solid royalblue;
    color: royalblue;
`;
const Subtitles = styled.div`
    margin: 20px 0;
    text-align: left;
    font-size: 18px;
    letter-spacing: 1px;
`;
function Pagination2(props: any) {
    enum Users {
        "Leanne Graham" = 1,
        "Ervin Howell",
        "Clementine Bauch",
        "Patricia Lebsack",
        "Chelsey Dietrich",
        "Mrs. Dennis Schulist",
        "Kurtis Weissnat",
        "icholas Runolfsdottir V",
        "Glenna Reichert",
        "Clementina DuBuque",
    }
    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };
    console.log(Users["Leanne Graham"]);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    let Names = [
        "Leanne Graham",
        "Ervin Howell",
        "Clementine Bauch",
        "Patricia Lebsack",
        "Chelsey Dietrich",
        "Mrs. Dennis Schulist",
        "Kurtis Weissnat",
        "icholas Runolfsdottir V",
        "Glenna Reichert",
        "Clementina DuBuque",
    ];
    const getData = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/comments`
        );
        const data = res.data;

        const slice = data.slice(offset, offset + perPage);
        // .filter((elem: any) => {
        //     elem.name.includes("eaque");
        //     // return elem;   c
        //     console.log(elem.body);
        //     return elem;
        // });

        console.log(slice);
        // const postData = slice.map((comment: any) => (
        //     <>
        //         {comment.name.includes(inputText) && (
        //             <Test
        //                 id={comment.id}
        //                 imie={Names}
        //                 comment={comment}
        //                 number={Math.floor(Math.random() * 9)}
        //                 publications="/publications"
        //                 people="/people"
        //                 entities="/entities"
        //                 administration="/administration"
        //                 clientContract="/clientContract"
        //                 supplierContract="/supplierContract"
        //                 corporate="/corporate"
        //                 groupNorms="/groupNorms"
        //                 realEstateContracts="/realEstateContracts"
        //             />
        //         )}
        //     </>
        // ));
        /* {filtered.map((photo: any) => (
                    <>
                        {photo.title.includes(inputText) && (
                            <div className="box">
                                <div className="photoEntities"></div>
                                <div className="titleEntities">
                                    {photo.title}
                                    <p className="textEntities">
                                        Caracas 1050, Distrito Capital,
                                        Venezuela
                                    </p>
                                </div>
                            </div>
                        )}
                    </>
                ))} */
        console.log(slice);
        setData(slice);
        setPageCount(Math.ceil(data.length / perPage));
    };
    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
    };
    const [filtered, setFilter] = useState([]);
    useEffect(() => {
        setFilter(data);
        getData();
    }, [offset]);

    // musze w state przekazać wartosc inputa do componentu tescik i w nim filtrowac po otrzymanych propsach

    return (
        <>
            <Subtitles>Resume Your Work</Subtitles>
            <RowWrapper>
                <Filter
                    className="res"
                    type="text"
                    value={inputText}
                    onChange={inputHandler}
                    placeholder="Wprowadź tekst"
                />
                <Followed
                    onClick={() => {
                        data.filter((test: any, props) => {
                            // console.log(

                            // )
                            if (
                                test.props.children.props.comment.id ===
                                Users["Leanne Graham"]
                            ) {
                                return console.log("sss");
                            }
                        });
                    }}
                >
                    Followed <AiFillCaretDown />
                </Followed>
            </RowWrapper>
            {/* {data} */}
            {data.map((photo: any, index: any, props) => (
                <>
                    {console.log(photo.email)}
                    {/* {photo.title.includes(inputText) && (
                            <div className="box">
                                <div className="photoEntities"></div>
                                <div className="titleEntities">
                                    {photo.title}
                                    <p className="textEntities">
                                        Caracas 1050, Distrito Capital,
                                        Venezuela
                                    </p>
                                </div>
                            </div>
                        )} */}
                    {
                        photo.name.includes(inputText) && (
                            <Test
                                id={photo.id}
                                comment={photo.comment}
                                name={photo.name}
                                body={photo.body}
                                imie={Names}
                                number={Math.floor(Math.random() * 9)}
                                publications="/publications"
                                people="/people"
                                entities="/entities"
                                administration="/administration"
                                clientContract="/clientContract"
                                supplierContract="/supplierContract"
                                corporate="/corporate"
                                groupNorms="/groupNorms"
                                realEstateContracts="/realEstateContracts"
                            />
                        )
                        // {console.log(photo.props.children.props.comment.name)}
                    }
                </>
            ))}
            {/* {console.log(data?.[0]?.props.children.props.comment.body)} */}
            <div className="App">
                {console.log(filtered)}
                <ReactPaginate
                    previousLabel={"Poprzednie"}
                    nextLabel={"Następne"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>
        </>
    );
}

export default Pagination2;

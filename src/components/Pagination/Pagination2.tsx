import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
function Pagination2(props: any) {
    const [inputText, setInputText] = useState<string>("");

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const table1: IFoo = {
        people: props.people,
        publications: props.publications,
        entities: props.entities,
        administration: props.administration,
        clientContract: props.clientContract,
        supplierContract: props.supplierContract,
        corporate: props.corporate,
        groupNorms: props.groupNorms,
        realEstateContracts: props.realEstateContracts,
        number: props.number,
    };

    const table = [
        { link: table1.people, workspace: "people", number: table1.number },
        {
            link: table1.publications,
            workspace: "publications",
            number: table1.number,
        },
        { link: table1.entities, workspace: "entities", number: table1.number },
        {
            link: table1.administration,
            workspace: "administration",
            number: table1.number,
        },
        {
            link: table1.clientContract,
            workspace: "client contract",
            number: table1.number,
        },
        {
            link: table1.supplierContract,
            workspace: "supplier contract",
            number: table1.number,
        },
        {
            link: table1.corporate,
            workspace: "corporate",
            number: table1.number,
        },
        {
            link: table1.groupNorms,
            workspace: "group norms",
            number: table1.number,
        },
        {
            link: table1.realEstateContracts,
            workspace: "real estate contract",
            number: table1.number,
        },
    ];
    let randomItem = () => {};
    const getData = async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/comments`
        );
        const data = res.data;
        const slice = data.slice(offset, offset + perPage);
        let randomItem = table[Math.floor(Math.random() * table.length)];
        const postData = slice.map((comment: any) => (
            <div key={comment.id} className="tescik">
                <p className="name">{comment.name}</p>
                <p className="body">{comment.body}</p>
                <div className="info">
                    <p className="person">SUBS</p>
                    <p className="workspace">
                        {console.log(props.number)}
                        <Link to={table[props.number].link}>
                            {table[props.number].workspace}
                        </Link>
                    </p>

                    <p className="update"> Updated 3 days ago by John Doe</p>
                </div>
            </div>
        ));

        setData(postData);
        setPageCount(Math.ceil(data.length / perPage));
    };
    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
    };

    useEffect(() => {
        getData();
    }, [offset]);

    return (
        <div className="App">
            {data}
            {console.log(data)}
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
    );
}

export default Pagination2;

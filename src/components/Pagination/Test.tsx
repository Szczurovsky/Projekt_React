import React, { useState, useEffect, ChangeEvent, FC } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface ITest {
    id: number;
    comment?: any;
    number: number;
    people: string;
    publications: string;
    entities: string;
    administration: string;
    clientContract: string;
    supplierContract: string;
    corporate: string;
    groupNorms: string;
    realEstateContracts: string;
}
export const Test: FC<ITest> = (props) => {
    const table1 = {
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
    return (
        <div key={props.id} className="tescik">
            <p className="name">{props.comment.name}</p>
            <p className="body">{props.comment.body}</p>
            <div className="info">
                <p className="person">SUBS</p>
                <p className="workspace">
                    {console.log}
                    <Link to={table[props.number].link}>
                        {table[props.number].workspace}
                    </Link>
                    {/* {props.number} */}
                </p>

                <p className="update"> Updated 3 days ago by John Doe</p>
            </div>
        </div>
    );
};

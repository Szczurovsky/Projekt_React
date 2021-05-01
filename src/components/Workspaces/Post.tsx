import React, { FC, useEffect } from "react";
import styled from "styled-components";
const Post1 = styled.div`
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
`;
const Test = styled.div`
    width: 100px;

    background-color: #b36464;
`;
const Test2 = styled.div`
    /* width: 10px;
    height: 10px;
    background-color: white; */
`;
const Test3 = styled.div`
    width: 100%;
    height: 100px;
    background-color: blue;
`;
const Test4 = styled.div`
    width: 100%;
    height: 10px;
    background-color: white;
`;
export const Post: FC = () => {
    return (
        <Post1>
            <Test>
                <Test2>
                    <Test3 />
                    <Test4 />
                </Test2>
            </Test>
        </Post1>
    );
};

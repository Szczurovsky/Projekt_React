import React, { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

const InnerWrapper = styled.div`
    position: absolute;
    top: 19vh;
    width: 15vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: red;
    align-items: center;
    position: relative;
    z-index: 100;
`;

const Filter = styled.input`
    width: 80%;
    margin: 5% 10%;
`;

const Category = styled.div`
    font-size: 0.8rem;
    color: gray;
`;
export const DropdownMenu: FC = () => {
    return (
        <InnerWrapper>
            <Filter />
        </InnerWrapper>
    );
};

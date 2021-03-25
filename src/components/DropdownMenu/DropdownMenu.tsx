import React, { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";

const InnerWrapper = styled.div`
    width: 30vw;
    height: 30vh;
    display: flex;
    flex-direction: row;
    background-color: red;
    align-items: center;
    position: relative;
    z-index: 100;
`;

const Filter = styled.input`
    width: 80%;
`;

export const DropdownMenu: FC = () => {
    return (
        <InnerWrapper>
            <Filter />
        </InnerWrapper>
    );
};

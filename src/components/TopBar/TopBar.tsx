import React, { FC } from "react";
import styled from "styled-components";
import zdjecie from "../../icons/house.png";
import logo from "../../icons/logo.png";
import search from "../../icons/search.png";
import "./TopBar.css";
import useDropdown from "react-dropdown-hook";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
const InnerWrapper = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
    background-color: gray;
    align-items: center;
`;

// const RightIcons = styled.div`
// width:100px;
// text-align:right;
// `;

const Icon = styled.div`
    background-color: red;
    display: flex;
    width: 40px;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 40px;
    height: 40px;
    border-radius: 90%;
`;

const WrapMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuDrop = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
`;

const MenuUp = styled.button`
    display: none;
`;

export const TopBar: FC = () => {
    const [
        wrapperRef,
        dropdownOpen,
        toggleDropdown,
        closeDropdown,
    ] = useDropdown();
    return (
        <InnerWrapper>
            <img src={logo} alt="" className="logo" />

            <Icon>
                <img src={zdjecie} alt="test" className="button" />
            </Icon>
            <WrapMenu>
                <div ref={wrapperRef}>
                    <MenuDrop onClick={toggleDropdown}>Home</MenuDrop>
                    {dropdownOpen && <DropdownMenu />}
                </div>
                <MenuUp onClick={closeDropdown}>
                    Close menu after this click
                </MenuUp>
            </WrapMenu>
            <div className="wrapper">
                <input className="input-field" type="text" />
                <a href="s">
                    <img src={search} alt="" className="search" />
                </a>
            </div>
        </InnerWrapper>
    );
};

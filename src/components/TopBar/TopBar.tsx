import React, { FC } from "react";
import styled from "styled-components";
import zdjecie from "../../icons/house.png";
import logo from "../../icons/logo.png";
import search from "../../icons/search.png";
import "./TopBar.css";
import useDropdown from "react-dropdown-hook";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { AiOutlineArrowDown } from "react-icons/ai";

const InnerWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    box-shadow: 0px 4px 14px -2px rgba(0, 0, 0, 0.75);
    /* box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
     */
    border-bottom: 1px solid black;
    align-items: center;
`;

// const RightIcons = styled.div`
// width:100px;
// text-align:right;
// `;

const Icon = styled.div`
    /* background-color: red; */
    display: flex;
    width: 40px;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 40px;
    height: 40px;
    border-radius: 90%;
`;

const WrapMenu = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: column;
`;

const MenuDrop = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
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
            Home
            <WrapMenu>
                <div ref={wrapperRef}>
                    <MenuDrop onClick={toggleDropdown}>
                        <AiOutlineArrowDown />
                    </MenuDrop>
                    {dropdownOpen && <DropdownMenu />}
                </div>
            </WrapMenu>
            <div className="wrapper">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Search Legalcluster"
                />
                <a href="test">
                    <img src={search} alt="" className="search" />
                </a>
            </div>
        </InnerWrapper>
    );
};

import { FC, useState } from "react";
import styled from "styled-components";
import { CgOrganisation } from "react-icons/cg";
import { VscSymbolStructure } from "react-icons/vsc";
import { BsCalendar } from "react-icons/bs";
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #9292927a;
`;

const HeaderComp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 20px;
`;

const HeaderText = styled.div`
    color: #535353;
`;
const HeaderButtonShowed = styled.button`
    color: #535353;
    background-color: none;
    border: none;
`;
const HeaderButtonHide = styled.button`
    color: #535353;
    padding-right: 20px;
    /* align-self: flex-end; */
    /* justify-self: flex-end; */
    text-align: right;
    width: 100%;
    background-color: transparent;
    border: none;
`;
// KONIEC HEADER
const PicCallendar = styled(BsCalendar)`
    position: absolute;
    right: 0;
    /* align-self: center; */
    /* align-self: flex-start; */

    height: 150px;
    width: 200px;
    color: #c4c4c449;
`;
const Window = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 33%;

    background-color: white;
    height: 200px;
    margin: 0 20px;
`;
const Explorer = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: row;
`;
export const StartWorking: FC = () => {
    const [hide, setHide] = useState<boolean>(true);

    return (
        <>
            {hide ? (
                <MainWrapper>
                    <HeaderComp>
                        <HeaderText>
                            Start working on corporate matters
                        </HeaderText>
                        <HeaderText>
                            <HeaderButtonShowed onClick={() => setHide(false)}>
                                Hide
                            </HeaderButtonShowed>
                        </HeaderText>
                    </HeaderComp>
                    <Explorer>
                        <Window>
                            {" "}
                            <PicCallendar />
                        </Window>
                        <Window>
                            {" "}
                            <PicCallendar />
                        </Window>
                        <Window>
                            ssss
                            <PicCallendar />
                        </Window>
                    </Explorer>
                </MainWrapper>
            ) : (
                <>
                    <HeaderButtonHide onClick={() => setHide(true)}>
                        Show
                    </HeaderButtonHide>
                </>
            )}
        </>
    );
};

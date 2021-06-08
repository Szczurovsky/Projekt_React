import { FC, useState } from "react";
import styled from "styled-components";
import { CgOrganisation } from "react-icons/cg";
import { VscSymbolStructure } from "react-icons/vsc";
import { BsCalendar } from "react-icons/bs";
const MainWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    /* background-color: #9292927a; */
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
const BsCalendarIcon = styled(BsCalendar)`
    /* position: relative; */
    /* top: 0; */
    display: flex;
    align-self: flex-start;
    /* margin-left: 25px; */
    height: 50px;
    margin-bottom: 30px;
    width: 50px;
`;
const Window = styled.div`
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 33%;
    flex-direction: column;
    background-color: white;
    height: 200px;
    margin: 20px 20px;
`;
const Explorer = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: row;
`;
const TextHeader = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    /* width: 80%; */
`;
const BiggerText = styled.div`
    display: inline-block;
    font-weight: 700;
    font-size: 20px;
`;
const NormalText = styled.div`
    font-size: 14px;
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
                            <BsCalendarIcon />
                            <TextHeader>
                                Explore your <BiggerText>Entities</BiggerText>
                            </TextHeader>
                            <NormalText>
                                Take a few minutes to look at the most important
                                elements amd specificities of your entities
                            </NormalText>
                            <PicCallendar />
                        </Window>
                        <Window>
                            <BsCalendarIcon />
                            <TextHeader>
                                Explore your <BiggerText>Entities</BiggerText>
                            </TextHeader>
                            <NormalText>
                                Take a few minutes to look at the most important
                                elements amd specificities of your entities
                            </NormalText>
                            <PicCallendar />
                        </Window>
                        <Window>
                            <BsCalendarIcon />
                            <TextHeader>
                                Explore your <BiggerText>Entities</BiggerText>
                            </TextHeader>
                            <NormalText>
                                Take a few minutes to look at the most important
                                elements amd specificities of your entities
                            </NormalText>
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

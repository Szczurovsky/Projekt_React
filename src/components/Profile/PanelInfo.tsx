import React, { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { IPostsReducer } from "../../reducers/postsReducer";
import { AiOutlineEdit } from "react-icons/ai";
import * as AllTypes from "react-icons";
interface IProps {
    mode: any;

    expertise?: any;
    specialities?: any;
    admission?: any;
    counties?: any;
    fee?: any;
    terms?: any;
    attachment?: any;
    services?: any;
    internalCorr?: any;
    internalCorr1?: any;
    propName?: any;
    propEntity?: any;
    propLocation?: any;
    propExpertise?: any;
    propDate?: any;
    propFirm?: any;
    interName?: any;
    interEntity?: any;
    interLocation?: any;
    interExpertise?: any;
    interDate?: any;
    amountYear?: any;
    amountCost?: any;
    amountTotal?: any;
    amountLaw?: any;
}

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Name = styled.div`
    width: 40%;
    height: 100%;
    display: flex;

    flex-direction: column;
`;
const Subtitle = styled.p`
    font-size: 24px;
    color: gray;
    text-align: left;
    margin-left: 20px;
`;
const Contact = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    margin-right: 20px;
    flex-direction: column;
`;
const PhotoComponent = styled.img`
    display: block;
    border-radius: 90%;
`;
const Link = styled.a``;
const FirstSection = styled.div`
    width: 100%;
    background-color: #fff;
    /* height: 20%; */
    display: flex;
    padding: 20px 0;
    border-bottom: #e6e6e6 5px solid;
    justify-content: space-between;
    align-items: center;
`;
const SecondSection = styled.div`
    width: 100%;
    background-color: #fff;
    height: auto;
    display: flex;
`;
const Panel = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;

    justify-content: flex-start;
    flex-direction: column;
`;
const Info = styled.p`
    text-align: left;
    margin: 5px 0 10px 20px;
    /* background-color: #e6e6e6; */
    color: royalblue;
`;
const ProfWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    align-items: center;
`;
const Proposals = styled.div`
    width: 100%;
    border-top: 5px #e6e6e6 solid;
    height: 30%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    background-color: white;
`;
const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
`;
const Column1 = styled.div`
    margin-top: 30px;
    display: grid;
    padding-bottom: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
`;
const Column2 = styled.div`
    border-top: 5px #e6e6e6 solid;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    background-color: white;
`;
export const PanelInfo: FC<IProps> = (props) => {
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
        ...globalState.users,
    }));
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
    return (
        <MainWrapper>
            <FirstSection>
                <Name className="expertise">
                    <Subtitle>Expertise</Subtitle>
                    <Info>{props.expertise}</Info>
                    <Subtitle>Specialities</Subtitle>
                    <Info>{props.specialities}</Info>
                    <Subtitle>Admission</Subtitle>
                    <Info>{props.admission}</Info>
                    <Subtitle>Counties</Subtitle>
                    <Info>{props.counties}</Info>
                    {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}
                </Name>
                <Contact>
                    {" "}
                    <button onClick={() => props.mode(false)}>
                        {" "}
                        {<AiOutlineEdit />}
                    </button>
                </Contact>{" "}
            </FirstSection>
            <SecondSection>
                <Panel>
                    <Subtitle>Fee</Subtitle>
                    <Info>{props.fee}</Info>
                    <Subtitle>Terms {"&"} Conditions</Subtitle>
                    <Info>{props.terms}</Info>
                    <Info>{props.attachment}</Info>
                    <Subtitle>Services {"&"} projects</Subtitle>
                    <Info>{props.services}</Info>
                    <Subtitle>Internal correspondants</Subtitle>
                    <ProfWrap>
                        <img src={photosList?.[0]?.url} alt="" />
                        <Info>{props.internalCorr}</Info>
                        <Info>Message</Info>
                        <Info>Profil</Info>
                    </ProfWrap>
                    <ProfWrap>
                        <img src={photosList?.[0]?.url} alt="" />
                        <Info>{props.internalCorr1}</Info>
                        <Info>Message</Info>
                        <Info>Profil</Info>
                    </ProfWrap>
                </Panel>
            </SecondSection>
            <Proposals>
                <Info>Proposals</Info>
                <Column>
                    <p className="borderProp">Name</p>
                    <p className="borderProp">Entity</p>
                    <p className="borderProp">Location</p>
                    <p className="borderProp">Expertise</p>
                    <p className="borderProp">Date</p>
                    <p className="borderProp">Firm</p>

                    <p>{props.propName.name1}</p>
                    <p>{props.propEntity.entity1}</p>
                    <p>{props.propLocation.location1}</p>
                    <p>{props.propExpertise.expertise1}</p>
                    <p>{props.propDate.date1}</p>
                    <p>{props.propFirm.firm1}</p>
                    <p>{props.propName.name2}</p>
                    <p>{props.propEntity.entity2}</p>
                    <p>{props.propLocation.location2}</p>
                    <p>{props.propExpertise.expertise2}</p>
                    <p>{props.propDate.date2}</p>
                    <p>{props.propFirm.firm2}</p>
                    <p>{props.propName.name3}</p>
                    <p>{props.propEntity.entity3}</p>
                    <p>{props.propLocation.location3}</p>
                    <p>{props.propExpertise.expertise3}</p>
                    <p>{props.propDate.date3}</p>
                    <p>{props.propFirm.firm3}</p>
                </Column>
                <Column1>
                    <p className="borderProp">Name</p>
                    <p className="borderProp">Entity</p>
                    <p className="borderProp">Location</p>
                    <p className="borderProp">Expertise</p>
                    <p className="borderProp">Date</p>
                    <p>{props.interName.name1}</p>
                    <p>{props.interEntity.entity1}</p>
                    <p>{props.interLocation.location1}</p>
                    <p>{props.interExpertise.expertise1}</p>
                    <p>{props.interDate.date1}</p>
                    <p>{props.interName.name2}</p>
                    <p>{props.interEntity.entity2}</p>
                    <p>{props.interLocation.location2}</p>
                    <p>{props.interExpertise.expertise2}</p>
                    <p>{props.interDate.date2}</p>
                    <p>{props.interName.name3}</p>
                    <p>{props.interEntity.entity3}</p>
                    <p>{props.interLocation.location3}</p>
                    <p>{props.interExpertise.expertise3}</p>
                    <p>{props.interDate.date3}</p>
                </Column1>
                <Column2>
                    <p className="borderProp">Year</p>
                    <p className="borderProp">Cost center</p>
                    <p className="borderProp">Total amount</p>
                    <p className="borderProp">Law firm</p>
                    <div className="name">
                        <p>{props.amountYear.year1}</p>
                        <p>{props.amountYear.year2}</p>
                        <p>{props.amountYear.year3}</p>
                    </div>
                    <div className="cost">
                        <p>{props.amountCost.cost1}</p>
                        <p>{props.amountCost.cost2}</p>
                        <p>{props.amountCost.cost3}</p>
                        <p>{props.amountCost.cost4}</p>
                        <p>{props.amountCost.cost5}</p>
                    </div>
                    <div className="total">
                        <p>{props.amountTotal.total1}</p>
                        <p>{props.amountTotal.total2}</p>
                        <p>{props.amountTotal.total3}</p>
                        <p>{props.amountTotal.total4}</p>
                        <p>{props.amountTotal.total5}</p>
                    </div>
                    <div className="firm">
                        <p>{props.amountLaw.law1}</p>
                        <p>{props.amountLaw.law2}</p>
                        <p>{props.amountLaw.law3}</p>
                        <p>{props.amountLaw.law4}</p>
                        <p>{props.amountLaw.law5}</p>
                    </div>
                </Column2>
            </Proposals>
        </MainWrapper>
    );
};

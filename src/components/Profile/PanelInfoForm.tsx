// import React, { FC, useState, ChangeEvent } from "react";
// import styled from "styled-components";
// import { IState } from "../../reducers";
// import { useSelector } from "react-redux";
// import { IUsersReducer } from "../../reducers/usersReducer";
// import { IPhotosReducer } from "../../reducers/photosReducer";
// import { IPostsReducer } from "../../reducers/postsReducer";
// interface IProps {
//     mode: any;
//     mod: any;
// }

// const MainWrapper = styled.div`
//     width: 100%;
//     background-color: #fff;
//     height: 15%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
// const Photo = styled.div`
//     width: 10%;
//     background-color: red;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;
// const Name = styled.div`
//     width: 40%;
//     background-color: yellow;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// `;
// const Contact = styled.div`
//     width: 50%;
//     background-color: violet;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// `;
// const PhotoComponent = styled.img`
//     display: block;
//     border-radius: 90%;
// `;
// const Link = styled.a``;
// const Info = styled.p``;
// export const ProfileForm: FC<IProps> = (props) => {
//     const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
//         ...globalState.users,
//     }));
//     const { photosList } = useSelector<IState, IPhotosReducer>(
//         (globalState) => ({
//             ...globalState.photos,
//         })
//     );
//     return (
//         <MainWrapper>
//             <Photo>
//                 <PhotoComponent src={photosList?.[0]?.url} />
//                 <Link>See profile</Link>
//             </Photo>
//             <Name>
//                 <Info></Info>
//                 <Info></Info>
//                 <Info></Info>
//                 <Info></Info>
//                 {/* <Info>{usersList?.[9]?.name}</Info>
//                 <Info>{usersList?.[9]?.name}</Info> */}
//             </Name>
//             <Contact>
//                 {" "}
//                 <button
//                     onClick={() => {
//                         props.mode(true);
//                         props.mod("sss");
//                     }}
//                 >
//                     Edit
//                 </button>
//                 <Info></Info>
//                 <Info></Info>
//             </Contact>
//         </MainWrapper>
//     );
// };
import React, { FC } from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import "./style/formPanel.css";
const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Name = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Subtitle = styled.p`
    font-size: 16px;
    color: gray;
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

const FirstSection = styled.div`
    width: 100%;
    background-color: #fff;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Panel = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const ProfWrap = styled.div`
    display: flex;
    flex-direction: row;
`;
const Link = styled.a``;
const Info = styled.p``;
class PanelInfoForm extends React.Component<any, any> {
    state = {
        expertise: this.props.expertise,
        specialities: this.props.specialities,
        admission: this.props.admission,
        counties: this.props.counties,
        fee: this.props.fee,
        terms: this.props.terms,
        attachment: this.props.attachment,
        services: this.props.services,
        internalCorr: this.props.internalCorr,
        propName: this.props.interName,
        propEntity: this.props.propEntity,
        propLocation: this.props.propLocation,
        propExpertise: this.props.propExpertise,
        propDate: this.props.propDate,
        propFirm: this.props.propFirm,
        interName: this.props.interName,
        interEntity: this.props.interEntity,
        interLocation: this.props.interLocation,
        interExpertise: this.props.interExpertise,
        interDate: this.props.interDate,
        amountYear: this.props.amountYear,
        amountCost: this.props.amountCost,
        amountTotal: this.props.amountTotal,
        amountLaw: this.props.amountLaw,
    };
    //funkcja setsTate miala problem dlatego przejscie na funkcje strzałkowa
    // handleChange = (target: any) => {
    //     this.setState({ [target.name]: target.value });
    // };
    render() {
        return (
            <>
                <Formik
                    initialValues={this.state}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                    render={({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <MainWrapper>
                            <FirstSection>
                                <Name>
                                    <Subtitle>Expertise</Subtitle>
                                    <Info>
                                        <Field
                                            as="select"
                                            name="expertise"
                                            className="test1"
                                        >
                                            <option value="Mergers and acquisition">
                                                Mergers and acquisition
                                            </option>
                                            <option value="Dont work">
                                                Dont Work
                                            </option>
                                            <option value="Sleep tonight">
                                                Sleep Tonight
                                            </option>
                                        </Field>
                                    </Info>
                                    <Subtitle>Specialities</Subtitle>
                                    <Info>
                                        <Field
                                            as="select"
                                            name="specialities"
                                            className="test1"
                                        >
                                            <option value="Cross border operation">
                                                Cross border operation
                                            </option>
                                            <option value="IT Prof">
                                                IT Prof
                                            </option>
                                            <option value="Specialist">
                                                Specialist
                                            </option>
                                        </Field>
                                    </Info>
                                    <Subtitle>Admission</Subtitle>
                                    <Info>
                                        <Field
                                            as="select"
                                            name="admission"
                                            className="test1"
                                        >
                                            <option
                                                value="Paris bar Association"
                                                className="test1"
                                            >
                                                Paris bar Association
                                            </option>
                                            <option value="Tunisian bar Association">
                                                Tunisian bar Association
                                            </option>
                                            <option value="Greece bar Association">
                                                Greece bar Association
                                            </option>
                                        </Field>
                                    </Info>
                                    <Subtitle>Counties</Subtitle>
                                    <Info>
                                        {/* <Field
                                            type="email"
                                            name="admission"
                                            placeholder={values.admission}
                                        /> */}
                                        <Field
                                            as="select"
                                            name="counties"
                                            className="test1"
                                        >
                                            <option value="Tunisia">
                                                Tunisia
                                            </option>
                                            <option value="Greece">
                                                Greece
                                            </option>
                                            <option value="Japan">Japan</option>
                                        </Field>
                                    </Info>
                                    {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}
                                </Name>
                                <Contact>
                                    {console.log(values.internalCorr)}{" "}
                                    <button
                                        type="submit"
                                        onClick={() => {
                                            this.props.mode(true);
                                            this.props.passOther(
                                                values.expertise,
                                                values.specialities,
                                                values.admission,
                                                values.counties,
                                                values.fee,
                                                values.terms,
                                                values.attachment,
                                                values.services,
                                                values.internalCorr,
                                                values.propName,
                                                values.propEntity,
                                                values.propLocation,
                                                values.propExpertise,
                                                values.propDate,
                                                values.propFirm,
                                                values.interName,
                                                values.interEntity,
                                                values.interLocation,
                                                values.interExpertise,
                                                values.interDate,
                                                values.amountYear,
                                                values.amountCost,
                                                values.amountTotal,
                                                values.amountLaw
                                            );
                                        }}
                                    >
                                        Edit
                                    </button>
                                </Contact>
                            </FirstSection>
                            <Panel>
                                <Subtitle>Fee</Subtitle>
                                <input
                                    name="fee"
                                    onChange={handleChange}
                                    value={values.fee}
                                />
                                <Subtitle>Terms {"&"} Conditions</Subtitle>
                                <input
                                    name="terms"
                                    onChange={handleChange}
                                    value={values.terms}
                                />
                                <input
                                    type="file"
                                    name="attachment"
                                    onChange={handleChange}
                                />
                                <Subtitle>Services {"&"} projects</Subtitle>
                                <input
                                    name="services"
                                    onChange={handleChange}
                                    value={values.services}
                                />
                                <Subtitle>Internal correspondants</Subtitle>
                                <ProfWrap>
                                    <img src={this.props.photo} alt="" />
                                    <Info>
                                        <Field
                                            as="select"
                                            name="internalCorr"
                                            className="test1"
                                        >
                                            <option value={"Leanne Graham"}>
                                                Leanne Graham
                                            </option>
                                            <option value={"Ervin Howell"}>
                                                Ervin Howell
                                            </option>
                                            <option value={"Clementine Bauch"}>
                                                Clementine Bauch
                                            </option>
                                            <option value={" Patricia Lebsack"}>
                                                Patricia Lebsack
                                            </option>
                                            <option value={"Chelsey Dietrich"}>
                                                Chelsey Dietrich
                                            </option>
                                            <option
                                                value={"Mrs. Dennis Schulist"}
                                            >
                                                Mrs. Dennis Schulist
                                            </option>
                                            <option value={"Kurtis Weissnay"}>
                                                Kurtis Weissnay
                                            </option>
                                            <option
                                                value={
                                                    "Nicholas Runolfsdottir V"
                                                }
                                            >
                                                Nicholas Runolfsdottir V
                                            </option>
                                            <option value={"Glenna Reichert"}>
                                                Glenna Reichert
                                            </option>
                                            <option
                                                value={"Clementina DuBuque"}
                                            >
                                                Clementina DuBuque
                                            </option>
                                        </Field>
                                    </Info>
                                </ProfWrap>
                            </Panel>
                        </MainWrapper>
                    )}
                />
            </>
        );
    }
}
export default PanelInfoForm;

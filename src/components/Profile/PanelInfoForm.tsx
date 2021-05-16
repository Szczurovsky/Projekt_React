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
    width: 50%;
    height: 100%;
    display: flex;

    flex-direction: column;
`;
const PhotoComponent = styled.img`
    display: block;
    border-radius: 90%;
`;

const FirstSection = styled.div`
    width: 100%;
    background-color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SecondSection = styled.div`
    height: 500%;
`;
const Link = styled.a``;
const Info = styled.p``;
class PanelInfoForm extends React.Component<any, any> {
    state = {
        expertise: this.props.expertise,
        specialities: this.props.specialities,
        admission: this.props.admission,
        counties: this.props.counties,
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
                                        {" "}
                                        <input
                                            name="expertise"
                                            onChange={handleChange}
                                            value={values.expertise}
                                        />
                                    </Info>
                                    <Subtitle>Specialities</Subtitle>
                                    <Info>
                                        <input
                                            name="specialities"
                                            onChange={handleChange}
                                            value={values.specialities}
                                        />
                                    </Info>
                                    <Subtitle>Admission</Subtitle>
                                    <Info>
                                        <Field as="select" name="admission">
                                            <option value="a">a</option>
                                            <option value="b">b</option>
                                            <option value="c">c</option>
                                        </Field>
                                    </Info>
                                    <Subtitle>Counties</Subtitle>
                                    <Info>
                                        {/* <Field
                                            type="email"
                                            name="admission"
                                            placeholder={values.admission}
                                        /> */}
                                        <Field as="select" name="counties">
                                            <option value="Poland">
                                                Poland
                                            </option>
                                            <option value="Greece">
                                                Greece
                                            </option>
                                            <option value="Japan">Japan</option>
                                        </Field>
                                    </Info>
                                    {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}

                                    <button
                                        type="submit"
                                        onClick={() => {
                                            this.props.mode(true);
                                            this.props.passOther(
                                                values.expertise,
                                                values.specialities,
                                                values.admission,
                                                values.counties
                                            );
                                        }}
                                    >
                                        Edit
                                    </button>
                                </Name>
                            </FirstSection>
                            {/* <SecondSection>
                                ssss
                                <button
                                    type="submit"
                                    onClick={() => {
                                        this.props.mode(true);
                                        this.props.passOther(
                                            values.expertise,
                                            values.specialities,
                                            values.address,
                                            values.username
                                        );
                                    }}
                                >
                                    Edit
                                </button>
                            </SecondSection> */}
                        </MainWrapper>
                        // <form onSubmit={handleSubmit}>
                        //     <input
                        //         name="imie"
                        //         onChange={handleChange}
                        //         value={values.imie}
                        //     />
                        // <button
                        //     type="submit"
                        //     onClick={() => {
                        //         this.props.mode(true);
                        //         this.props.passImie(values.imie);
                        //     }}
                        // >
                        //     Edit
                        // </button>
                        // </form>
                    )}
                />
                {/* <button
                    onClick={() => {
                        this.props.mode(true);
                        this.props.passImie("Izabela");
                    }}
                >
                    Edit
                </button> */}
            </>
        );
    }
}
export default PanelInfoForm;
// import React, { FC } from "react";
// import styled from "styled-components";

// class ProfileForm extends React.Component<any, any> {
//     state = {
//         imie: this.props.imie,
//     };
//
//     handleChange = (target: any) => {
//         this.setState({ imie: target.value });
//         console.log(target);
//     };
//     render() {
//         return (
//             <>
//                 {console.log(this.state.imie)}
//                 <p>{this.state.imie}</p>
//                 <input type="text" name="imie" onChange={this.handleChange} />
//                 <button
//                     onClick={() => {
//                         console.log(this.state.imie);
//                         this.props.mode(true);
//                         this.props.passImie(this.state.imie);
//                     }}
//                 >
//                     Edit
//                 </button>
//             </>
//         );
//     }
// }
// export default ProfileForm;

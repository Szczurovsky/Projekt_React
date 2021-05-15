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
import { Formik } from "formik";
import "./style/form.css";
const MainWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Photo = styled.div`
    width: 10%;
    background-color: red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Name = styled.div`
    width: 40%;
    background-color: yellow;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Contact = styled.div`
    width: 50%;
    background-color: violet;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const PhotoComponent = styled.img`
    display: block;
    border-radius: 90%;
`;
const Link = styled.a``;
const Info = styled.p``;
class ProfileForm extends React.Component<any, any> {
    state = {
        imie: this.props.imie,
        photo: this.props.photo,
        company: this.props.company,
        address: this.props.address,
        username: this.props.username,
        phone: this.props.phone,
        email: this.props.email,
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
                            <Photo>
                                <PhotoComponent src={this.state.photo} />
                                <Link>See profile</Link>
                            </Photo>
                            <Name>
                                <form onSubmit={handleSubmit} className="form">
                                    <input
                                        name="imie"
                                        onChange={handleChange}
                                        value={values.imie}
                                    />
                                    <input
                                        name="company"
                                        onChange={handleChange}
                                        value={values.company}
                                    />
                                    <input
                                        name="address"
                                        onChange={handleChange}
                                        value={values.address}
                                    />
                                    <input
                                        name="username"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                </form>
                                {/* <Info>{usersList?.[9]?.name}</Info>
                <Info>{usersList?.[9]?.name}</Info> */}
                            </Name>
                            <Contact>
                                <input
                                    name="phone"
                                    onChange={handleChange}
                                    value={values.phone}
                                />
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                <button
                                    type="submit"
                                    onClick={() => {
                                        this.props.mode(true);
                                        this.props.passImie(
                                            values.imie,
                                            values.company,
                                            values.address,
                                            values.username,
                                            values.email,
                                            values.phone
                                        );
                                    }}
                                >
                                    Edit
                                </button>
                            </Contact>
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
export default ProfileForm;
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

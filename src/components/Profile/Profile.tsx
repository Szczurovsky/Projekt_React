import React, { FC, useState } from "react";
import styled from "styled-components";
import { Profil } from "./Profil";
import ProfileForm from "./ProfileForm";
import { Formik } from "formik";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../reducers/usersReducer";
import { IPhotosReducer } from "../../reducers/photosReducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./style/licznik.css";
const Linked = styled.p`
    display: block;
    color: #272727;
    text-decoration: none;
    padding-left: 20px;
    padding: 2px 0 2px 20px;
`;
const Links = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: roboto, sans-serif;
    letter-spacing: 0.5px;
`;

// class Profile extends React.Component<any, any> {
//     state = {
//         count: 0,
//         result: this.props.result,
//     };
//     //funkcja setsTate miala problem dlatego przejscie na funkcje strzałkowa

//     render() {
//         return (
//             <>
//                 <Linked>
//                     {" "}
//                     <Links to="/ProfileForm"> Edytuj</Links>
//                 </Linked>
//             </>
//         );
//     }
// }
interface IProps {
    passImie?: any;
    mode?: any;
    mod?: any;
    imionko?: any;
    company?: any;
    address?: any;
    username?: any;
    phone?: any;
    email?: any;
}
class Profilek extends React.Component<any, any> {
    state = {
        imie: "Humberta Swift",
        company: "Clifford Chance",
        address: "New York",
        username: "Partner",
        phone: "+33 (0)6 12 34 56 78",
        email: "humbertaswift@gmail.com",
    };
    getUsers = () => {};
    passImie = (
        passedImie: any,
        passedCompany: any,
        passedAddress: any,
        passedUsername: any,
        passedPhone: number,
        passedEmail: any
    ) => {
        this.setState({
            imie: passedImie,
            company: passedCompany,
            address: passedAddress,
            username: passedUsername,
            phone: passedPhone,
            email: passedEmail,
        });
    };
    render() {
        return (
            <>
                <Profile
                    imionko={this.state.imie}
                    company={this.state.company}
                    address={this.state.address}
                    phone={this.state.phone}
                    email={this.state.email}
                    username={this.state.username}
                    passImie={this.passImie}
                />
            </>
        );
    }
}

const Profile: FC<IProps> = (props: any) => {
    const [editMode, setMode] = useState<boolean>(true);
    const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
        ...globalState.users,
    }));
    const { photosList } = useSelector<IState, IPhotosReducer>(
        (globalState) => ({
            ...globalState.photos,
        })
    );
    return (
        <>
            {editMode ? (
                <Profil
                    mode={setMode}
                    imie={props.imionko}
                    company={props.company}
                    address={props.address}
                    phone={props.phone}
                    email={props.email}
                    username={props.username}
                />
            ) : (
                <ProfileForm
                    mode={setMode}
                    imie={props.imionko}
                    company={props.company}
                    address={props.address}
                    phone={props.phone}
                    email={props.email}
                    username={props.username}
                    passImie={props.passImie}
                />
            )}

            {/* <button onClick={() => setMode(false)}>Edit</button> */}
            {/* <button onClick={() => setMode(true)}>Edit</button> */}
        </>
    );
};
export default Profilek;

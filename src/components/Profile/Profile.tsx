import React, { FC, useState } from "react";
import styled from "styled-components";
import { Profil } from "./Profil";
import ProfileForm from "./ProfileForm";
import { Formik } from "formik";

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
}
class Profilek extends React.Component<any, any> {
    state = { imie: "weronika", fetched: false };

    passImie = (passedImie: any) => {
        this.setState({ imie: passedImie });
    };
    render() {
        return (
            <>
                <Profile imionko={this.state.imie} passImie={this.passImie} />

                <button
                    onClick={() => {
                        console.log(this.state.imie);
                    }}
                ></button>
            </>
        );
    }
}
interface IProps1 {
    render: any;
}
const Profile: FC<IProps> = (props: any) => {
    const [editMode, setMode] = useState<boolean>(true);

    return (
        <>
            {editMode ? (
                <Profil mode={setMode} imie={props.imionko} />
            ) : (
                <ProfileForm
                    mode={setMode}
                    imie={props.imionko}
                    passImie={props.passImie}
                />
            )}

            {/* <button onClick={() => setMode(false)}>Edit</button> */}
            {/* <button onClick={() => setMode(true)}>Edit</button> */}
        </>
    );
};
export default Profilek;

import React, { FC, useState } from "react";
import styled from "styled-components";
import { Profil } from "./Profil";
import { PanelInfo } from "./PanelInfo";
import PanelInfoForm from "./PanelInfoForm";
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
    expertise?: any;
    specialities?: any;
    admission?: any;
    counties?: any;
    fee?: any;
    terms?: any;
    attachment?: any;
    services?: any;
    internalCorr?: any;
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
    photo?: any;
    passOther?: any;
}
class Profilek extends React.Component<any, any> {
    state = {
        imie: "Humberta Swift",
        company: "Clifford Chance",
        address: "New York",
        username: "Partner",
        phone: "+33 (0)6 12 34 56 78",
        email: "humbertaswift@gmail.com",
        expertise: "Mergers and acquisition",
        specialities: "Cross border operation",
        admission: "Paris bar Association",
        counties: "Tunisia",
        fee: "610E/hour (Negociated)",
        terms: "Monthly 10k€ retainer - see with Jeanny Smith",
        attachment: "Nie wybrano pliku",
        services: "Corporate M&A and international acquisitions",
        internalCorr: "Leanne Graham",

        propName: ["Operation Syriusz", "Op. Prometheus", "Op.Latandre"],
        propEntity: ["Renault Corpo", "Renault Hq", "Renault Br"],
        propLocation: ["France", "USA", "Italia"],
        propExpertise: ["#Tax", "#M&A", "#Social"],
        propDate: ["20/01/2018", "18/02/2019", "18/02/2019"],
        propFirm: ["Racine", "Clifford chance", "SVZ"],
        interName: ["Operation Syriusz", "Op. Prometheus", "Op.Latandre"],
        interEntity: ["Renault Corpo", "Renault Hq", "Renault Br"],
        interLocation: ["France", "USA", "Italia"],
        interExpertise: ["#Tax", "#M&A", "#Social"],
        interDate: ["20/01/2018", "18/02/2019", "18/02/2019"],
        amountYear: [2017, 2018, 2019],
        amountCost: ["CS 153", "CS 153", "CS 47", "CS 153", "CS 32"],
        amountTotal: ["3500€", "9500€", "10500€", "18500€", "15500€"],
        amountLaw: [
            "Clifford chance",
            "Linklaters",
            "Linklaters",
            "Linklaters",
            "Linklaters",
        ],
    };
    getUsers = () => {};
    passImie = (
        passedImie?: any,
        passedCompany?: any,
        passedAddress?: any,
        passedUsername?: any,
        passedPhone?: number,
        passedEmail?: any
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
    passOther = (
        passedExpertise?: any,
        passedSpecialities?: any,
        passedAdmission?: any,
        passedCounties?: any,
        passedFee?: any,
        passedTerms?: any,
        passedAttachment?: any,
        passedServices?: any,
        passedInternalCorr?: any,
        passedPropName?: any,
        passedPropEntity?: any,
        passedPropLocation?: any,
        passedPropExpertise?: any,
        passedPropDate?: any,
        passedPropFirm?: any,
        passedInterName?: any,
        passedInterEntity?: any,
        passedInterLocation?: any,
        passedInterExpertise?: any,
        passedInterDate?: any,
        passedAmountYear?: any,
        passedAmountCost?: any,
        passedAmountTotal?: any,
        passedAmountLaw?: any
    ) => {
        this.setState({
            expertise: passedExpertise,
            specialities: passedSpecialities,
            admission: passedAdmission,
            counties: passedCounties,
            fee: passedFee,
            terms: passedTerms,
            attachment: passedAttachment,
            services: passedServices,
            internalCorr: passedInternalCorr,
            propName: passedPropName,
            propEntity: passedPropEntity,
            propLocation: passedPropLocation,
            propExpertise: passedPropExpertise,
            propDate: passedPropDate,
            propFirm: passedPropFirm,
            interName: passedInterName,
            interEntity: passedInterEntity,
            interLocation: passedInterLocation,
            interExpertise: passedInterExpertise,
            interDate: passedInterDate,
            amountYear: passedAmountYear,
            amountCost: passedAmountCost,
            amountTotal: passedAmountTotal,
            amountLaw: passedAmountLaw,
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
                    expertise={this.state.expertise}
                    specialities={this.state.specialities}
                    admission={this.state.admission}
                    counties={this.state.counties}
                    fee={this.state.fee}
                    terms={this.state.terms}
                    attachment={this.state.attachment}
                    services={this.state.services}
                    internalCorr={this.state.internalCorr}
                    propName={this.state.interName}
                    propEntity={this.state.propEntity}
                    propLocation={this.state.propLocation}
                    propExpertise={this.state.propExpertise}
                    propDate={this.state.propDate}
                    propFirm={this.state.propFirm}
                    interName={this.state.interName}
                    interEntity={this.state.interEntity}
                    interLocation={this.state.interLocation}
                    interExpertise={this.state.interExpertise}
                    interDate={this.state.interDate}
                    amountYear={this.state.amountYear}
                    amountCost={this.state.amountCost}
                    amountTotal={this.state.amountTotal}
                    amountLaw={this.state.amountLaw}
                    passImie={this.passImie}
                    passOther={this.passOther}
                />
            </>
        );
    }
}

const Profile: FC<IProps> = (props: any) => {
    const [editMode, setMode] = useState<boolean>(true);
    const [editModeSecond, setModeSecond] = useState<boolean>(true);
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
            </>
            <>
                {editModeSecond ? (
                    <PanelInfo
                        mode={setModeSecond}
                        expertise={props.expertise}
                        specialities={props.specialities}
                        admission={props.admission}
                        counties={props.counties}
                        fee={props.fee}
                        terms={props.terms}
                        attachment={props.attachment}
                        services={props.services}
                        internalCorr={props.internalCorr}
                        propName={props.interName}
                        propEntity={props.propEntity}
                        propLocation={props.propLocation}
                        propExpertise={props.propExpertise}
                        propDate={props.propDate}
                        propFirm={props.propFirm}
                        interName={props.interName}
                        interEntity={props.interEntity}
                        interLocation={props.interLocation}
                        interExpertise={props.interExpertise}
                        interDate={props.interDate}
                        amountYear={props.amountYear}
                        amountCost={props.amountCost}
                        amountTotal={props.amountTotal}
                        amountLaw={props.amountLaw}
                    />
                ) : (
                    <PanelInfoForm
                        mode={setModeSecond}
                        expertise={props.expertise}
                        specialities={props.specialities}
                        admission={props.admission}
                        counties={props.counties}
                        passOther={props.passOther}
                        fee={props.fee}
                        terms={props.terms}
                        attachment={props.attachment}
                        services={props.services}
                        internalCorr={props.internalCorr}
                        propName={props.interName}
                        propEntity={props.propEntity}
                        propLocation={props.propLocation}
                        propExpertise={props.propExpertise}
                        propDate={props.propDate}
                        propFirm={props.propFirm}
                        interName={props.interName}
                        interEntity={props.interEntity}
                        interLocation={props.interLocation}
                        interExpertise={props.interExpertise}
                        interDate={props.interDate}
                        amountYear={props.amountYear}
                        amountCost={props.amountCost}
                        amountTotal={props.amountTotal}
                        amountLaw={props.amountLaw}
                        photo={photosList?.[0]?.url}
                    />
                )}
            </>
        </>
    );
};
export default Profilek;

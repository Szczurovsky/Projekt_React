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

    flex-direction: column;
`;
const Subtitle = styled.p`
    font-size: 16px;
    color: gray;
    text-align: left;
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
    height: 20%;
    display: flex;
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
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;
const Info = styled.p`
    text-align: left;
`;
const ProfWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Proposals = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
`;
const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
`;
const Column1 = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
`;
const Column2 = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
`;
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
        internalCorr1: this.props.internalCorr1,
        propName: this.props.propName,
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
                                                values.internalCorr1,
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
                            <SecondSection>
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
                                                <option
                                                    value={"Clementine Bauch"}
                                                >
                                                    Clementine Bauch
                                                </option>
                                                <option
                                                    value={" Patricia Lebsack"}
                                                >
                                                    Patricia Lebsack
                                                </option>
                                                <option
                                                    value={"Chelsey Dietrich"}
                                                >
                                                    Chelsey Dietrich
                                                </option>
                                                <option
                                                    value={
                                                        "Mrs. Dennis Schulist"
                                                    }
                                                >
                                                    Mrs. Dennis Schulist
                                                </option>
                                                <option
                                                    value={"Kurtis Weissnay"}
                                                >
                                                    Kurtis Weissnay
                                                </option>
                                                <option
                                                    value={
                                                        "Nicholas Runolfsdottir V"
                                                    }
                                                >
                                                    Nicholas Runolfsdottir V
                                                </option>
                                                <option
                                                    value={"Glenna Reichert"}
                                                >
                                                    Glenna Reichert
                                                </option>
                                                <option
                                                    value={"Clementina DuBuque"}
                                                >
                                                    Clementina DuBuque
                                                </option>
                                            </Field>
                                        </Info>
                                        <Info>Message</Info>
                                        <Info>Profil</Info>
                                    </ProfWrap>
                                    <ProfWrap>
                                        <img src={this.props.photo} alt="" />
                                        <Info>
                                            <Field
                                                as="select"
                                                name="internalCorr1"
                                                className="test1"
                                            >
                                                <option value={"Leanne Graham"}>
                                                    Leanne Graham
                                                </option>
                                                <option value={"Ervin Howell"}>
                                                    Ervin Howell
                                                </option>
                                                <option
                                                    value={"Clementine Bauch"}
                                                >
                                                    Clementine Bauch
                                                </option>
                                                <option
                                                    value={" Patricia Lebsack"}
                                                >
                                                    Patricia Lebsack
                                                </option>
                                                <option
                                                    value={"Chelsey Dietrich"}
                                                >
                                                    Chelsey Dietrich
                                                </option>
                                                <option
                                                    value={
                                                        "Mrs. Dennis Schulist"
                                                    }
                                                >
                                                    Mrs. Dennis Schulist
                                                </option>
                                                <option
                                                    value={"Kurtis Weissnay"}
                                                >
                                                    Kurtis Weissnay
                                                </option>
                                                <option
                                                    value={
                                                        "Nicholas Runolfsdottir V"
                                                    }
                                                >
                                                    Nicholas Runolfsdottir V
                                                </option>
                                                <option
                                                    value={"Glenna Reichert"}
                                                >
                                                    Glenna Reichert
                                                </option>
                                                <option
                                                    value={"Clementina DuBuque"}
                                                >
                                                    Clementina DuBuque
                                                </option>
                                            </Field>
                                        </Info>
                                        <Info>Message</Info>
                                        <Info>Profil</Info>
                                    </ProfWrap>
                                </Panel>
                            </SecondSection>
                            <Proposals>
                                <Info>Proposals</Info>
                                <Column>
                                    <p>Name</p>
                                    <p>Entity</p>
                                    <p>Location</p>
                                    <p>Expertise</p>
                                    <p>Date</p>
                                    <p>Firm</p>
                                    <p>
                                        <input
                                            name="propName.name1"
                                            onChange={handleChange}
                                            value={values.propName.name1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propEntity.entity1"
                                            onChange={handleChange}
                                            value={values.propEntity.entity1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propLocation.location1"
                                            onChange={handleChange}
                                            value={
                                                values.propLocation.location1
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propExpertise.expertise1"
                                            onChange={handleChange}
                                            value={
                                                values.propExpertise.expertise1
                                            }
                                        />
                                    </p>

                                    {/* data */}
                                    <p>
                                        <input
                                            name="propDate.date1"
                                            onChange={handleChange}
                                            value={values.propDate.date1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propFirm.firm1"
                                            onChange={handleChange}
                                            value={values.propFirm.firm1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propName.name2"
                                            onChange={handleChange}
                                            value={values.propName.name2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propEntity.entity2"
                                            onChange={handleChange}
                                            value={values.propEntity.entity2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propLocation.location2"
                                            onChange={handleChange}
                                            value={
                                                values.propLocation.location2
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propExpertise.expertise2"
                                            onChange={handleChange}
                                            value={
                                                values.propExpertise.expertise2
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propDate.date2"
                                            onChange={handleChange}
                                            value={values.propDate.date2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propFirm.firm2"
                                            onChange={handleChange}
                                            value={values.propFirm.firm2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propName.name3"
                                            onChange={handleChange}
                                            value={values.propName.name3}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propEntity.entity3"
                                            onChange={handleChange}
                                            value={values.propEntity.entity3}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propLocation.location3"
                                            onChange={handleChange}
                                            value={
                                                values.propLocation.location3
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propExpertise.expertise3"
                                            onChange={handleChange}
                                            value={
                                                values.propExpertise.expertise3
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propDate.date3"
                                            onChange={handleChange}
                                            value={values.propDate.date3}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="propFirm.firm3"
                                            onChange={handleChange}
                                            value={values.propFirm.firm3}
                                        />
                                    </p>
                                </Column>
                                <Column1>
                                    <p>Name</p>
                                    <p>Entity</p>
                                    <p>Location</p>
                                    <p>Expertise</p>
                                    <p>Date</p>
                                    <p>
                                        <input
                                            name="interName.name1"
                                            onChange={handleChange}
                                            value={values.interName.name1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interEntity.entity1"
                                            onChange={handleChange}
                                            value={values.interEntity.entity1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interLocation.location1"
                                            onChange={handleChange}
                                            value={
                                                values.interLocation.location1
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interExpertise.expertise1"
                                            onChange={handleChange}
                                            value={
                                                values.interExpertise.expertise1
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interDate.date1"
                                            onChange={handleChange}
                                            value={values.interDate.date1}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interName.name2"
                                            onChange={handleChange}
                                            value={values.interName.name2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interEntity.entity2"
                                            onChange={handleChange}
                                            value={values.interEntity.entity2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interLocation.location2"
                                            onChange={handleChange}
                                            value={
                                                values.interLocation.location2
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interExpertise.expertise2"
                                            onChange={handleChange}
                                            value={
                                                values.interExpertise.expertise2
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interDate.date2"
                                            onChange={handleChange}
                                            value={values.interDate.date2}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interName.name3"
                                            onChange={handleChange}
                                            value={values.interName.name3}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interEntity.entity3"
                                            onChange={handleChange}
                                            value={values.interEntity.entity3}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interLocation.location3"
                                            onChange={handleChange}
                                            value={
                                                values.interLocation.location3
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interExpertise.expertise3"
                                            onChange={handleChange}
                                            value={
                                                values.interExpertise.expertise3
                                            }
                                        />
                                    </p>
                                    <p>
                                        <input
                                            name="interDate.date3"
                                            onChange={handleChange}
                                            value={values.interDate.date3}
                                        />
                                    </p>
                                </Column1>
                                <Column2>
                                    <p>Year</p>
                                    <p>Cost center</p>
                                    <p>Total amount</p>
                                    <p>Law firm</p>
                                    <div className="name">
                                        <p>
                                            <input
                                                name="amountYear.year1"
                                                onChange={handleChange}
                                                value={values.amountYear.year1}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountYear.year2"
                                                onChange={handleChange}
                                                value={values.amountYear.year2}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountYear.year3"
                                                onChange={handleChange}
                                                value={values.amountYear.year3}
                                            />
                                        </p>
                                    </div>
                                    <div className="cost">
                                        <p>
                                            <input
                                                name="amountCost.cost1"
                                                onChange={handleChange}
                                                value={values.amountCost.cost1}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountCost.cost2"
                                                onChange={handleChange}
                                                value={values.amountCost.cost2}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountCost.cost3"
                                                onChange={handleChange}
                                                value={values.amountCost.cost3}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountCost.cost4"
                                                onChange={handleChange}
                                                value={values.amountCost.cost4}
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountCost.cost5"
                                                onChange={handleChange}
                                                value={values.amountCost.cost5}
                                            />
                                        </p>
                                    </div>
                                    <div className="total">
                                        <p>
                                            <input
                                                name="amountTotal.total1"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total1
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountTotal.total2"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total2
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountTotal.total3"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total3
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountTotal.total4"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total4
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountTotal.total5"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total5
                                                }
                                            />
                                        </p>
                                    </div>
                                    <div className="firm">
                                        <p>
                                            <input
                                                name="amountLaw.law1"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total1
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountLaw.law2"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total2
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountLaw.law3"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total3
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountLaw.law4"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total4
                                                }
                                            />
                                        </p>
                                        <p>
                                            <input
                                                name="amountLaw.law5"
                                                onChange={handleChange}
                                                value={
                                                    values.amountTotal.total5
                                                }
                                            />
                                        </p>
                                    </div>
                                </Column2>
                            </Proposals>
                        </MainWrapper>
                    )}
                />
            </>
        );
    }
}
export default PanelInfoForm;

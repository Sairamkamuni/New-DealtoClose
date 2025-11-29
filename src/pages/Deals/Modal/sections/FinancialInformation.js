import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select"
import { financeTypes, acceptableFinanceTypes } from "AllDummyData/DealsDummyData";
import { InputField, SelectField, AsyncSelectField, ToggleSelector } from "pages/InputFields/InputFields";

const FinancialInformation = ({ formType, handleChange, handleSelectChange, formData }) => {
    const [compBuyer, setCompBuyer] = useState("percentage");
    const [compList, setCompList] = useState("fixed");
    const [teamLeaderSplit, setTeamLeaderSplit] = useState("fixed");
    const [brokerageSplit, setBrokerageSplit] = useState("percentage");

    return (
        <div id="section-2">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bolder mb-1">Financial Information</h3>
            </div>

            <Row className="g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <SelectField label="Finance Types" name="finance_types" options={financeTypes} value={formData?.finance_types}
                            onChange={handleSelectChange} placeholder="Select Type..." />
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <SelectField label="Acceptable Finance Types" name="acceptable_finance_types" options={acceptableFinanceTypes} value={formData?.acceptable_finance_types}
                            onChange={handleSelectChange} placeholder="Select Type..." />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6">
                        <InputField label="Purchase Price" type="text" name="purchase_price" showDollar={true}
                            value={formData?.purchase_price} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <InputField label="Listing Price" type="text" name="listing_price" showDollar={true}
                            value={formData?.listing_price} onChange={handleChange} />
                    </Col>
                )}

                <Col md="6">
                    <InputField label="Transaction Fee" type="text" name="transaction_fee" showDollar={true}
                        value={formData?.transaction_fee} onChange={handleChange} />
                </Col>

                {formType === "Buyer" && (
                    <>
                        <Col md="6">
                            <InputField label="1st Initial Deposit (EMD)" type="text" name="initial_deposit" showDollar={true}
                                value={formData?.initial_deposit} onChange={handleChange} />
                        </Col>

                        <Col md="6">
                            <InputField label="2nd Initial Deposit (EMD)" type="text" name="additional_deposit" showDollar={true}
                                value={formData?.additional_deposit} onChange={handleChange} />
                        </Col>
                    </>
                )}

                <Col md="6">
                    <label>Compensation to Buyer&apos;s Agent</label>
                    <Row className="g-0 align-items-center">
                        <Col md={2}>
                            <ToggleSelector options={[{ label: "%", value: "percentage" }, { label: "$", value: "fixed" }]}
                                value={compBuyer} onChange={setCompBuyer} />
                        </Col>
                        <Col>
                            <InputField type="text" name="compensation_buyer_agent"
                                value={formData?.compensation_buyer_agent} onChange={handleChange} />
                        </Col>
                    </Row>
                </Col>

                <Col md="6">
                    <label>Compensation to Listing&apos;s Agent</label>
                    <Row>
                        <Col md={2}>
                            <ToggleSelector options={[{ label: "%", value: "percentage" }, { label: "$", value: "fixed" }]}
                                value={compList} onChange={setCompList} />
                        </Col>
                        <Col>
                            <InputField type="text" name="compensation_listing_agent"
                                value={formData?.compensation_listing_agent} onChange={handleChange} />
                        </Col>
                    </Row>
                </Col>

                <Col md="6">
                    <label>Team Leader Split</label>
                    <Row>
                        <Col md={2}>
                            <ToggleSelector options={[{ label: "%", value: "percentage" }, { label: "$", value: "fixed" }]}
                                value={teamLeaderSplit} onChange={setTeamLeaderSplit} />
                        </Col>
                        <Col>
                            <InputField type="text" name="team_leader_split"
                                value={formData?.team_leader_split} onChange={handleChange} />
                        </Col>
                    </Row>
                </Col>

                <Col md="6">
                    <label>Brokerage Split</label>
                    <Row>
                        <Col md={2}>
                            <ToggleSelector options={[{ label: "%", value: "percentage" }, { label: "$", value: "fixed" }]}
                                value={brokerageSplit} onChange={setBrokerageSplit} />
                        </Col>
                        <Col>
                            <InputField type="text" name="brokerage_split"
                                value={formData?.brokerage_split} onChange={handleChange} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    )
};

export default FinancialInformation;
